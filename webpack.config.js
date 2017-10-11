const path = require('path');

module.exports = {
    entry: './src/client/index.js',

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true,
      errorDetails: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [
                        ['transform-react-jsx']
                    ]
                }
            },

            {
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "postcss-loader" }
              ]
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
        ]
    },



    devtool: 'source-map',

    devServer: {
        contentBase:  path.join(__dirname, 'build'),
        compress: true,
        historyApiFallback: true
    }
}
