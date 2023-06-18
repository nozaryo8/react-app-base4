import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Introduce } from './pages/Introduce.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Introduce />,
	},
	{
		path: "/aa",
		element: <Introduce />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

