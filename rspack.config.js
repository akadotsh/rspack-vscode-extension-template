"use strict";

const path = require("path");

const extensionConfig = {
	target: "node",
	mode: "none",

	entry: "./src/extension.ts",
	output: {
		// the bundle is stored in the 'dist' folder (check package.json)
		path: path.resolve(__dirname, "dist"),
		filename: "extension.js",
		libraryTarget: "commonjs2",
	},
	externals: {
		vscode: "commonjs vscode",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "builtin:swc-loader",
					},
				],
			},
		],
	},
	devtool: "nosources-source-map",
	infrastructureLogging: {
		level: "log", // enables logging required for problem matchers
	},
};
module.exports = [extensionConfig];
