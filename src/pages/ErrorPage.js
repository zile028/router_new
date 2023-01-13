import React from 'react';
import {NavLink} from "react-router-dom";

function ErrorPage(props) {
	return (
	  <div>404 Error page
		  <NavLink to="/">Go to Home page</NavLink>
	  </div>

	);
}

export default ErrorPage;