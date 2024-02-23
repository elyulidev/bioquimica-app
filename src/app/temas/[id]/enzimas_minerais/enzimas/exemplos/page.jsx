const EnzimaExemplosPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Exemplos e Tipos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					As enzimas são formadas por uma parte protéica, chamada de apoenzima e
					outra parte não protéica, chamada de co-fator. Quando o co-fator é uma
					molécula orgânica, recebe a denominação de coenzima. Muitas coenzimas
					são relacionadas com as vitaminas.
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Catalase: decompõe o peróxido de hidrogênio;
					</li>
					<li className='mb-2 font-semibold'>
						DNA polimerase ou Transcriptase Reversa: catalisa a duplicação do
						DNA;
					</li>
					<li className='mb-2 font-semibold'>
						Lactase: facilita a hidrólise da lactose;
					</li>
					<li className='mb-2 font-semibold'>
						Lipase: facilita a digestão de lipídios;
					</li>
					<li className='mb-2 font-semibold'>
						Protease: atuam sobre as proteínas;
					</li>
					<li className='mb-2 font-semibold'>
						Urease: facilita a degradação da ureia;
					</li>
					<li className='mb-2 font-semibold'>
						Ptialina ou Amilase: atua na degradação do amido na boca,
						transformando-o em maltose (molécula de menor tamanho);
					</li>
					<li className='mb-2 font-semibold'>
						Pepsina ou Protease: atua sobre proteínas, degradando-as em
						moléculas menores;
					</li>
					<li className='mb-2 font-semibold'>
						Tripsina: participa da degradação de proteínas que não foram
						digeridas no estômago.
					</li>
				</ul>
			</div>
		</main>
	);
};

export default EnzimaExemplosPage;
