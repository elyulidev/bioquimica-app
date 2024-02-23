const BioProtClassifPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Classificação das proteínas de acordo com vários critérios
			</h1>
			<div className='mt-2'>
				<ul className='list-decimal'>
					<li className='mb-2'>
						<p className='font-bold'>Pela sua forma</p>
						<ul className='list-disc'>
							<li>
								{" "}
								Globular: Sua estrutura tridimensional é esferoidal ou em forma
								de glóbulos. Exemplos: mioglobina, hemoglobina, proteínas
								plasmáticas, enzimas e histonas (realizam funções dinâmicas)
							</li>
							<li>
								{" "}
								Fibroso: Sua estrutura tridimensional é alongada, lembrando as
								vigas de aço das pontes. Exemplos: colágeno, queratina (executam
								funções estruturais)
							</li>
						</ul>
					</li>
					<li className='mb-2'>
						<p className='font-bold'>Por causa de sua solubilidade</p>
						<ul className='list-disc'>
							<li>
								{" "}
								Insolúveis: São todos fibrosos e algumas proteínas globulares
								que fazem parte das membranas celulares.
							</li>
							<li>
								{" "}
								Solúvel: Quase todas as proteínas globulares são pouco solúveis.
							</li>
							<li> Pouco solúvel: Alguns globulares, exemplo: globulinas.</li>
						</ul>
					</li>
					<li className='mb-2'>
						<p className='font-bold'>Devido a sua composição química</p>
						<ul className='list-disc'>
							<li>Simples: são formados apenas por aminoácidos.</li>
							<li>
								{" "}
								Conjugados: São formados além dos aminoácidos por um grupo
								prostético, que não é a proteína, esta é subclassificada com
								base nesse grupo. Exemplo: Lipoproteínas, Glicoproteínas,
								Fosfoproteínas, Hemoproteínas, Flavoproteínas, Metaloproteínas.
							</li>
						</ul>
					</li>
					<li className='mb-2'>
						<p className='font-bold'>Por sua função</p>
						<ul className='list-disc'>
							<li> Enzimas: Catalisam reações químicas. Ex.: telomerase. -</li>
							<li>
								{" "}
								Transporte: Eles transportam substâncias. Ex: Albumina,
								Hemoglobina.
							</li>
							<li> Reserva: Armazena substâncias. Ex.: Ferritina.</li>
							<li>
								{" "}
								Contráteis: Participam da contração muscular. Ex: actina e
								miosina.
							</li>
							<li>
								{" "}
								Estruturais: Fazem parte do tecido conjuntivo. Ex.: Colágeno,
								Elastina.
							</li>
							<li>
								{" "}
								Defesa: Atuam contra agentes externos como vírus, bactérias. Ex:
								Imunoglobulinas.
							</li>
							<li> Hormônios: Atuam em processos específicos. Ex: insulina.</li>
							<li> Reguladores: P 53 , mdm-2.</li>
						</ul>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default BioProtClassifPage;
