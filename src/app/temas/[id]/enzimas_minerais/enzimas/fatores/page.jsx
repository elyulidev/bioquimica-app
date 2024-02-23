const EnzimaFatoresPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Fatores que afetam a velocidade de reações enzimáticas
			</h1>
			<div className='mt-2'>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Concentração de ENZIMA</li>
					<li className='mb-2 font-semibold'>Concentração de SUBSTRATO</li>
					<li className='mb-2 font-semibold'>Concentração de COFATORES</li>
					<li className='mb-2 font-semibold'>pH</li>
					<li className='mb-2 font-semibold'>TEMPERATURA</li>
					<li className='mb-2 font-semibold'>
						Concentração de INIBIDORES e ATIVADORES
					</li>
				</ul>
			</div>
		</main>
	);
};

export default EnzimaFatoresPage;
