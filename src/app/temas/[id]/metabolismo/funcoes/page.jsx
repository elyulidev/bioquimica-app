const MetabolismoFuncoesPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Funções do metabolismo
			</h1>
			<div className='mt-2'>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Incorporação de nutrientes.</li>
					<li className='mb-2 font-semibold'>
						Obtenção da energia química necessária à vida.
					</li>
					<li className='mb-2 font-semibold'>
						Síntese e degradação de biomoléculas.
					</li>
					<li className='mb-2 font-semibold'>
						Eliminação de substâncias residuais.
					</li>{" "}
					posterior utilização pelo cérebro.
				</ul>
			</div>
		</main>
	);
};

export default MetabolismoFuncoesPage;
