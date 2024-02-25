"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaBook, FaHome, FaSitemap } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { NavContext } from "./context/NavContext";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const MobileNav = () => {
	const { path } = useContext(NavContext);

	return (
		<Tabs className={`lg:hidden`} defaultValue='/' value={path}>
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
