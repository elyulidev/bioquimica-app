const MetabolismoLipidiosTiposPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Tipos de Lipídios
			</h1>

			<div className='mt-2'>
				<p className='mb-2'>
					Os tipos de lipídios envolvidos no metabolismo lipídico incluem:
				</p>
				<p className='mb-2'>Lipídios de membrana:</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Fosfolipídios : Os fosfolipídios são o principal componente da
						bicamada lipídica da membrana celular e são encontrados em muitas
						partes do corpo.
					</li>
					<li className='mb-2 font-semibold'>
						Esfingolipídios : os esfingolipídios são encontrados principalmente
						na membrana celular do tecido neural.
					</li>
					<li className='mb-2 font-semibold'>
						Glicolipídios : O principal papel dos glicolipídios é manter a
						estabilidade da bicamada lipídica e facilitar o reconhecimento
						celular.
					</li>
					<li className='mb-2 font-semibold'>
						Glicerofosfolípidios : O tecido neural (incluindo o cérebro) contém
						grandes quantidades de glicerofosfolípidios.
					</li>
				</ul>
				<p className='mb-2'>Outros tipos de lipídios:</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Colesterol : Os colesteróis são os principais precursores de
						diferentes hormônios em nosso corpo, como progesterona e
						testosterona. A principal função do colesterol é controlar a fluidez
						da membrana celular.
					</li>
					<li className='mb-2 font-semibold'>
						Esteróides: Os esteróides são uma das moléculas importantes de
						sinalização celular.
					</li>
					<li className='mb-2 font-semibold'>
						Triacilgliceróis (gorduras): Os triacilglicerídeos são a principal
						forma de armazenamento de energia no corpo humano.
					</li>
					<li className='mb-2 font-semibold'>
						Ácidos graxos: Os ácidos graxos são um dos precursores usados na
						biossíntese da membrana lipídica e do colesterol. Eles também são
						usados para energia.
					</li>
					<li className='mb-2 font-semibold'>
						Sais biliares : os sais biliares são secretados no fígado e
						facilitam a digestão lipídica no intestino delgado.
					</li>
					<li className='mb-2 font-semibold'>
						Eicosanóides : Os eicosanóides são feitos a partir de ácidos graxos
						no corpo e são usados para sinalização celular.
					</li>
					<li className='mb-2 font-semibold'>
						Corpos cetônicos : Os corpos cetônicos são feitos a partir de ácidos
						graxos no fígado. Sua função é produzir energia durante períodos de
						inanição ou baixa ingestão de alimentos.
					</li>
				</ul>
			</div>
		</main>
	);
};

export default MetabolismoLipidiosTiposPage;
