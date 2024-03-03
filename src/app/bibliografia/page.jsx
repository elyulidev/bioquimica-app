import Card from "@/components/Card";
import { FaBook } from "react-icons/fa";

const objCards = [
	{
		title: "Bioquímica Humana",
		img: "/biblio/bioquimica_humana_book.webp",
		bgImg: "bg-bioquimica-humana-book",
		href: "/biblio/Bioquimica_Humana_1ed_Cardella.pdf",
		icon: <FaBook />,
		aspectRatio: "324/407",
	},
	{
		title: "Bioquímica Medica",
		img: "/biblio/bioquimica_medica_book.webp",
		bgImg: "bg-bioquimica-medica-book",
		href: "/biblio/Bioquimica_Medica.pdf",
		icon: <FaBook />,
		aspectRatio: "447/580",
	},
	{
		title: "Principios de Bioquímica",
		img: "/biblio/principios_bioquimica_book.webp",
		bgImg: "bg-principios-bioquimica-book",
		href: "/biblio/Princípios de Bioquímica de Lehninger.pdf",
		icon: <FaBook />,
		aspectRatio: "324/407",
	},
	{
		title: "Bioquímica Ilustrada",
		img: "/biblio/bioquimica_ilustrada_book.webp",
		bgImg: "bg-bioquimica-ilustrada-book",
		href: "/biblio/Harper_Bioquimica_ilustrada.pdf",
		icon: <FaBook />,
		aspectRatio: "324/407",
	},
];

const BiblioPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Bibliografía
			</h1>
			<div className='mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{objCards.map((card, i) => (
					<div key={i + card.title} className='relative mx-auto group'>
						<Card
							title={card.title}
							bgImg={card.bgImg}
							aspectRatio={card.aspectRatio}
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
