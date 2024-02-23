import Image from "next/image";
import Fontes from "../../../../../../../public/tematicas/tema2/proteinas/proteinas_fontes.webp";

const BioProtFontesPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Fontes de proteínas
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					As proteínas podem ser encontradas em alimentos de origem animal e
					vegetal. Visto que o organismo não consegue sintetizar esses
					aminoácidos essenciais, nós precisamos ingeri-los por meio da
					alimentação. As principais fontes de aminoácidos são:
				</p>
				<ul>
					<li className='mb-2 font-semibold'>
						Fontes incompletas (que não contêm todos os aminoácidos essenciais):
						Leguminosas como feijão, milho, lentilha, arroz, frutas e verduras.
					</li>
					<li className='mb-2 font-semibold'>
						Fontes completas: carne, peixes, ovos, laticínios (leite, queijo,
						iogurte), trigo integral, nozes, soja, germe de trigo,
						castanha-do-pará e amendoim.
					</li>
				</ul>

				<Image src={Fontes} alt='' width='full' height='auto' priority={true} />
			</div>
		</main>
	);
};

export default BioProtFontesPage;
