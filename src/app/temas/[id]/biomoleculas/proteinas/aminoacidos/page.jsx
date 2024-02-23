import Image from "next/image";
import FormulaAmino from "../../../../../../../public/tematicas/tema2/proteinas/formula_aminoacido.webp";

const BioProtAminoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Aminoácidos
			</h1>
			<div className='mt-2'>
				<p className=''>
					Proteínas são macromoléculas biológicas, com alto peso molecular
					constituídas por uma ou mais cadeias de aminoácidos.
				</p>
				<p className=''>
					Os aminoácidos são moléculas orgânicas que apresentam, no mínimo, um
					grupo amino - NH2 e um grupo carboxila - COOH em sua estrutura
					molecular. Eles são essenciais na produção de proteínas.
				</p>
				<Image
					src={FormulaAmino}
					alt=''
					width='full'
					height='auto'
					priority={true}
				/>
				<div className=''>
					<p className=''>
						Os aminoácidos são divididos em dois grupos: naturais, também
						conhecidos como não essenciais, que são produzidos pelo organismo
						(12 no total); e essenciais, que não são produzidos pelo organismo e
						precisam ser obtidos por meio da alimentação (8 no total).
					</p>
					<ul className='list-decimal font-semibold'>
						<li className='ml-4 mb-2'>Valina </li>
						<li className='ml-4 mb-2'>Metionina</li>
						<li className='ml-4 mb-2'>Leucina</li>
						<li className='ml-4 mb-2'>Isoleucina</li>
						<li className='ml-4 mb-2'>Triptofano</li>
						<li className='ml-4 mb-2'>Treonina</li>
						<li className='ml-4 mb-2'>Lisina</li>
						<li className='ml-4 mb-2'>Fenilalanina </li>
					</ul>
				</div>
				<p className=''>
					Já os peptídeos são formados pela união de dois ou mais aminoácidos
					através de ligações peptídicas. Enquanto os aminoácidos são as
					unidades básicas que formam as proteínas, os peptídeos são moléculas
					intermediárias que podem ser encontradas dentro de proteínas maiores
					ou em moléculas independentes com funções específicas no organismo.
				</p>
			</div>
		</main>
	);
};

export default BioProtAminoPage;
