import Image from "next/image";
import LipidosFontes from "../../../../../../../public/tematicas/tema2/lipidos/lipidos_fontes.webp";
const BioLipidiosFontesPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Tipos de Lipídios e Exemplos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					A ingestão de lipídios é fundamental, pois ele traz diversos
					benefícios para a saúde auxiliando no funcionamento do organismo. Os
					alimentos ricos em lipídios podem ser de origem animal e vegetal.
				</p>
				<p className='mb-2'>
					Os alimentos de origem animal fontes de lipídios são:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Carnes vermelhas</li>
					<li className='mb-2 font-semibold'>Peixes</li>
					<li className='mb-2 font-semibold'>Ovos</li>
					<li className='mb-2 font-semibold'>Leite</li>
					<li className='mb-2 font-semibold'>Manteiga</li>
				</ul>
				<p className='mb-2'>
					Os alimentos de origem vegetal fontes de lipídios são:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Coco</li>
					<li className='mb-2 font-semibold'>Abacate</li>
					<li className='mb-2 font-semibold'>
						Oleaginosas como castanhas, nozes, amêndoas e gergelim
					</li>
					<li className='mb-2 font-semibold'>Azeite de oliva</li>
				</ul>
				<Image
					src={LipidosFontes}
					alt=''
					width={`full`}
					height={`auto`}
					priority={true}
				/>
			</div>
		</main>
	);
};

export default BioLipidiosFontesPage;
