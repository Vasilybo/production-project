import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  }

  const fileLoader = {
    test: /1. (png|jpe?g|gif)$/i, 
    use: [
      {
        loader: 'file-loader',
      }
    ]
  }

  const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                  namedExport: false,
                  localIdentName: isDev 
                    ? '[path][name]__[local]--[hash:base64:5]' 
                    : '[hash:base64:8]',
              },
            }
          },
          'sass-loader'
        ]
  }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }

    return [
      typescriptLoader,
      cssLoader,
      svgLoader,
      fileLoader
    ]
}