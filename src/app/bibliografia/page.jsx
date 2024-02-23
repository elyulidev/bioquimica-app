import Card from "@/components/Card";
import { FaBook } from "react-icons/fa";

const objCards = [
	{
		title: "Bioquímica Humana",
		img: "/biblio/bioquimica_humana_book.webp",
		href: "/biblio/Bioquimica_Humana_1ed_Cardella.pdf",
		icon: <FaBook />,
	},
	{
		title: "Bioquímica Humana",
		img: "/biblio/bioquimica_humana_book.webp",
		href: "/biblio/Bioquimica_Humana_1ed_Cardella.pdf",
		icon: <FaBook />,
	},
	{
		title: "Bioquímica Humana",
		img: "/biblio/bioquimica_humana_book.webp",
		href: "/biblio/Bioquimica_Humana_1ed_Cardella.pdf",
		icon: <FaBook />,
	},
	{
		title: "Bioquímica Humana",
		img: "/biblio/bioquimica_humana_book.webp",
		href: "/biblio/Bioquimica_Humana_1ed_Cardella.pdf",
		icon: <FaBook />,
	},
];

const BiblioPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Bibliografía
			</h1>
			<div className='mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{objCards.map((card) => (
					<div key={card.title} className='relative mx-auto group'>
						<Card
							title={card.title}
							img={card.img}
							style={{ height: "320px" }}
						/>
						<div className='absolute top-0 left-0 w-full h-full hidden items-center justify-center bg-black bg-opacity-50 group-hover:flex'>
							<a
								href={card.href}
								className='text-primary font-extrabold text-7xl'
								download
							>
								{card.icon}
							</a>
						</div>
					</div>
				))}{" "}
			</div>
		</main>
	);
};

export default BiblioPage;
