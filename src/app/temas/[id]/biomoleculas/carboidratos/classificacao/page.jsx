import Image from "next/image";
import Monossacarideos from "../../../../../../../public/tematicas/tema2/carboidratos/monossacarideos.png";
import Dissacarideos from "../../../../../../../public/tematicas/tema2/carboidratos/dissacarideos.png";

const BioCarboidratosClassifPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16 '>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center '>
				Classificação dos hidratos de carbono
			</h1>
			<div className='mt-2 '>
				<p className='mb-2'>
					Estes podem ser classificados, de acordo com o número de moléculas que
					são produzidas em sua hidrólise.
				</p>

				<div className='w-[80%] mx-auto overflow-x-auto'>
					<table className=''>
						<thead className=''>
							<tr>
								<th className='border border-solid border-white '>
									Tipos de carboidratos
								</th>
								<th className='border border-solid border-white'>
									Características
								</th>
								<th className='border border-solid border-white '>Exemplo</th>
							</tr>
						</thead>
						<tbody>
							<tr className=''>
								<td className='border border-solid border-white'>
									Monossacarídeos
								</td>
								<td>
									Carboidratos simples que atuam como blocos (monômeros) a
									partir dos quais serão formados os outros carboidratos mais
									complexos, como os dissacarídeos e os polissacarídeos. Os
									monossacarídeos podem ser classificados de acordo com a cadeia
									principal de carbono{" "}
								</td>
								<td className='border border-solid border-white'>
									Glicose, galactose e frutose.{" "}
									<Image
										src={Monossacarideos}
										alt=''
										width={`full`}
										height={`auto`}
										priority={true}
									/>
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									Dissacarídeos
								</td>
								<td className='border border-solid border-white'>
									Carboidratos formados por dois monossacarídeos por meio de
									ligações glicosídicas.
								</td>
								<td className='border border-solid border-white'>
									Sacarose (formada por glicose e frutose), maltose (formada por
									duas moléculas de glicose) e lactose (formada por glicose e
									galactose).
									<Image
										src={Dissacarideos}
										alt=''
										width={`full`}
										height={`auto`}
										priority={true}
									/>
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									Polissacarídeos
								</td>
								<td className='border border-solid border-white'>
									Carboidratos complexos formados por vários monossacarídeos
									unidos entre si por ligações glicosídicas.
								</td>
								<td className='border border-solid border-white'>
									Amido, celulose e glicogênio
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<h2 className='my-3 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
						Carboidratos simples e complexos
					</h2>
					<p className='mb-2'>
						Os carboidratos podem ser classificados em simples e complexos. Os
						carboidratos simples são facilmente absorvidos pelo nosso corpo,
						enquanto os complexos apresentam um processo de absorção mais
						demorado. De acordo com a Sociedade Brasileira de Diabetes, os
						carboidratos simples são formados por açúcares simples ou por um par
						deles, enquanto os complexos são formados por cadeias mais complexas
						de açúcares.
					</p>
					<p className='mb-2'>
						São exemplos de alimentos que possuem carboidratos simples o mel, a
						rapadura, balas e doces em geral. Como exemplo de alimentos que
						possuem carboidratos complexos, podemos citar pães, massas, feijões
						e lentilha.
					</p>
				</div>
			</div>
		</main>
	);
};

export default BioCarboidratosClassifPage;
