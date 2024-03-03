const MetabolismoViasPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Vias metabolicas
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Uma via metabólica é o conjunto de reações químicas catalisadas por
					enzimas, que ocorrem de forma ordenada e nas quais os compostos
					iniciais sofrem sucessivas transformações químicas de grande
					importância para o organismo.
				</p>
				<p className='mb-2'>
					Uma rota metabólica ou via metabólica é uma sucessão de reações
					químicas onde um substrato inicial é transformado e dá origem a
					produtos finais, através de uma série de metabólitos intermediários.
				</p>
				<div>A → B → C → D → E</div>
				<p className='mb-2'>
					A é o substrato inicial, E é o produto final e B, C, D são os
					metabólitos intermediários da via metabólica.
				</p>
				<p className='mb-2'>
					As diferentes reações de todas as vias metabólicas são catalisadas por
					enzimas e ocorrem dentro das células. Muitas dessas rotas são muito
					complexas e envolvem uma modificação passo a passo da substância
					inicial para dar a ela a forma de produto com a estrutura química
					desejada.
				</p>
				<p className='mb-2'>
					Todas as vias metabólicas estão interligadas e muitas não fazem
					sentido isoladamente; no entanto, dada a enorme complexidade do
					metabolismo, sua subdivisão em séries relativamente curtas de reações
					torna muito mais fácil de entender. Muitas vias metabólicas se cruzam,
					e existem alguns metabólitos que são importantes cruzamentos
					metabólicos, como acetil coenzima-A.
				</p>
				<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Principais vias metabólicas do ser humano
				</h2>
				<p className='mb-2'>
					O metabolismo energético dos seres humanos ocorre através de uma
					complexa interação entre vários processos bioquímicos. Os principais
					são:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Glicólise: Oxidação da glicose para obter ATP;
					</li>
					<li className='mb-2 font-semibold'>
						Ciclo de Krebs: Oxidação do acetil-CoA para obter energia;
					</li>
					<li className='mb-2 font-semibold'>
						Fosforilação oxidativa: Utilização da energia liberada na oxidação
						da glicose e do acetil-CoA para produzir ATP;
					</li>
					<li className='mb-2 font-semibold'>
						Via das pentoses-fosfato: Síntese de pentoses e obtenção de poder
						redutor para reações anabólicas;
					</li>
					<li className='mb-2 font-semibold'>
						{" "}
						Ciclo da uréia: Eliminação de NH4(amônia) sob formas menos tóxicas;
					</li>
					<li className='mb-2 font-semibold'>
						Oxidação dos ácidos gordos: Transformação de ácidos gordos em
						acetil-CoA, para posterior utilização pelo ciclo de Krebs;
					</li>
					<li className='mb-2 font-semibold'>
						Gliconeogênese: Síntese de glicose a partir de moléculas menores,
						para posterior utilização pelo cérebro.
					</li>
				</ul>
			</div>
		</main>
	);
};

export default MetabolismoViasPage;
