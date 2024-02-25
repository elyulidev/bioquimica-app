"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaHome, FaSitemap } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import Logo from "../../public/bioquimico.webp";
import { NavContext } from "./context/NavContext";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
//import ModeToggle from "@/components/ModeToggle";
import SwitchComp from "@/components/SwitchComp";

const NavComp = () => {
	const { path } = useContext(NavContext);

	return (
		<nav className='flex justify-between items-center w-4/5 mx-auto'>
			<div className='text-primary '>
				<Link href={`/`}>
					<Image src={Logo} alt='' height={32} width={32} />
				</Link>
			</div>
			<div className='flex justify-between items-center gap-4'>
				<div className='hidden lg:flex'>
					<Tabs className={``} value={path}>
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
				</div>

				<div className=''>
					<SwitchComp />
				</div>
			</div>
		</nav>
	);
};

export default NavComp;
