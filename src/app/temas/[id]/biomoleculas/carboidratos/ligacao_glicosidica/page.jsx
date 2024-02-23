import Image from "next/image";

import EnlaceGlucosidico from "../../../../../../../public/tematicas/tema2/carboidratos/enlace_glucosidico.webp";

const BioCarboidratosLigacaoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Ligação glicosídica
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Em química, a ligação glicosídica é uma ligação covalente resultante
					da reação de condensação entre uma molécula de um carboidrato com um
					álcool, que pode ser outro carboidrato.
				</p>
				<p className='mb-2'>
					Especificamente, o que ocorre é combinação da hidroxila de um carbono
					anomérico (Carbono ligado ao oxigênio central e a uma hidroxila livre)
					de um monossacarídeo ( grupo hemiacetal) com a hidroxila de um álcool
					ou com a hidroxila de qualquer carbono de outro monossacarídeo,
					produzindo água. As valências livres de ambas as moléculas se unem
					produzindo a ligação glicosídica (-O-).
				</p>
				<Image
					src={EnlaceGlucosidico}
					alt=''
					width={`full`}
					height={`auto`}
					priority={true}
					className='mb-2'
				/>
			</div>
		</main>
	);
};

export default BioCarboidratosLigacaoPage;
