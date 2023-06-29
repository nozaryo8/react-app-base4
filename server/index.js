import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App.tsx";
import ReactDOM from 'react-dom';
// import index from "./index.tsx";
// import "core-js/stable";
// import "regenerator-runtime/runtime";


const PORT = 9000;
const app = express();

app.get("/", (req, res) => {
	// AppコンポーネントをHTML文字列に変換
	const app = ReactDOMServer.renderToString(<App />);

	// HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
	const html = `
        <html lang="en">
        <head>
			<script src="client.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `;

	// コンポーネントが埋め込まれたHTMLをレスポンス
	res.send(html);
});

// 静的アセットを使用するディレクトリを指定
app.use(express.static("./test-dist"));

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});