const BioLipidiosAcidosGordosPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Ácidos gordos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					São ácidos carboxílicos, que em sua maioria não existem livres na
					matéria viva, mas fazem parte do complexo Lipídeos. Os ácidos graxos
					são Monocarboxílicos, têm uma cadeia hidrocarbonada apolar de
					comprimento variável, que é quase sempre aberto e não ramificado.
				</p>
				<h2 className='my-3 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Classificação
				</h2>
				<p className='mb-2'>Os ácidos graxos podem ser:</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Saturado: Eles só têm ligações simples em sua cadeia de
						hidrocarbonetos.
					</li>
					<li className='mb-2 font-semibold'>
						Insaturados: Se eles têm uma ligação dupla em sua cadeia de
						hidrocarbonetos.
					</li>
					<li className='mb-2 font-semibold'>
						Substituído: Se algum átomo de hidrogênio foi substituído por
						qualquer grupo químico.
					</li>
				</ul>
				<p className='mb-2'>Eles são classificados em:</p>
				<div className='w-[80%] mx-auto overflow-x-auto mb-2'>
					<table className=''>
						<thead className=''>
							<tr>
								<th className='border border-solid border-white '>saturado</th>
								<th className='border border-solid border-white' colSpan={2}>
									insaturado
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className=''>
								<td className='border border-solid border-white'>
									Eles não têm ligações duplas em sua cadeia de carbono. -A
									cadeia de hidrocarbonetos é reta (Quanto maior a quantidade de
									ácidos graxos saturados na membrana, menor a fluidez da mesma)
								</td>
								<td className='border border-solid border-white' colSpan={2}>
									Apresentar uma ou mais ligações duplas em sua cadeia carbônica
									Será denominado carbono ῳ, o carbono que apresenta a primeira
									dupla ligação, contando a partir da extremidade CH da cadeia
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									<strong>EX:</strong> ácido palmítico (16 átomos de carbono)
								</td>
								<td className='border border-solid border-white'>
									<strong>monoinsaturado</strong>
								</td>
								<td className='border border-solid border-white'>
									<strong>poliinsaturado</strong>
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'></td>
								<td className='border border-solid border-white'>
									tem um único ligação dupla
								</td>
								<td className='border border-solid border-white'>
									Eles contêm 2 ou mais ligações duplas (aqui encontramos os
									eicosanóides (C 20))
									<ul className=''>
										<li>-Uma quantidade maior de instaurações</li>
										<li>+ fluido é a membrana</li>
									</ul>
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'></td>
								<td className='border border-solid border-white' colSpan={2}>
									<div className='font-bold underline'>EX: Monoinsaturado</div>
									Palminoleico.16 Carbonos e ῳ7 oleico 18 carbonos e ῳ9
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'></td>
								<td className='border border-solid border-white' colSpan={2}>
									<div className='font-bold underline'>EX: poliinsaturado</div>
									<ul className=''>
										<li>linolênico 18 carbonos e ῳ 3.</li>
										<li>linoléico 18 carbonos e ῳ6.</li>
										<li>
											Araquidônico 20 carbonos e ῳ6 (precursor eicosanóide).
										</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h2 className='my-3 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Ácidos graxos essenciais
				</h2>
				<p className='mb-2'>
					São aqueles que o organismo não consegue sintetizar e deve ingeri-los
					na dieta. Exemplo: Linoleico, Linolênico, Araquidônico.
				</p>
			</div>
		</main>
	);
};

export default BioLipidiosAcidosGordosPage;
