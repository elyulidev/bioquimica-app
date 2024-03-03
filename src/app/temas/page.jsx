import Card from "@/components/Card";
import Link from "next/link";

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
				{themeCards.map((t) => (
					<Link href={t.href} key={t.id} className='mx-auto'>
						<Card {...t} style={{ aspectRatio: "4/3" }} />
					</Link>
				))}
			</section>
		</main>
	);
};

export default ThemesPage;
