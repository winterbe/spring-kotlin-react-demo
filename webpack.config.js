var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: 'src/main/resources/static/bundle.js'
    },
    module: {
        loaders: [
            {test: path.join(__dirname, 'src/main/js'), loader: 'babel-loader'},
            {test: path.join(__dirname, 'src/main/js'), loader: 'eslint-loader'}
        ]
    }
};