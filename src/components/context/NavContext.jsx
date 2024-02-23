"use client";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const NavContext = createContext();

const linksNav = ["/", "/temas", "/recursos", "/multimedias", "/bibliografia"];

const NavContextProvider = ({ children }) => {
	const [nav, setNav] = useState("/");
	const pathname = usePathname();

	const updateNav = (pathname) => {
		if (pathname === "/") {
			return setNav("/");
		} else
			linksNav.forEach((link) => {
				if (pathname.startsWith(link)) {
					return setNav(link);
				}
			});
	};

	useEffect(() => {
		updateNav(pathname);
	}, [pathname]);

	const data = {
		nav,
	};

	return <NavContext.Provider value={data}>{children}</NavContext.Provider>;
};

export default NavContextProvider;
export { NavContext };
