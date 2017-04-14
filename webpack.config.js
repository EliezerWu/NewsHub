/**
 * Created by w on 2017/3/14.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    // This will show line numbers where errors are accured in the terminal

    devServer: {
        historyApiFallback: true
        // This will make the server understand "/some-link" routs instead of "/#/some-link"
    },

    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://127.0.0.1:8080/',
        // Specify the local server port

        'webpack/hot/only-dev-server',
        // Enable hot reloading

        './src/index'
        // This is where Webpack will be looking for the entry index.js file
    ],

    output: {
        path: path.join(__dirname, 'public'),
        // This is used to specify folder for producion bundle. Will not be used here, but it's a good practice to have it
        filename: 'bundle.js'
        // Filename for production bundle
    },

    resolve: {
        modules: ['node_modules', 'src'],
        // Folders where Webpack is going to look for files to bundle together
        extensions: ['.json', '.js']
        // Extensions that Webpack is going to expect
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [ 'babel-loader', ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader?sourceMap', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]', 'postcss-loader', ],
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Hot reloading
        new webpack.NoEmitOnErrorsPlugin()
        // Webpack will let you know if there are any errors
    ]
};