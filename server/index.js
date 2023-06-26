import express from "express";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import App from "../src/App";
// import "core-js/stable";
// import "regenerator-runtime/runtime";


const PORT = 9000;
const app = express();

app.get("/", (req, res) => {
	// AppコンポーネントをHTML文字列に変換
	// const app = ReactDOMServer.renderToString(<App />);

	// HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
	const html = `
        <html lang="en">
        <head>
        </head>
        <body>
            <div id="root">Hello World</div>
        </body>
        </html>
    `;

	// コンポーネントが埋め込まれたHTMLをレスポンス
	res.send(html);
});

app.use(express.static("./build"));

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});