import React, { useState } from "react";
import logo from "../logo.png";

function AppBar() {
	return (
		<div
			style={{
				width: "100%",
				padding: "5px",
				boxShadow: " 0px 3px 5px 0px rgba(89,89,89,1)",
			}}
		>
			<a
				href="https://www.landers.dev"
				style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "black" }}
			>
				<img src={logo} alt="logo" style={{ width: "50px", marginRight: "10px" }} />
				<p>Return to Landers.dev</p>
			</a>
		</div>
	);
}

export default AppBar;
