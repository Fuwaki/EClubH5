import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from '@tailwindcss/postcss';
export default {
    plugins: [
        tailwindcss,
        postcssPresetEnv(/* pluginOptions */)
    ]
}