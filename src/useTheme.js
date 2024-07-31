import { useState } from 'react';

export default function useTheme() {
	const [theme, setTheme] = useState('dark');

	const changeTheme = (newTheme) => {
		if (newTheme) setTheme(newTheme);
		else {
			if (theme === 'dark') setTheme('light');
			if (theme === 'light') setTheme('dark');
		}
	};

	return [theme, changeTheme];
}