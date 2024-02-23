"use client";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const NavContext = createContext();

const linksNav = ["/", "/temas", "/recursos", "/multimedias", "/bibliografia"];

const NavContextProvider = ({ children }) => {
	const [path, setPath] = useState("/");
	const pathname = usePathname();

	const updateNav = (pathname) => {
		if (pathname === "/") {
			return setPath("/");
		} else
			linksNav.forEach((link) => {
				if (pathname.startsWith(link)) {
					return setPath(link);
				}
			});
	};

	useEffect(() => {
		updateNav(pathname);
	}, [pathname]);

	const data = {
		path,
	};

	return <NavContext.Provider value={data}>{children}</NavContext.Provider>;
};

export default NavContextProvider;
export { NavContext };
