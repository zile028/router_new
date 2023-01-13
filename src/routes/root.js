import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import {about} from "./about";
import {contact} from "./contact";

export const root = [
	{
		path: "/",
		element: <App/>,
		errorElement: <ErrorPage/>,
		children: [about, contact],
	}
]
