import Image from "next/image";
import Enzima from "../../../../../../../public/tematicas/tema3/enzimas/enzima.webp";

const EnzimaIntroPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Enzima
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					São grupos de substâncias orgânicas de natureza normalmente proteica,
					com atividade intra ou extracelular que têm funções catalisadoras,
					catalisando reações químicas que, sem a sua presença, dificilmente
					aconteceriam. Isso é conseguido através do abaixamento da energia de
					ativação necessária para que se dê uma reação química, resultando no
					aumento da velocidade da reação e possibilitando o metabolismo dos
					seres vivos.
				</p>
				<p className='mb-2'>
					Em sistemas vivos, a maioria das reações bioquímicas dá-se em vias
					metabólicas, que são sequências de reações em que o produto de uma
					reação é utilizado como reagente na reação seguinte. Diferentes
					enzimas catalisam diferentes passos de vias metabólicas, agindo de
					forma concertada de modo a não interromper o fluxo nessas vias. Cada
					enzima pode sofrer regulação da sua atividade, aumentando-a,
					diminuindo-a ou mesmo interrompendo-a, de modo a modular o fluxo da
					via metabólica em que se insere. Sem as enzimas as reações químicas do
					organismo seriam muito lentas, elas proporcionam uma maior eficiência
					reduzindo a energia de ativação sem deslocar o equilíbrio exercendo
					assim seu poder catalítico.
				</p>
				<p className='mb-2'>
					Cada enzima é específica para um tipo de reação. Ou seja, elas atuam
					somente em um determinado composto e efetuam sempre o mesmo tipo de
					reação. O composto sobre o qual a enzima age é genericamente
					denominado substrato. A grande especificidade enzima-substrato está
					relacionada à forma tridimensional de ambos. A enzima se liga a uma
					molécula de substrato em uma região específica denominada sítio de
					ligação. Para isso, tanto a enzima quanto o substrato sofrem mudança
					de conformação para o encaixe. Eles se encaixam perfeitamente como
					chaves em fechaduras. A esse comportamento damos o nome de Teoria da
					Chave-Fechadura.
				</p>
				<Image
					src={Enzima}
					alt=''
					width={`full`}
					height={`auto`}
					priority={true}
				/>
			</div>
		</main>
	);
};

export default EnzimaIntroPage;
