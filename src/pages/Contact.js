import React from 'react';
import {Outlet} from "react-router-dom"

function Contact(props) {
	return (
	  <div>
		  <h1>Contact page</h1>
		  <Outlet/>
	  </div>
	);
}

export default Contact;