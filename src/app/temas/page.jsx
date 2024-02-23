import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import Tema1 from "../../../public/tematicas/tema1.webp";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

const themeCards = [
	{
		id: 1,
		title: "Introdução a Bioquimica",
		img: "/tematicas/tema1.webp",
		href: "/temas/1/intro",
	},
	{
		id: 2,
		title: "Biomoleculas",
		img: "/tematicas/tema2.webp",
		href: "/temas/2/biomoleculas",
	},
	{
		id: 3,
		title: "Enzimas e minerais",
		img: "/tematicas/tema3.webp",
		href: "/temas/3/enzimas_minerais",
	},
	{
		id: 4,
		title: "Metabolismo",
		img: "/tematicas/tema4.webp",
		href: "/temas/4/metabolismo",
	},
];

const ThemesPage = () => {
	return (
		<main className='w-4/5 mx-auto grid justify-center gap-4 pt-[68px] pb-32 '>
			<section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{/* lg:hidden */}
				{themeCards.map((t) => (
					<Link href={t.href} key={t.id} className='mx-auto'>
						<Card {...t} />
					</Link>
				))}
			</section>
			{/* <section className='hidden md:hidden lg:flex perspective-10 lg:justify-center lg:items-center'>
				<div className='relative bg-slate-500 container-animated w-[450px] h-[450px] mx-auto perspective-10 '>
					<Link
						href={`/temas/1/intro`}
						className='absolute left-0 top-0 w-[120px] h-[120px] rotate-x-270 '
					>
						<div className='shrinkCard1'>
							<HoverCard>
								<HoverCardTrigger asChild>
									<Image src={Tema1} alt='' className='' />
								</HoverCardTrigger>
								<HoverCardContent className='w-40 bg-card-foreground'>
									<div className='flex justify-between space-x-4'>
										<span className='text-card'>Introdução</span>
									</div>
								</HoverCardContent>
							</HoverCard>
						</div>
					</Link>

					
				</div>
			</section> */}
		</main>
	);
};

export default ThemesPage;
