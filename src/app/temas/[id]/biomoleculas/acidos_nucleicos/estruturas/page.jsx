import Image from "next/image";
import Nucleotidos from "../../../../../../../public/tematicas/tema2/nucleotidos/nucleotideo.webp";
import RNA from "../../../../../../../public/tematicas/tema2/nucleotidos/rna.webp";

const BioAcidoNucleicoEstruturaPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Nucleotideos e Ácidos nucleicos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Em abril de 2003, foi feito um anúncio que marcou um grande passo em
					frente na la medicina. Poração conjunta da comunidade científica
					internacional, o Projeto Genoma Humano havia sido concluído.
				</p>
				<p className='mb-2'>
					Os nucleotídeos são as unidades e substâncias químicas que se juntam
					para formar os ácidos nucléicos, principalmente o RNA e o DNA . Os
					nucleotídeos são formados por: açúcar, base nitrogenada e fosfato.
					Estés constituem seus elementos constantes.
				</p>
				<p className='mb-2'>Observe os componentes de um nucleotídeo:</p>

				<ul className='list-disc'>
					<li className='mb-2 font-semibold'>
						Um açúcar de cinco carbonos (pentose): As pentoses encontradas nos
						ácidos nucleicos são a ribose (C5H10O5) e a desoxirribose (C5H10O4).
					</li>
					<li className='mb-2 font-semibold'>
						Uma base nitrogenada: As bases nitrogenadas podem ser de dois tipos:
						pirimidinas e purinas. Uma pirimidina tem um anel de seis átomos, já
						as purinas possuem um anel de seis átomos fusionados a um anel de
						cinco átomos. As purinas são: adenina (A) e guanina (G). Já as
						pirimidinas são: citosina (C), timina (T) e uracila (U).
					</li>
					<li className='mb-2 font-semibold'>
						Um grupo fosfato: O grupo fosfato origina-se do ácido fosfórico.
					</li>
				</ul>

				<Image
					src={Nucleotidos}
					alt=''
					width='full'
					height='auto'
					priority={true}
				/>

				<div className=''>
					<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
						Estrutura dos ácidos nucleicos
					</h2>
					<p className='mb-2'>
						Os ácidos nucleicos apresentam uma estrutura básica, um conjunto de
						nucleotídeos, de forma que cada nucleotídeo é formado por um anel de
						pentose, uma base nitrogenada e um grupamento fosfato.
					</p>
					<p className='mb-2'>
						A união de várias unidades nucleotídicas se dá uma por uma ligação
						do tipo fosfodiéster, entre o grupo fosfato e o açúcar de 5 carbonos
						— é assim que acontece a polimerização que dá origem ao DNA ou RNA.
						Existem dois tipos de ácidos nucleicos: o DNA e o RNA. Eles são
						responsáveis por codificar e traduzir as informações genéticas para
						a síntese de proteínas nos organismos vivos.
					</p>
					<p className='mb-2'>
						Os ácidos nucleicos DNA e RNA têm funções cruciais nos seres vivos.
						O DNA é o material genético que armazena as informações genéticas
						hereditárias, que são transmitidas de geração em geração. Ele contém
						as instruções para a síntese de todas as proteínas do organismo, que
						são fundamentais para a estrutura e função celular.
					</p>
					<p className='mb-2'>
						RNA tem várias funções importantes no processamento e na expressão
						do DNA. Ele é responsável por traduzir as informações genéticas
						contidas no DNA para a síntese de proteínas específicas, bem como no
						controle do metabolismo e da divisão celular. Além disso, também tem
						funções estruturais, como na composição de ribossomos, que são as
						organelas celulares responsáveis pela síntese de proteínas.
					</p>
					<Image src={RNA} alt='' width='full' height='auto' priority={true} />
					<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
						Estrutura do DNA
					</h2>
					<p className='mb-2'>
						As moléculas de DNA possuem dois polinucleotídeos que se espiralam,
						formando a estrutura conhecida como dupla hélice. A parte externa da
						hélice é formada pelas cadeias principais açúcar-fosfato, enquanto
						as bases nitrogenadas estão pareadas no interior da hélice. Os dois
						polinucleotídeos estão unidos por ligações estabelecidas entre os
						pares de bases.
					</p>
					<p className='mb-2'>
						A união entre os pares de bases não ocorre de maneira aleatória, de
						modo que o pareamento é observado apenas com bases compatíveis. A
						adenina presente em uma cadeia, por exemplo, pareia apenas com a
						timina de outra cadeia. Já a guanina pareia apenas com a citosina.
						Isso significa que se lermos a sequência de base de uma cadeia,
						imediatamente saberemos quais bases formam a outra cadeia. Para
						saber mais, acesse: DNA.
					</p>
					<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
						Estrutura do RNA
					</h2>
					<p className='mb-2'>
						As moléculas de RNA, diferentemente das moléculas de DNA, não estão
						em dupla hélice. O RNA ocorre em cadeia simples. O pareamento de
						bases pode ocorrer no RNA, levando à formação de estruturas
						tridimensionais. O RNA transportador, por exemplo, apresenta uma
						forma que lembra um L, sendo observado o pareamento em algumas
						regiões. No RNA, a adenina pareia com a uracila, uma vez que a
						timina não está presente.
					</p>
					<p className='mb-2'>
						Vale salientar que durante o processo de transcrição (produção de
						RNA), as duas cadeias da molécula de DNA se separam em determinados
						pontos, e as bases dos nucleotídeos do RNA se emparelham com seus
						complementos presentes na cadeia de DNA. Os nucleotídeos se unem,
						causando a síntese da molécula de RNA, a qual se desprende da
						molécula de DNA. A ligaçõe entre as duas cadeias do DNA é, então,
						reestabelecida.
					</p>
				</div>
			</div>
		</main>
	);
};

export default BioAcidoNucleicoEstruturaPage;
