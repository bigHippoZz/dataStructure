const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/main.ts",
	mode: "development",
	devtool: "source-map",
	optimization: {
		usedExports: true,
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
		new ForkTsCheckerWebpackPlugin(),
		// new CopyPlugin({
		// 	patterns: [{ from: "src/assets", to: "assets" }],
		// }),
	],
};
