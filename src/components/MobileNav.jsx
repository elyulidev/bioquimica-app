"use client";

import { FaSitemap, FaDatabase, FaBook, FaHome } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import { useContext } from "react";
import { NavContext } from "./context/NavContext";

const MobileNav = () => {
	const { path } = useContext(NavContext);

	return (
		<Tabs className={`lg:hidden`} value={path}>
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
