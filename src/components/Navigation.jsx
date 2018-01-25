import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return(
			<div className="nav">
				<nav>
					<ul>
						<li><NavLink exact to="/">My App</NavLink></li>
						<li><NavLink to="/components/About">About App</NavLink></li>
						<li><NavLink to="#">Contact Us</NavLink></li>
					</ul>
				</nav>
			</div>
		);
}

export default Navigation;