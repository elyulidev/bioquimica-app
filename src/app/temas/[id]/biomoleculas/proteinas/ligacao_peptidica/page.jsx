import Image from "next/image";
import Ligacao from "../../../../../../../public/tematicas/tema2/proteinas/ligacao_peptidica.webp";

const BioProtLigacaoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Ligação peptídica
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					A ligação entre os aminoácidos é chamada de ligação peptídica. Essa
					ligação é formada pela reação do grupo amina de um aminoácido com o
					grupo carboxila de outro aminoácido, com a eliminação de uma molécula
					de água. Dois aminoácidos unidos por uma ligação peptídica formam um
					dipeptídeo, enquanto várias ligações peptídicas entre vários
					aminoácidos formam um polipeptídeo. Uma proteína é uma macromolécula
					formada por muitos aminoácidos unidos por ligações peptídicas. A
					hemoglobina, por exemplo, é uma proteína composta por 547 aminoácidos.
				</p>

				<Image
					src={Ligacao}
					alt=''
					width='full'
					height='auto'
					priority={true}
				/>

				<p className=''>
					Os compostos derivados da união de aminoácidos de acordo com o número
					de aminoácidos dipeptídeo , tripeptídeo , tretapeptídeo e polipeptídeo
					são conhecidos como peptídeos .
				</p>
			</div>
		</main>
	);
};

export default BioProtLigacaoPage;
