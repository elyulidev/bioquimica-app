const BioLipidiosClassifPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Classificação
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Os lipídios podem ser classificados de várias maneiras, dependendo dos
					critérios utilizados.
				</p>
				<p className='mb-2'>
					Podemos classificar os lipídios em três grupos: simples, compostos e
					derivados.
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Lipídios simples são aqueles que, quando sofrem hidrólise (quebra de
						uma molécula pela água) total, originam somente ácidos graxos e
						álcoois. Como exemplo temos gorduras, óleos e ceras.
					</li>
					<li className='mb-2 font-semibold'>
						Lipídios compostos são aqueles que apresentam, além de ácidos graxos
						e alcoóis, outras substâncias adicionais. Nesse grupo incluim-se,
						por exemplo, os fosfolipídios, que apresentam, ainda, ácido
						fosfórico e um composto nitrogenado.
					</li>
					<li className='mb-2 font-semibold'>
						Lipídios derivados, que podem ser definidos como substâncias obtidas
						por hidrólise dos outros grupos de lipídios. Como exemplo de
						lipídios derivados, temos os ácidos graxos, vitaminas lipossolúveis,
						hidrocarbonetos e pigmentos.
					</li>
				</ul>
				<p className='mb-2'>
					Segundo a hidrólise alcalina podem ser: Saponificáveis ou complexos e
					Não saponificáveis ou simples.
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Saponificáveis ou complexos são aqueles que contêm ácidos graxos em
						sua composição, também provocam sais com ação detergente, por
						exemplo: acilglicerídeos, fosfoglicerídeos, esfingolipídios.
					</li>
					<li className='mb-2 font-semibold'>
						Não saponificáveis ou simples são aqueles que não contêm ácidos
						graxos, nem originam sais com ação detergente, por exemplo:
						colesterol e prostaglandinas.
					</li>
				</ul>
				<p className='mb-2'>
					De acordo com sua semelhança estrutural, eles são agrupados em 7
					grupos:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Ácidos graxos.</li>
					<li className='mb-2 font-semibold'>Ceras.</li>
					<li className='mb-2 font-semibold'>
						Acilgliceróis (também conhecidos como acilglicerídeos ou
						glicerídeos).
					</li>
					<li className='mb-2 font-semibold'>
						Fosfatídeos de glicerina (ou fosfoglicerídeos).
					</li>
					<li className='mb-2 font-semibold'>Esfingolípidos.</li>
					<li className='mb-2 font-semibold'>Terpenos.</li>
					<li className='mb-2 font-semibold'>Esteroides.</li>
				</ul>
			</div>
		</main>
	);
};

export default BioLipidiosClassifPage;
