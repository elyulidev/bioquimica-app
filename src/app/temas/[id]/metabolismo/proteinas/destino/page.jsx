import Image from "next/image";
import Vias from "../../../../../../../public/tematicas/tema4/proteinas/vias_metabolicas.webp";
import DestinoT from "../../../../../../../public/tematicas/tema4/proteinas/destino_transporte.webp";

const MetabolismoProteinasDestinoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Metabolismo de proteína
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
				<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Destino e transporte de aminoácidos
				</h2>
				<p className='mb-2'>
					As vias reservadas para os aminoácidos no corpo são:
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>
						A maioria dos aminoácidos no pool é usada para modificar a síntese
						de novas proteínas.
					</li>
					<li>
						Vias metabólicas específicas produzem compostos nitrogenados não
						protéicos com funções importantes a partir de certos aminoácidos.
					</li>
					<li>
						Os aminoácidos não utilizados na síntese de proteínas ou substâncias
						fisiologicamente ativas são degradados e finalmente oxidados com
						produção de energia. Este processo envolve a separação e remoção do
						grupo amina.
					</li>
				</ul>
				<Image
					src={DestinoT}
					alt=''
					width={300}
					style={{ aspectRatio: "49/33" }}
					className='mx-auto'
				/>
				<h3 className='my-2 text-card-foreground font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-center'>
					Metabolismo específico de aminoácidos
				</h3>
				<p className='mb-2'>
					Aminoácidos cujos esqueletos geram piruvato ou oxaloacetato ( alanina
					ou aspartato ) são eficientemente convertidos em carboidratos via
					gliconeogênese. Aminoácidos que levam a acetil CoA ou acetoacetil-CoA
					, como a leucina, têm uma intensa contribuição para a cetogênese.
				</p>
				<p className='mb-2'>
					Existem vias metabólicas específicas para lidar com o grupo
					nitrogenado. Compreendem reações de transferência ( transaminação ),
					remoção do grupo amino ( desaminação ) e remoção do grupo carboxila (
					descarboxilação ).
				</p>
				<h3 className='my-2 text-card-foreground font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-center'>
					Transaminação
				</h3>
				<p className='mb-2'>
					A primeira é a reação entre um aminoácido e um alfa- cetoácido , na
					qual o grupo amino é transferido do primeiro para o segundo, com a
					consequente conversão do aminoácido em seu correspondente alfa-
					cetoácido . É importante notar que a amônia livre não é obtida na
					transaminação , já que o grupo amino não é removido , mas é
					transferido do aminoácido para o cetoácido correspondente . Essas
					reações são realizadas por enzimas chamadas aminotransferases . Todas
					essas enzimas requerem fosfato de piridoxal (vitamina B6) como um
					grupo prostético, uma importante razão pela qual essa vitamina é
					essencial para a vida.
				</p>
				<p className='mb-2'>
					Um exemplo importante de transaminação ocorre entre o glutamato e o
					oxaloacetato , que produz alfa- cetoglutaramato e aspartato , que pode
					transferir seu grupo amino para outros alfa- cetoácidos para formar
					diferentes aminoácidos por meio de reações de transaminação.
				</p>
				<p className='mb-2'>
					A transaminação desempenha um papel importante na adequação da
					composição de aa às necessidades do corpo, bem como no direcionamento
					do excesso de aa para o catabolismo e geração de energia.
				</p>
				<h3 className='my-2 text-card-foreground font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-center'>
					Descarboxilação
				</h3>
				<p className='mb-2'>
					É o processo de separação do grupo carboxila dos aminoácidos na forma
					de CO2. Isso dá origem a diferentes aminas, algumas das quais são de
					grande importância metabólica, como é o caso da tiramina , derivada da
					tirosina, e da histamina, derivada da histidina, que exerce efeitos em
					determinados órgãos dependendo do tipo de receptor ao qual se liga .
				</p>
				<p className='mb-2'>
					As enzimas que catalisam essas reações são denominadas descarboxilases
					e têm como cofator o piridoxal fosfato.
				</p>
				<p className='mb-2'>
					As bactérias da flora intestinal normal possuem descarboxilases que
					originam diferentes aminas de aminoácidos, que não são absorvidas no
					intestino.
				</p>
				<h3 className='my-2 text-card-foreground font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-center'>
					Desaminação
				</h3>
				<p className='mb-2'>
					A primeira reação na clivagem dos aminoácidos é quase sempre a remoção
					de seu grupo a-amino para excretar o excesso de nitrogênio e degradar
					o restante do esqueleto de carbono. É um processo metabólico, no qual,
					a partir de um aminoácido, são obtidos o correspondente cetoácido e
					amônia. Quando as enzimas envolvidas nesse processo requerem cofatores
					de oxidação-redução, a reação catalisada é chamada de desaminação
					oxidativa.
				</p>
				<p className='mb-2'>
					A ureia, principal produto da excreção de nitrogênio nos mamíferos
					terrestres, é sintetizada a partir do amônio e do aspartato . Ambas as
					substâncias são derivadas principalmente do glutamato, o principal
					produto das reações de desaminação . Na degradação, a transaminase
					atua em conjunto com a glutamato desidrogenase.
				</p>
			</div>
		</main>
	);
};

export default MetabolismoProteinasDestinoPage;
