"use client";

import { FaSitemap, FaBook, FaHome } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
/* import { useContext } from "react";
import { NavContext } from "./context/NavContext"; */

const linksNav = ["/", "/temas", "/multimedias", "/bibliografia"];
const MobileNav = () => {
	//const { path } = useContext(NavContext);
	const [path, setPath] = useState("/");
	const pathname = usePathname();
	console.log("pathname", pathname);

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

	return (
		<Tabs className={`lg:hidden`} defaultValue='/'>
			<TabsList className='flex justify-between'>
				<Link href={`/`}>
					<TabsTrigger value='/'>
						<FaHome className='text-primary' />
					</TabsTrigger>
				</Link>
				<Link href={`/temas`}>
					<TabsTrigger value='/temas'>
						<FaSitemap className='text-primary' />
					</TabsTrigger>
				</Link>
				<Link href={`/multimedias`}>
					<TabsTrigger value='/multimedias'>
						<GrSchedulePlay className='text-primary' />
					</TabsTrigger>
				</Link>
				<Link href={`/bibliografia`}>
					<TabsTrigger value='/bibliografia'>
						<FaBook className='text-primary' />
					</TabsTrigger>
				</Link>
			</TabsList>
		</Tabs>
	);
};

export default MobileNav;
