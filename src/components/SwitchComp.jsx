"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

const SwitchComp = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	console.log("mounted>>>", mounted);
	console.log("resolvedTheme>>>", resolvedTheme);

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
