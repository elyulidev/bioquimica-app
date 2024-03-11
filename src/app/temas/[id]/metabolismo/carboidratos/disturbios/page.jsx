import Image from "next/image";
import Digestao from "../../../../../../../public/tematicas/tema4/carboidratos/digestao_glucidos.webp";
import Catabolismo from "../../../../../../../public/tematicas/tema4/carboidratos/catabolismo.webp";

const MetabolismoCarboidratosDisturbiosPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Distúrbios do metabolismo de carboidratos
			</h1>
			<div className='mt-2'>
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
