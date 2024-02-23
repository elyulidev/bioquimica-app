"use client";

import { FaSitemap, FaDatabase, FaBook, FaHome } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import { useContext } from "react";
import { NavContext } from "./context/NavContext";

const MobileNav = () => {
	const { nav } = useContext(NavContext);

	return (
		<Tabs className={`lg:hidden`} defaultValue='/' value={nav}>
			<TabsList className='flex justify-between'>
				<TabsTrigger value='/'>
					<Link href={`/`}>
						<FaHome className='text-primary' />
					</Link>
				</TabsTrigger>
				<TabsTrigger value='/temas'>
					<Link href={`/temas`}>
						<FaSitemap className='text-primary' />
					</Link>
				</TabsTrigger>
				{/* <TabsTrigger value='/recursos'>
					<Link href={`/recursos`}>
						<FaDatabase className='text-primary' />
					</Link>
				</TabsTrigger> */}
				<TabsTrigger value='/multimedias'>
					<Link href={`/multimedias`}>
						<GrSchedulePlay className='text-primary' />
					</Link>
				</TabsTrigger>
				<TabsTrigger value='/bibliografia'>
					<Link href={`/bibliografia`}>
						<FaBook className='text-primary' />
					</Link>
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
};

export default MobileNav;
