# -*- coding: utf-8 -*-
"""
简道云提交云函数（Flask）
部署：腾讯云函数 / 轻量云 / 其它支持 Flask 的环境。
前端将 POST JSON 到 /api/join （保持与原来 vite 本地代理一致的路径）
"""
from flask import Flask, request, jsonify, make_response
import requests
import json
import time

app = Flask(__name__)

# ===== 配置（仅服务器端持有） =====
JDY_TOKEN = "t3DuFme3k7seb68u3Jf8GCLAUOTlOEvZ"  # 放在服务端即可；若需更安全可改为环境变量
UPSTREAM = "https://api.jiandaoyun.com/api/v5/app/entry/data/create"
TIMEOUT = 8  # 秒

# 允许的来源（生产改成固定域名）
ALLOWED_ORIGINS = [
    "https://eclub.fuwaki.xyz",
    "https://e-club-h5.vercel.app/",  # 可能的预览 / 备用（可按需删除）
]


def _cors(resp):
    origin = request.headers.get("Origin", "")
    if origin in ALLOWED_ORIGINS:
        resp.headers["Access-Control-Allow-Origin"] = origin
        resp.headers["Vary"] = "Origin"
    resp.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    resp.headers["Access-Control-Max-Age"] = "600"
    return resp


@app.route("/")
def root():
    return "OK"

@app.route("/health")
def health():
    return jsonify({"ok": True, "ts": int(time.time())})


@app.route("/api/join", methods=["POST", "OPTIONS"])
def api_join():
    if request.method == "OPTIONS":
        return _cors(make_response("", 204))

    # 基础防护：限制内容长度
    raw_len = request.content_length or 0
    if raw_len > 50 * 1024:  # 50KB 足够
        resp = make_response(jsonify({"error": "payload too large"}), 413)
        return _cors(resp)

    try:
        data = request.get_json(force=True, silent=False)
    except Exception:
        resp = make_response(jsonify({"error": "invalid json"}), 400)
        return _cors(resp)

    # 可选：追加服务端时间戳（若前端已带可覆盖/忽略）
    if isinstance(data, dict) and "data" in data and isinstance(data["data"], dict):
        data["data"].setdefault("_server_ts", {"value": int(time.time()*1000)})

    try:
        upstream_resp = requests.post(
            UPSTREAM,
            headers={
                "Authorization": f"Bearer {JDY_TOKEN}",
                "Content-Type": "application/json"
            },
            data=json.dumps(data, ensure_ascii=False).encode("utf-8"),
            timeout=TIMEOUT
        )
    except requests.RequestException as e:
        resp = make_response(jsonify({"error": "upstream request failed", "detail": str(e)}), 502)
        return _cors(resp)

    # 透传上游状态 & 内容
    content_type = upstream_resp.headers.get("Content-Type", "application/json; charset=utf-8")
    resp = make_response(upstream_resp.text, upstream_resp.status_code)
    resp.headers["Content-Type"] = content_type
    resp.headers["Cache-Control"] = "no-store"
    return _cors(resp)


# 本地调试：python main.py
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9000, debug=True)
