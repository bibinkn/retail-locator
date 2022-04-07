const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'retailLocatorPlugin',
            filename: 'remoteEntry.js',
            exposes: {
                './RetailLocatorPluginIndex': './src/index',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};