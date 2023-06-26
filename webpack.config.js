// import { join, resolve } from 'path';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { createRequire } from 'node:module';

// const require = createRequire(import.meta.url);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default {
	// ES5(IE11等)向けの指定
	// target: ["web", "es5"],
	target: 'node',
	//entry: `${__dirname}/src/index.js`,
	entry: "/Users/nozaryo8/Downloads/teck/react-app-base4/server/index.js",
	// mode: 'development',
	// devServer: {
	// 	static: path.resolve(__dirname, './test-dist'),
	// 	compress: true,
	// },
	output: {
		//path: `${__dirname}/dist`,
		path: "/Users/nozaryo8/Downloads/teck/react-app-base4/test-dist",
		// cjsで出力することでCommonJS構文を使用することができる
		filename: 'main.cjs',
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	// resolve: {
	// 	fallback: {
	// 		path: require.resolve("path-browserify"),
	// 		stream: require.resolve("stream-browserify"),
	// 		fs: false,
	// 		buffer: require.resolve("buffer/"),
	// 		querystring: require.resolve("querystring-es3"),
	// 		http: require.resolve("stream-http"),
	// 		net: false,
	// 		crypto: require.resolve("crypto-browserify"),
	// 		zlib: require.resolve("browserify-zlib"),
	// 		// https: false,
	// 		// tls: false,
	// 		async_hooks: false,
	// 		assert: require.resolve("assert/"),
	// 		util: require.resolve("util")
	// 	},
	// 	extensions: ['.jsx', '.js', '.tsx', '.ts', '.cjs']
	// },
	// node: {
	// 	fs: 'empty',
	// 	path: 'empty'
	// },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								// プリセットを指定することで、新しいESをES5に変換
								"@babel/preset-env",
								{
									useBuiltIns: 'usage',
									corejs: 3
								}
							]
						],
					},
				}
			},
			// {
			// 	test: /\.css$/,
			// 	use: ['style-loader', 'css-loader']
			// },
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		"style-loader",
			// 		"css-loader",
			// 		"sass-loader",
			// 	],
			// },
		]
	},

	// plugins: [
	//     // new BundleAnalyzerPlugin()
	//     new HtmlWebpackPlugin({
	//         title: 'Development',
	//         template: "./dist/index.html"
	//     }),
	// ],
};
