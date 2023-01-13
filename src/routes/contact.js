import Contact from "../pages/Contact";
import Data from "../pages/Data";

export const contact = {
	path: "contact",
	element: <Contact/>,
	children: [
		{
			path: "data",
			element: <Data/>
		}
	]
}