import Image from "next/image";

import Lipideos from "../../../../../../../public/tematicas/tema4/lipidios/lipideos_metabolismo.png";

const MetabolismoLipidiosTransportePage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Transporte
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					O transporte de lipídios é feito através de lipoproteínas. A estrutura
					anfipática das lipoproteínas permite que os triglicerídeos e o
					colesterol sejam transportados pelo sangue . Os quilomícrons são um
					subgrupo de lipoproteínas que transportam os lipídios digeridos do
					intestino delgado para o resto do corpo. As densidades variadas entre
					os tipos de lipoproteínas são características do tipo de gordura que
					transportam. Por exemplo, as lipoproteínas de densidade muito baixa (
					VLDL ) transportam os triglicerídeos sintetizados pelo nosso corpo e
					as lipoproteínas de baixa densidade (LDL) transportam o colesterol
					para os tecidos periféricos. Várias dessas lipoproteínas são
					sintetizadas no fígado, mas nem todas se originam desse órgão.
				</p>

				<Image
					src={Lipideos}
					alt=''
					width={300}
					style={{ aspectRatio: "275/354" }}
					className='mx-auto'
				/>
			</div>
		</main>
	);
};

export default MetabolismoLipidiosTransportePage;
