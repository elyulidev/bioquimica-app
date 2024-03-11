import Image from "next/image";
import Vias from "../../../../../../../public/tematicas/tema4/proteinas/vias_metabolicas.webp";

const MetabolismoProteinasPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Metabolismo das proteínas
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Metabolismo das proteínas é o conjunto de reações químicas que
					envolvem os componentes e mecanismos que estão inseridas por
					intermédio das proteínas. Nele estão as etapas de sequenciamento do
					código genético, da síntese, do endereçamento e da degradação desta
					macrocomponente molecular.
				</p>
				<p className='mb-2'>
					As proteínas degradadas no processo digestivo resultam em aminoácidos,
					que são absorvidos pelas células epiteliais do intestino delgado,
					transportados para a corrente sanguínea e distribuídos aos diversos
					tecidos. Os aminoácidos são fundamentais na síntese protéica e são
					precursores de todos os compostos nitrogenados não protéicos, como as
					bases nitrogenadas dos nucleotídeos, e as aminas e seus derivados,
					como a histamina e a adrenalina.
				</p>
				<p className='mb-2'>
					Ao contrário dos carboidratos e gorduras, os aminoácidos não são
					armazenados no corpo, seus níveis dependem do equilíbrio entre a
					biossíntese e a degradação das proteínas corporais, ou seja, o
					equilíbrio entre anabolismo e catabolismo conhecido como NITROGEN
					BALANCE.
				</p>
				<p className='mb-2'>
					Balanço de Nitrogênio: A principal fonte é a proteína da dieta, a
					proteína não é armazenada em reserva, portanto deve haver um
					equilíbrio entre o que é ingerido e o que é excretado.
				</p>
				<p className='mb-2'>
					A absorção intestinal é a principal fonte de entrada de nitrogênio
					metabolicamente útil para o corpo, a composição e a quantidade dessa
					contribuição dependem da dieta, geralmente uma dieta balanceada
					contribui para o pool entre 70 e 100 gramas de aminoácidos por dia.
				</p>
				<p className='mb-2'>
					DESTINO DE NITROGÊNIO: durante a digestão, as proteínas da dieta são
					hidrolisadas em aminoácidos constituintes; estes são absorvidos no
					intestino e transportados pelo sangue para os tecidos, onde são
					oferecidas alternativas metabólicas:
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>
						Transformação em compostos não proteicos de importância fisiológica
					</li>
					<li>Degradação para uso para fins energéticos</li>
				</ul>
				<p className='mb-2'>
					Os aminoácidos liberados pela degradação de proteínas endógenas são
					misturados aos sintetizados nas células e aos provenientes dos
					alimentos. Este conjunto de aminoácidos livres constitui um pool. O
					pool de aminoácidos: É formado pelos aminoácidos livres nos diferentes
					fluidos corporais, como fluidos intersticiais, plasma e linfa, entre
					outros. Há uma troca contínua entre eles através das diferentes
					barreiras, membranas celulares, capilares e outros.
				</p>
				<Image
					src={Vias}
					alt=''
					width={300}
					style={{ aspectRatio: "4/3" }}
					className='mx-auto'
				/>
				<p className='mb-2'>
					Os processos que contribuem com aminoácidos para o pool são:
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>catabolismo de proteínas teciduais.</li>
					<li> digestão de proteínas.</li>
					<li>síntese de aminoácidos.</li>
				</ul>
				<p className='mb-2'>
					Enquanto os processos que removem aminoácidos do pool são:
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>síntese de proteínas.</li>
					<li> síntese de outros compostos nitrogenados.</li>
					<li>catabolismo de aminoácidos.</li>
				</ul>
				<p className='mb-2'>
					O fígado é também o órgão mais importante na desaminação dos
					aminoácidos, etapa preliminar na sua interconversão nos diversos
					aminoácidos não essenciais e oxidação. Neste processo, ocorre a
					síntese de uréia, a qual é excretada na urina. Várias proteínas
					plasmáticas são sintetizadas exclusivamente no fígado. Como resultado
					destas atividades, o fígado é capaz de controlar os níveis plasmáticos
					de uréia e de proteínas.
				</p>
			</div>
		</main>
	);
};

export default MetabolismoProteinasPage;
