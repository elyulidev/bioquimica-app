import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFileWord } from "react-icons/fa";

const Tema1IntroPage = () => {
	return (
		<div className='relative min-h-screen pt-16 pb-16 bg-hero-intro bg-cover bg-no-repeat bg-center bg-fixed '>
			<h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-600 bg-[#ffffff05] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur w-[60%] mx-auto'>
				Introdução à Bioquímica
			</h1>
			<div className='w-4/5 mx-auto mt-4'>
				<Tabs defaultValue='word' className='text-right'>
					<TabsList>
						<a href='/intro/Tema 1.docx' download>
							<TabsTrigger value='word'>
								<FaFileWord />
							</TabsTrigger>
						</a>
					</TabsList>
				</Tabs>
				<div className='mt-4 bg-[#ffffff05] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur'>
					<p className='font-bold'>
						A palavra Bioquímica etimologicamente significa &quot;química da
						vida&quot;. É a ciência que estuda as bases moleculares da vida; Por
						tanto , trata da composição química da matéria viva, da relação
						estrutura- função das moléculas características dos seres vivos
						(biomoléculas), bem como das transformações químicas que ocorrem nos
						referidos organismos (metabolismo) e dos mecanismos moleculares
						envolvidos na regulação de tais transformações.
					</p>
					<p className='mt-4 font-bold'>
						A bioquímica é uma ciência relativamente nova, pois foi reconhecida
						como tal no início do século XX e, de fato, o termo bioquímica foi
						usado pela primeira vez em 1903.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tema1IntroPage;
