import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<ul className="nav-menu">
				<li>
					<Link to="/">Words</Link>
				</li>
				<li>
					<Link to="new">Get new words</Link>
				</li>
			</ul>
		</div>
	);
}