const MineraisClassifPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Classificação
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Conforme as suas composições, os minerais podem ser classificados em
					metálicos e não metálicos:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						<strong>Minerais metálicos: </strong>
						como o nome sugere, são aqueles compostos por elementos químicos
						metálicos. Costumam ser bons condutores de eletricidade. Exemplos:
						alumínio, ferro, cobre etc.
					</li>
					<li className='mb-2 font-semibold'>
						<strong>Minerais não metálicos: </strong>
						são aqueles não compostos por elementos químicos metálicos, tais
						como diamante, calcário e areia.
					</li>
				</ul>
				<p className='mb-2'>
					De acordo com as quantidades necessárias ao organismo, os minerais
					podem ser divididos em três grupos:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						<strong>Macroelementos: </strong>
						sódio, potássio, cálcio, fósforo, magnésio, cloro e enxofre. (medido
						em gramas)
					</li>
					<li className='mb-2 font-semibold'>
						<strong>Microelementos: </strong>
						ferro, flúor, iodo, manganês, cobalto, cobre e zinco. (medido em
						miligramas)
					</li>
					<li className='mb-2 font-semibold'>
						<strong>Oligoelementos: </strong>
						silício, níquel, cromo, lítio, molibdênio e selênio. (medido em
						microgramas)
					</li>
				</ul>
			</div>
		</main>
	);
};

export default MineraisClassifPage;
