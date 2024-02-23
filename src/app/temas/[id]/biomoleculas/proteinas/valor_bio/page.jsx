const BioProtValorBPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Valor biológico das proteínas
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					O valor biológico de uma proteína depende da composição dos
					aminoácidos e das proporções entre eles e é máximo quando essas
					proporções são necessárias para satisfazer as demandas de nitrogênio
					para crescimento, síntese e reparação tecidual.
				</p>
				<p className='mb-2'>
					Como os aminoácidos são os precursores das proteínas e as proteínas
					vegetais são inferiores em valor nutricional às proteínas de origem
					animal, é necessário combinar aminoácidos ou proteínas completas com
					incompletas para obter uma nutrição ideal.
				</p>
				<p className='mb-2'>
					Aminoácido limitante: aminoácidos essenciais encontrados em uma
					proteína incompleta, em quantidades menores que as do padrão
					(Completo).
				</p>
				<p className='mb-2'>
					Aminoácidos limitantes:
					<ul className='list-disc ml-4 font-normal'>
						<li>Lisina em cerais, no caso do milho, também triptofano.</li>
						<li>Metonina em Feijão.</li>
					</ul>
				</p>
				<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Proteínas de alto valor biológico
				</h2>
				<p className=''>
					As proteínas de alto valor biológico são as que contêm os aminoácidos
					essenciais, que são os obtidos exclusivamente pela alimentação, na
					proporção adequada para o organismo. Alguns exemplos de proteínas de
					alto valor biológico são carne, leite, queijo, iogurte, frango, peixe
					e ovos.
				</p>
				<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Proteínas de baixo valor biológico
				</h2>
				<p className=''>
					As proteínas são classificadas em baixo valor biológico, quando
					possuem um aminoácido essencial insuficiente. As proteínas de baixo
					valor biológico são principalmente as de origem vegetal, como
					leguminosas, grãos, oleaginosas, sementes e vegetais.
				</p>
				<p className=''>
					Por isso, em dietas vegetarianas, é aconselhado combinar diferentes
					fontes de proteínas vegetais para aumentar o valor biológico das
					proteínas. Alguns exemplos de combinações são: lentilha com arroz,
					arroz com feijão e macarrão e grão-de-bico, por exemplo.
				</p>
			</div>
		</main>
	);
};

export default BioProtValorBPage;
