import Image from "next/image";
import DestinoT from "../../../../../../../public/tematicas/tema4/proteinas/destino_transporte.webp";

const MetabolismoProteinasDestinoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Destino e transporte de aminoácidos
			</h1>
			<div className='mt-2'>
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
