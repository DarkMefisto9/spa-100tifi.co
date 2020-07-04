const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new copyWebpackPlugin({
            patterns: [{
                from: './src/styles/styles.css',
                to: ''
            }]
        })
    ]
}




// const path = require('path') //permite hacia donde estamos dentro del directorio (l;ocal o nube)
// const HtmlWebpackPlugin = require('html-webpack-plugin')  // Permite trabajar en el HTML

// //Modulo que vamos a exprtar donde viene cada configuracion de lo que va a suceder

// module.exports = {
//     entry: './src/index.js', //punto de entrada, aqui vivira todo el codigo inicial
//     output: {  //Donde se va a poner todo este poryecto compuilado listo para enviar a produccion. 
//         path: path.resolve(__dirname, 'dist'), //Se encargara identificar donde se encuentre la carpeta y ahi poner otra carpeta 
//         filename: 'main.js'//permite darle nombre al archivo que se va a generar una vez se compile el proyecto
//     },
//     resolve: {
//         extensions: ['.js'] //usaran todas las extensiones que terminen en js
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js?$/, //Reject
//                 exclude: /node_modules/, //Exluir la carpeta de node_modules
//                 use: { //indicar que se va a utilizar una configuracion prestablecida
//                     loader: 'babel-loader'
//                 }
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin([{ // se establece el template principal
//             inject: true,
//             template: './public/index.html',
//             filename: './index.html',
//         }
//         ])
//     ]

// }