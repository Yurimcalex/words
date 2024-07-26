import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<ul className="nav-menu">
				<li>
					<NavLink to="/">Words</NavLink>
				</li>
				<li>
					<NavLink to="new">Get new words</NavLink>
				</li>
			</ul>
		</div>
	);
}