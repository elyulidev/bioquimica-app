const BioAcidoNucleicoDifPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Funções dos ácidos nucleicos
			</h1>
			<div className='mt-2'>
				<table className='border border-solid border-white'>
					<thead>
						<th className='border border-solid border-white'></th>
						<th className='border border-solid border-white'>DNA</th>
						<th className='border border-solid border-white'>RNA</th>
					</thead>
					<tbody className='border border-solid border-white'>
						<tr>
							<td className='border border-solid border-white'>Açúcar</td>
							<td className='border border-solid border-white'>
								Desoxirribose
							</td>
							<td className='border border-solid border-white'>Ribose</td>
						</tr>
						<tr>
							<td className='border border-solid border-white'>
								Base pirimídica exclusiva
							</td>
							<td className='border border-solid border-white'>Timina</td>
							<td className='border border-solid border-white'>Uracila</td>
						</tr>
						<tr>
							<td className='border border-solid border-white'>Função</td>
							<td className='border border-solid border-white'>
								Hereditariedade da informação genética
							</td>
							<td className='border border-solid border-white'>
								Síntese de proteínas
							</td>
						</tr>
						<tr>
							<td className='border border-solid border-white'>Localização</td>
							<td className='border border-solid border-white'>
								Núcleo celular
							</td>
							<td className='border border-solid border-white'>
								Núcleo celular e citoplasma
							</td>
						</tr>
						<tr>
							<td className='border border-solid border-white'>Estrutura</td>
							<td className='border border-solid border-white'>
								Duas cadeias em formato helicoidal
							</td>
							<td className='border border-solid border-white'>
								Cadeia nucleotídica única
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default BioAcidoNucleicoDifPage;
