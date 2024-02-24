"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

const SwitchComp = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	console.log("mounted>>>", mounted);

	const toogleMode = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Switch
			className='text-primary'
			checked={theme === "dark" ? true : false}
			onCheckedChange={toogleMode}
		/>
	);
};

export default SwitchComp;
