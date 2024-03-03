import Image from "next/image";
import Digestao from "../../../../../../../public/tematicas/tema4/carboidratos/digestao_glucidos.webp";
import Catabolismo from "../../../../../../../public/tematicas/tema4/carboidratos/catabolismo.webp";

const MetabolismoCarboidratosDisturbiosPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Metabolismo de carboidratos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Os carboidratos são biomoléculas essenciais ao funcionamento do corpo
					humano. Eles estão presentes como principais componentes da dieta de
					grande parte das pessoas e sua oxidação promove a produção de energia
					celular.
				</p>
				<p className='mb-2'>
					Existe uma relação bastante estreita entre o metabolismo dos
					carboidratos e alguns órgãos. Desses, é preciso destacar a boca, o
					estômago e o intestino delgado.
				</p>
				<p className='mb-2'>
					É na boca que se inicia o processo de metabolização dos carboidratos.
					Uma vez que um alimento é digerido, uma enzima chamada amilase salivar
					se encarrega em quebrar o amido em moléculas menores, como a maltose e
					a dextrina.
				</p>
				<p className='mb-2'>
					Esse processo permite a transformação de carboidratos complexos em
					carboidratos mais simples para facilitar os processos que envolvem
					essa biomolécula.
				</p>

				<p className='mb-2'>
					Embora a ação da amilase salivar seja reduzida no estômago – devido ao
					ambiente ácido, esse órgão é primordial para o metabolismo por
					funcionar como local de transporte do alimento para o intestino
					delgado. Por conta disso, compreende-se que acidez gástrica reduz a
					atividade da amilase salivar, provocando uma inativação parcial de sua
					atividade.
				</p>
				<p className='mb-2'>
					É no intestino delgado que ocorre a maior parte da digestão e absorção
					dos carboidratos. No duodeno, a ação da bile é indispensável para o
					metabolismo dessa biomolécula.
				</p>
				<p className='mb-2'>
					A bile produzida pelo fígado e armazenada na vesícula biliar é
					liberada na presença do bolo alimentar para emulsificar a gordura e
					promover a ação enzimática que resulta na absorção dos carboidratos.
				</p>

				<p className='mb-2'>
					O intestino delgado apenas consegue absorver os carboidratos na forma
					de monossacarídeos.
				</p>
				<p className='mb-2'>
					Na dieta, os carboidratos estão presentes em forma de amido,
					dissacarídeos e monossacarídeos e eles necessitam de uma digestão
					química antes de sua absorção.
				</p>
				<p className='mb-2'>
					Uma vez que o alimento sofre a ação da amilase salivar na boca, ele
					não necessita de nenhuma secreção de enzima gástrica. Contudo, os
					carboidratos, uma vez absorvidos, promovem a viscosidade do muco que
					protege a mucosa gástrica.
				</p>
				<p className='mb-2'>
					A amilase pancreática tem um papel fundamental para a digestão dos
					carboidratos e atua em conjunto com as enzimas da superfície luminal
					do intestino delgado como as dipeptidases e dissacaridases para
					completar a digestão.
				</p>
				<p className='mb-2'>
					O suco pancreático é um outro elemento importante para digestão dos
					carboidratos por ser rico em HCO3 e atuar em conjunto com as enzimas
					que completam a digestão intraluminal não apenas dos carboidratos, mas
					também de proteínas e gordura.
				</p>
				<p className='mb-2'>
					As reservas pancreáticas do pâncreas exócrino produzem mais enzima do
					que o necessário para digerir uma refeição principalmente para
					promover a digestão adequada dos carboidratos.
				</p>
				<p className='mb-2'>
					Os carboidratos resultantes da digestão de membrana que ocorre pela
					ação da amilase salivar e pelas enzimas pancreáticas são absorvidos
					por processos de transporte específicas para cada monossacarídeo.
				</p>
				<p className='mb-2'>
					Essas vias de transporte estão presentes na membrana apical das
					células apicais das vilosidades do intestino delgado.
				</p>
				<p className='mb-2'>
					Os três monossacarídeos que se originam da digestão são a glicose, a
					galactose e a frutose e são captadas para as células apicais, levadas
					para a célula epitelial e posteriormente saem pela membrana
					basolateral, completando o processo de absorção.
				</p>
				<p className='mb-2'>
					No cólon, os ácidos graxos resultantes do catabolismo dos carboidratos
					que não foram absorvidos no intestino delgado são absorvidos pela
					microflora presente nesse órgão.
				</p>
				<p className='mb-2'>
					O fígado sintetiza os carboidratos e os libera quando o corpo
					necessita de energia, como no estado de jejum, por exemplo. Pela
					síntese e degradação dos carboidratos, o fígado fornece energia aos
					tecidos através da exportação de dois substratos fundamentais para
					oxidação nos tecidos periféricos: a glicose e os corpos cetônicos.
				</p>
				<Image
					src={Digestao}
					alt=''
					width={300}
					style={{ aspectRatio: "640/479" }}
					className='mx-auto'
				/>
				<p className='mb-2'>
					A glicólise, a glicogenólise, a gliconeogênese e a glicogênese são
					processo pelos quais o fígado está envolvido no metabolismo energético
					ao sintetizar a glicose.
				</p>
				<p className='mb-2'>Glicogênese</p>
				<p className='mb-2'>
					A glicogênese é o processo em que o glicogênio é sintetizado. O
					glicogênio é um produto obtido da dieta e da degradação intestinal de
					carboidratos. Ele é convertido, pela ação de enzimas hidrolíticas, em
					glicose livre.
				</p>
				<p className='mb-2'>Gliconeogênese</p>
				<p className='mb-2'>
					Esse é o processo pelo qual a glicose é sintetizada novamente pelo
					fígado, sendo uma das funções hepáticas mais importantes.
				</p>
				<p className='mb-2'>
					Por meio desse processo, ocorre a manutenção da glicose plasmática,
					que é a principal fonte energética para a maioria dos tecidos.
				</p>
				<p className='mb-2'>Glicólise</p>
				<p className='mb-2'>
					No período pós-prandial, a insulina encontra-se elevada. Para reduzir
					a quantidade de insulina, o fígado atua como um consumidor da glicose
					do plasma e a quebra em piruvato ou utiliza para sintetizar
					glicogênio. Para isso, é necessário oxidar a glicose.
				</p>
				<p className='mb-2'>
					A glicólise, portanto, consiste na decomposição da glicose em ácido
					purívico, uma das fases da oxidação da glicose e que ocorre em fase
					anaeróbia.
				</p>
				<p className='mb-2'>
					Uma vez que o ácido purívico é oxidado na fase aeróbica, ocorre o
					ciclo do ácido cítrico. Esse ciclo é usado para completar o processo
					oxidativo.
				</p>
				<p className='mb-2'>
					A glicólise é a primeira etapa da respiração celular e tem como
					resultado a produção de energia na forma de ATP.
				</p>
				<p className='mb-2'>Glicogenólise</p>
				<p className='mb-2'>
					A segunda forma pela qual o fígado disponibiliza glicose para o sangue
					é por meio da glicogenólise.{" "}
				</p>
				<p className='mb-2'>
					O glicogênio armazenado pode representar de 7% a 10% do peso total do
					fígado. Durante a glicogenólise hepática, a glicose é gerada como o
					principal produto, ao passo que a degradação do glicogênio muscular
					resulta na produção de ácido lático.
				</p>
				<Image
					src={Catabolismo}
					alt=''
					width={300}
					style={{ aspectRatio: "4/3" }}
					className='mx-auto'
				/>
				<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Distúrbios do metabolismo de carboidratos
				</h2>
				<p className='mb-2'>
					Existem vários distúrbios e patologias que estão associados a erros ou
					deficiências metabólicas que envolvem os carboidratos, principalmente
					as que se referem à glicose.
				</p>
				<p className='mb-2'>Dentre as patologias mais comuns, estão:</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>Diabetes Mellitus e a resistência insulínica.</li>
					<li>Hipoglicemia.</li>
					<li>Síndrome Metabólica.</li>
					<li>Doença celíaca.</li>
					<li>Intolerância à lactose. Galactosemia.</li>
				</ul>
				<p className='mb-2'>
					Além dessas patologias, os processos metabólicos deficientes podem
					estar relacionados diretamente aos carboidratos e não apenas aos seus
					produtos.
				</p>
				<p className='mb-2'>
					A oxidação dos carboidratos, por exemplo, é uma das fontes principais
					da produção de CO2. Essa oxidação é essencial para manter o equilíbrio
					ácido base do corpo humano. Além de evitar distúrbios ácido-base como
					a alcalose e a acidose.
				</p>
				<p className='mb-2'>
					Os carboidratos participam ainda da pressão alveolar nos pulmões.
					Quando essa biomolécula é o combustível a ser “queimado”, os tecidos
					produzem uma molécula de CO2 para cada O2 consumido, afetando o
					coeficiente respiratório.
				</p>
				<p className='mb-2'>
					A ingestão de dieta com baixo teor de carboidrato, como a dieta de
					Atkins, promove a aceleração da lise de proteínas teciduais. Por
					consequência, à perda muscular e quebra de gordura.
				</p>
			</div>
		</main>
	);
};

export default MetabolismoCarboidratosDisturbiosPage;
