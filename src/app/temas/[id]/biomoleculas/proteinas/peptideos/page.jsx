import Image from "next/image";
import Peptideos from "../../../../../../../public/tematicas/tema2/proteinas/peptideos.webp";
const BioProtPeptideosPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Peptídeos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					São biomoléculas formadas por dois ou mais aminoácidos, unidos por
					ligações peptídicas. Eles diferem das proteínas por possuírem menos
					aminoácidos em sua composição e, consequentemente, uma estrutura
					molecular menor. Os peptídeos são encontrados em diversas formas na
					natureza, desempenhando funções como hormônios, neurotransmissores,
					enzimas, entre outras.
				</p>
				<p className='mb-2'>
					Alguns exemplos de peptídeos são bem conhecidos e estudado, como
					glutationa, galanina, ocitocina, bradicinina, amanitina, tireotrofina,
					colecistocinina, vasopressina e encefalina, os quais desempenham
					funções específicas no organismo.
				</p>
				<p className='mb-2'>
					É possível diferenciar peptídeos de proteínas com base na massa
					molecular. De acordo com o texto apresentado, os polipeptídeos possuem
					peso molecular abaixo de 10.000, enquanto as proteínas apresentam peso
					molecular acima de 10.000. Sendo assim, peptídeos são moléculas
					menores formadas pela união de dois ou mais aminoácidos, enquanto as
					proteínas são macromoléculas compostas por um ou mais polipeptídeos.
					Portanto, a principal diferença entre peptídeos e proteínas é o
					tamanho da molécula.
				</p>
				<p className='mb-2'>
					Os alimentos ricos em aminoácidos e peptídeos são os mesmos ricos em
					proteínas.
				</p>

				<Image
					src={Peptideos}
					alt=''
					width='full'
					height='auto'
					priority={true}
				/>
			</div>
		</main>
	);
};

export default BioProtPeptideosPage;
