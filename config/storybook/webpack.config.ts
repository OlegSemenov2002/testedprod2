import React from 'react';
import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from '../build/types/config';
import { cssLoader } from '../build/loaders/cssLoader';

const WebpackConfig = async ({ config }:webpack.Configuration) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', 'tsx');
    config.module.rules.push(cssLoader(true));

    return config;
};

export default WebpackConfig;
