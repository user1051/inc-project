import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="border-b-2 ">
			<ul className="flex items-center ml-24">
				<li className="mx-2 my-1">
					<NavLink
						className={({ isActive }) =>
							isActive ? "border-b-2 border-blue-800 -mb-1" : "b-0"
						}
						to="/search"
					>
						All
					</NavLink>
				</li>
				<li className="mx-2 my-1">
					<NavLink
						className={({ isActive }) =>
							isActive ? "border-b-2 border-blue-800" : "b-0"
						}
						to="/images"
					>
						Images
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
