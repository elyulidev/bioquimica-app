const MineraisCompostosPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Compostos antioxidantes
			</h1>
			<div className='mt-2'>
				<div className='w-[80%] mx-auto overflow-x-auto'>
					<table className='mb-3'>
						<thead className=''>
							<tr>
								<th className='border border-solid border-white '>
									Compostos antioxidantes
								</th>
								<th className='border border-solid border-white'>
									Alimentos com altos níveis destes antioxidantes{" "}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className=''>
								<td className='border border-solid border-white'>
									Vitamina C (ácido ascórbico).
								</td>
								<td className='border border-solid border-white'>
									Fruta fresca e hortaliças.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									Vitamina E (tocoferóis, tocotrienóis).
								</td>
								<td className='border border-solid border-white'>
									Óleos vegetais
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									Antioxidantes polifenólicos (resveratrol, flavonoides).
								</td>
								<td className='border border-solid border-white'>
									Chá, café, soja, fruta, azeite, chocolate, canela, oregãos e
									vinho tinto
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									Carotenoides (licopeno, carotenos, luteína).
								</td>
								<td className='border border-solid border-white'>
									Fruta, hortaliças e ovos.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className='mb-2'>Vitaminas com propriedades antioxidantes:</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Vitamina E </li>
					<li className='mb-2 font-semibold'>Vitamina C</li>
					<li className='mb-2 font-semibold'>Vitamina A</li>
					<li className='mb-2 font-semibold'>Carotenóides</li>
					<li className='mb-2 font-semibold'>Ácido lipóico</li>
				</ul>
				<p className='mb-2'>Minerais com ação antioxidante:</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Zinco</li>
					<li className='mb-2 font-semibold'>Cobre </li>
					<li className='mb-2 font-semibold'>Selênio </li>
					<li className='mb-2 font-semibold'>Manganês</li>
				</ul>
			</div>
		</main>
	);
};

export default MineraisCompostosPage;
