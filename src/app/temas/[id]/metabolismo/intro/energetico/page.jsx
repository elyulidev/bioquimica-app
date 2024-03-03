import Image from "next/image";
import Energetico from "../../../../../../../public/tematicas/tema4/intro/energetico.webp";

const MetabolismoEnergeticoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Metabolismo energético
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					O metabolismo energético compreende o conjunto de reações que envolvem
					trocas energéticas no organismo. Para que essas reações ocorram, são
					necessários substratos energéticos, que são provenientes da
					alimentação. As principais fontes de energia utilizadas nessas reações
					são os carboidratos, os lipídios e as proteínas.
				</p>
				<p className='mb-2'>
					No processo de digestão, os alimentos são quebrados em moléculas
					menores e absorvidos, indo para a corrente sanguínea. A partir da
					corrente sanguínea, são deslocados para vários tecidos e, nas células
					são oxidados, produzindo, assim, energia. Para que haja a completa
					degradação das moléculas obtidas por meio da alimentação em CO2 e H2O,
					com maior produção de energia, é necessária a presença de oxigênio.
				</p>
				<p className='mb-2'>
					O excesso desses substratos, quando não utilizados, pode ser
					armazenado nas mais diversas formas pelo organismo. Os carboidratos,
					por exemplo, podem ser armazenados na forma de glicogênio no fígado e
					serem utilizados quando o organismo não consumir uma quantidade dessa
					substância suficiente para a produção de energia. Além de fornecer
					energia, os alimentos fornecem os precursores para a síntese de
					biomoléculas, como os aminoácidos essenciais.
				</p>
				<p className='mb-2'>
					A produção de energia é responsável pela liberação de calor, que será
					utilizado para a manutenção da temperatura corporal, e pela produção
					de ATP (trifosfato de adenosina). O ATP é uma molécula que participa
					de inúmeros processos metabólicos, fornecendo energia para a sua
					realização. A liberação de energia ocorre pela conversão do ATP em ADP
					(difosfato de adenosina) e fosfato inorgânico.
				</p>
				<Image
					src={Energetico}
					alt=''
					width={300}
					height={`auto`}
					priority={true}
					className='mx-auto'
				/>
			</div>
		</main>
	);
};

export default MetabolismoEnergeticoPage;
