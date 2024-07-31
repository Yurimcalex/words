import { NavLink } from "react-router-dom";

export default function Header({ theme, setTheme }) {
	const handleSettingsClick = (e) => {
		if (e.target.tagName === 'LI') {
			setTheme();
		}
	};

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

			<ul
				className={`settings ${theme}-dim fz-smr`}
				onClick={handleSettingsClick}
			>
				<li>{theme === 'dark' ? 'Light' : 'Dark'} theme</li>
			</ul>
		</div>
	);
}