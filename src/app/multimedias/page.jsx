import Video from "@/components/Video";
import { FaPlay } from "react-icons/fa";

const objVideos = [
	{
		title: "Biomoléculas I",
		poster: "/videos/poster1.webp",
		src: "/videos/Biomoleculas_I.mp4",
		icon: <FaPlay />,
	},
	{
		title: "Biomoléculas II",
		poster: "/videos/poster2.webp",
		src: "/videos/Biomoleculas_II.mp4",
		icon: <FaPlay />,
	},
	{
		title: "Metabolismo",
		poster: "/videos/poster3.webp",
		src: "/videos/Metabolismo.mp4",
		icon: <FaPlay />,
	},
	{
		title: "Sistema Digestivo",
		poster: "/videos/poster4.webp",
		src: "/videos/Sistema_Digestivo.mp4",
		icon: <FaPlay />,
	},
];

const MultimediaPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Recursos Visuais
			</h1>
			<div className='mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{objVideos.map((video) => (
					<div key={video.title} className='relative group'>
						<Video
							src={video.src}
							poster={video.poster}
							cls='w-full h-full'
							title={video.title}
						/>
						<div className='absolute top-0 left-0 w-full h-full hidden items-center justify-center bg-black bg-opacity-50 group-hover:flex group-hover:pointer-events-none'>
							<span className='text-orange-600 font-extrabold text-2xl'>
								{video.title}
							</span>
						</div>
					</div>
				))}{" "}
			</div>
		</main>
	);
};

export default MultimediaPage;
