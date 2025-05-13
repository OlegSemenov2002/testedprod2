import type { StorybookConfig } from '@storybook/react-webpack5';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import WebpackConfig from "./webpack.config";

const isDev: boolean = true
const config: StorybookConfig = {
  "stories": [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },





};
export default config;