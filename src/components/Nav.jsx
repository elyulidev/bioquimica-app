"use client";

import { useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaHome, FaSitemap } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import Logo from "../../public/bioquimico.webp";
import { NavContext } from "./context/NavContext";
import { Switch } from "./ui/switch";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const NavComp = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();
	const { path } = useContext(NavContext);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toogleMode = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<nav className='flex justify-between items-center w-4/5 mx-auto'>
			<div className='text-primary '>
				<Link href={`/`}>
					<Image src={Logo} alt='' height={32} width={32} />
				</Link>
			</div>
			<div className='flex justify-between items-center gap-4'>
				<div className='hidden lg:flex'>
					<Tabs className={``} defaultValue='/' value={path}>
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
				</div>

				<div className=''>
					<Switch
						className='text-primary'
						checked={theme === "dark" ? true : false}
						onCheckedChange={toogleMode}
					/>
				</div>
			</div>
		</nav>
	);
};

export default NavComp;
