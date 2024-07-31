import { useState } from 'react';

export default function useTheme() {
	const [theme, setTheme] = useState('dark');

	const changeTheme = (theme) => {
		if (theme) setTheme(theme);
		else {
			if (theme === 'dark') setTheme('light');
			if (theme === 'light') setTheme('dark');
		}
	};

	return [theme, changeTheme];
}