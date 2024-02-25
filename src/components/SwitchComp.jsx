"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

const SwitchComp = () => {
	const { setTheme, resolvedTheme } = useTheme();

	const toogleMode = () => {
		setTheme(resolvedTheme === "light" ? "dark" : "light");
	};

	return (
		<Switch
			className='text-primary'
			checked={resolvedTheme === "dark" ? true : false}
			onCheckedChange={toogleMode}
		/>
	);
};

export default SwitchComp;
