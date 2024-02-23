import Particle from "@/components/Particle";

export default function Home() {
	return (
		<main className='relative w-4/5 min-h-screen mx-auto grid grid-cols-1'>
			<Particle />
			<h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600'>
				<div className=''>BioqApp</div>
				<span className='text-3xl sm:text-4xl lg:text-5xl'>
					Seu Portal Interativo para Explorar os Segredos da Bioquímica
				</span>
			</h1>
		</main>
	);
}
