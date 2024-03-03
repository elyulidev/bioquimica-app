import Image from "next/image";
import Vias from "../../../../../../../public/tematicas/tema4/proteinas/vias_metabolicas.webp";
import DestinoT from "../../../../../../../public/tematicas/tema4/proteinas/destino_transporte.webp";

const MetabolismoProteinasDisturbiosPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Distúrbios metabólicos do ciclo da ureia
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Doenças que causam danos hepáticos extensos comprometem as funções
					hepáticas, incluindo a síntese de ureia. A principal consequência
					metabólica desta situação é a elevação a níveis tóxicos de amoníaco, o
					que leva a graves alterações no funcionamento do sistema nervoso
					central devido à elevada sensibilidade deste tecido ao amoníaco.
				</p>
				<p className='mb-2'>
					O quadro clínico que ocorre é chamado de Encefalopatia Hepática.
					Pacientes com doença hepática aguda ou crônica podem apresentar
					encefalopatia metabólica, caracterizada por distúrbios variáveis da
					consciência, distúrbios psíquicos, tremor com hiperreflexia , aumento
					do tônus muscular e mau hálito típico.
				</p>
				<p className='mb-2'>
					Fenilcetonúria: É um distúrbio do metabolismo da fenilalanina, que tem
					incidência aproximada de 1 por 14.000 nascimentos e se deve à ausência
					de atividade da enzima hepática fenilalanina- hidroxilase , cuja
					função é a conversão da fenilalanina em tirosina.
				</p>
				<p className='mb-2'>Sintomas</p>

				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>
						A criança não tratada apresenta ( para 4 meses) evidência de atraso
						em desenvolvimento do cérebro, o que pode levar à microcefalia.
					</li>
					<li>Mais tarde aparece o atraso mental, moderado a grave.</li>
					<li>
						Aparência típica com pele pálida, cabelos loiros e olhos azuis..
					</li>
					<li>Urina com odor de “camundongo” e tendência a lesões cutâneas.</li>
					<li>Cerca de um terço tem crise convulsiva.</li>
				</ul>
				<p className='mb-2'>Diagnóstico</p>
				<p className='mb-2'>
					Deve ser feito antes de 7 dias após o nascimento, porque antes disso,
					os níveis de fenilalanina podem estar normais. Basta uma pequena
					amostra de sangue do bebê : é picada no calcanhar, o sangue é
					impregnado em um papel especial e analisado em um laboratório
					bioquímico.
				</p>
				<p className='mb-2'>
					Um teste de inibição do crescimento bacteriano é usado e os casos
					positivos são dosados com fenilalanina e tirosina no sangue.
				</p>

				<p className='mb-2'>Tratamento</p>
				<p className='mb-2'>
					Destina-se a evitar o aparecimento de retardo mental e, para isso, são
					utilizadas dietas com baixo teor de fenilalanina, que devem ser
					seguidas rigorosamente até que o desenvolvimento do sistema nervoso
					esteja completo.
				</p>
			</div>
		</main>
	);
};

export default MetabolismoProteinasDisturbiosPage;
