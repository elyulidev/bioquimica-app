import Image from "next/image";
import Estruturas from "../../../../../../../public/tematicas/tema2/proteinas/estruturas.webp";

const BioProtEstruturaPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Proteínas, aminoácidos e peptídeos.
			</h1>
			<div className='mt-2'>
				<p className=''>
					Proteínas são macromoléculas biológicas, com alto peso molecular
					constituídas por uma ou mais cadeias de aminoácidos.
				</p>
				<p className=''>
					A proteína é o principal componente dos músculos, órgãos e glândulas.
					Cada célula viva e todos os fluidos corporais, exceto a bile e a
					urina, contêm proteínas, são as moléculas mais abundantes, complexas e
					versáteis que existem nela e constituem aproximadamente 50% de seu
					peso seco e desempenham grande parte de suas funções devido à sua
					diversidade estrutural.
				</p>
				<p className=''>
					Esta palavra vem do grego proteos significa primordial ou primeiro, o
					que condiz com o papel essencial que essas moléculas representam para
					a vida. O termo foi criado em 1938 por Mulder, um fisiologista
					holandês.
				</p>
			</div>
			<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
				Estrutura das proteínas{" "}
			</h2>
			<div>
				<p className=''>
					A estrutura tridimensional de cada proteína é determinada pela
					sequência de aminoácidos que formam cada polipeptídeo. Os quatro
					níveis de estrutura das proteínas:
				</p>
				<p className=''>
					<span className='font-bold underline'>Estrutura primária</span>: nada
					mais é que a sequência de aminoácidos. Ela determina as estruturas
					secundária e terciária dessa proteína.
				</p>
				<p className=''>
					<span className='font-bold underline'>Estrutura secundária</span>:{" "}
					forma-se quando ocorre a ligação entre os elementos repetidos da
					cadeia principal polipeptídica. As junções desses elementos são por
					meio de ligações de hidrogênio. Nesse caso, observa-se que as cadeias
					estão torcidas, dobradas ou enroladas sobre elas mesmas.
				</p>
				<p className=''>
					<span className='font-bold underline'>Estrutura terciária</span>:
					corresponde à forma adquirida por um polipeptídeo depois da interação
					de suas cadeias laterais. Observamos, nesse caso, mais dobras e
					enrolamentos.
				</p>
				<p className=''>
					<span className='font-bold underline'>Estrutura quartenária</span>: há
					a associação de duas ou mais cadeias polipeptídicas.
				</p>
				<Image
					src={Estruturas}
					alt=''
					width='full'
					height='auto'
					priority={true}
				/>
			</div>
		</main>
	);
};

export default BioProtEstruturaPage;
