import Image from "next/image";
import Transaminacao from "../../../../../../../public/tematicas/tema4/proteinas/transaminacao.webp";
import Ciclo from "../../../../../../../public/tematicas/tema4/proteinas/ciclo_ureia.webp";

const MetabolismoProteinasCatabolimoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Catabolismo de aminoácidos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Os aminoácidos iniciam sua degradação por processos que separam o
					grupo amino α . O grupo nitrogenado segue um caminho independente.
					Apesar da diversidade estrutural dos aminoácidos, suas vias
					catabólicas convergem em alguns intermediários.
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>
						A primeira etapa da degradação dos aminoácidos envolve a eliminação
						do nitrogênio é feito por reações de transaminação e, em menor grau,
						por reações de desaminação.
					</li>
					<li>
						O nitrogênio, uma vez removido, entra na reserva metabólica geral e,
						dependendo das necessidades da célula, pode ser novamente utilizado
						para processos anabólicos (por exemplo, síntese de proteínas) se
						estiver em excesso, convertido em uréia e excretado como tal.
					</li>
				</ul>
				<Image
					src={Transaminacao}
					alt=''
					width={300}
					style={{ aspectRatio: "50/27" }}
					className='mx-auto'
				/>
				<p className='mb-2'>
					A principal fonte de amônia no corpo é a desaminação oxidativa do
					glutamato em vários organismos. Além disso , a amônia é produzida em
					quantidades apreciáveis pela ação de bactérias da flora intestinal
					sobre os restos de alimentos nitrogenados. Essa amônia é absorvida e
					passa para a circulação portal.
				</p>
				<p className='mb-2'>
					Existem 3 mecanismos no corpo para a eliminação de amônia:
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>excreção renal.</li>
					<li>formação de glutamina.</li>
					<li>síntese e excreção de ureia.</li>
				</ul>
				<p className='mb-2'>
					Quase toda a amônia originada pela desaminação é convertida em uréia
					no fígado, único órgão que possui todas as enzimas necessárias para
					essa conversão.
				</p>
				<p className='mb-2'>
					A ureogênese é o processo de síntese e excreção de uréia, o que é de
					grande importância, pois seu funcionamento não depende de variações no
					equilíbrio ácido-base, o que impõe limitações à excreção renal de
					amônia na forma de sais de amônio . E também, a uréia, ao contrário da
					amônia, é um composto com baixíssima toxicidade.
				</p>
				<p className='mb-2'>
					A principal fonte de amônia para a síntese da ureia é o aminoácido
					nitrogênio, portanto sua excreção varia de acordo com a ingestão
					proteica de cada indivíduo.
				</p>

				<Image
					src={Ciclo}
					alt=''
					width={300}
					style={{ aspectRatio: "75/49" }}
					className='mx-auto'
				/>
			</div>
		</main>
	);
};

export default MetabolismoProteinasCatabolimoPage;
