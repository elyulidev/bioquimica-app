import Image from "next/image";

import Diabetes from "../../../../../../../public/tematicas/tema4/carboidratos/diabetes.webp";

const MetabolismoCarboidratosDiabetesPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Diabetes Mellitus
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					O Diabetes Mellitus, consequência da produção inadequada de insulina
					ou anormalidades dos receptores, é um distúrbio metabólico
					generalizado no qual a glicose não consegue atingir ou ser utilizada
					adequadamente pelas células. É por isso que o sinal cardinal desse
					distúrbio é a HIPERGLICEMIA.
				</p>
				<p className='mb-2'>
					A diabetes mellitus é causada por problemas na secreção da insulina ou
					na ação desse hormônio. A diabetes mellitus tipo 1 é desencadeada pela
					destruição das células do pâncreas responsáveis pela produção de
					insulina. Nesse caso, percebemos a ocorrência de um problema
					autoimune, ou seja, as células do pâncreas são atacadas pelo sistema
					imune do próprio paciente. Já na diabetes mellitus tipo 2, o que se
					verifica é um problema na secreção ou ação da insulina. A diabetes
					tipo 2 geralmente acontece em pessoas com sobrepeso ou obesidade. A
					diabetes gestacional, por sua vez, não possui causa bem esclarecida.
				</p>
				<p className='mb-2 font-extrabold'>Tipos de diabetes</p>
				<p className='mb-2'>
					Entre os vários tipos de diabetes, podemos destacar:
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>
						Diabetes tipo 1: é uma doença autoimune, isto é, o sistema
						imunitário (sistema de defesa) ataca e destrói as próprias células
						do pâncreas, onde a insulina é produzida. Assim, o pâncreas deixa de
						produzir a insulina corretamente.
						<br />
						Assim, nas pessoas com diabetes tipo 1 é necessário administrar
						insulina diariamente, sendo este tipo de doença, por vezes,
						denominada de diabetes insulino-dependente.
					</li>
					<li>
						Diabetes tipo 2: é a forma mais frequente da doença e ocorre quando
						o corpo se torna resistente à insulina produzida, provocando o
						aumento da glicose no sangue. <br />
						Ao contrário da diabetes tipo 1, o pâncreas continua a produzir
						insulina, contudo, as células não respondem de forma eficaz, ou
						seja, neste caso a glicose também não é processada normalmente,
						acumulando-se na corrente sanguínea.
					</li>
					<li>
						Diabetes gestacional: ocorre quando existe uma grande quantidade de
						glicose no sangue, durante a gravidez. O aumento da glicose no
						sangue ocorre devido à presença de hormonas produzidas na placenta
						que interferem com o funcionamento da insulina. <br />
						Este tipo de diabetes não ocorre em todas as mulheres e, geralmente,
						resolve-se de forma espontânea, após o parto. As mulheres com
						diabetes gestacional têm risco aumentado de no futuro desenvolverem
						diabetes tipo 2.
					</li>
					<li>
						Pré-diabetes: ocorre quando os níveis de glucose no sangue são
						altos, mas não o suficiente para ser diagnosticado como diabetes
						tipo 2. <br />
						Estes doentes devem tomar diversas medidas preventivas, conforme
						abordaremos adiante, e necessitam de vigilância para que o
						diagnóstico de diabetes seja efetuado de forma atempada.
					</li>
					<li>
						Diabetes infantil (em crianças)
						<br />
						Tal como acontece nos adultos, as crianças podem desenvolver
						diabetes tipo 1 (e mais raramente tipo 2), sendo, portanto, também
						importante controlar os níveis de “açúcar” no sangue nos mais
						jovens.
					</li>
					<li>
						Diabetes tipo 1 em crianças - O tipo autoimune de diabetes começa
						frequentemente na infância. Um dos primeiros sintomas é o aumento da
						micção (vontade súbita de urinar) o que leva as crianças
						frequentemente a urinar na cama, devendo os pais estar atentos a
						este fenómeno e consultar o médico em caso de dúvidas.
					</li>
					<li>
						Diabetes tipo 2 em crianças - A diabetes tipo 2 costumava ser rara
						em crianças, no entanto, atualmente, o aumento do número de casos de
						obesidade (excesso de peso) infantil levou, consequentemente, ao
						aumento significativo da diabetes tipo 2 em crianças.
					</li>
				</ul>
				<p className='mb-2 font-extrabold'>Sintomas da diabetes mellitus</p>
				<p className='mb-2'>
					A diabetes mellitus desencadeia a chamada hiperglicemia, que causa o
					aumento dos níveis de glicose no sangue. A hiperglicemia manifesta
					como sintomas:A diabetes mellitus desencadeia a chamada hiperglicemia,
					que causa o aumento dos níveis de glicose no sangue. A hiperglicemia
					manifesta como sintomas:
				</p>
				<ul className='list-disc ml-4 font-semibold mb-2'>
					<li>Produção de urina em excesso (poliúria);</li>
					<li>
						Volume de eliminação de urina maior no período noturno que no diurno
						(nictúria);
					</li>
					<li>Perda de peso;</li>
					<li>Fome excessiva (polifagia);</li>
					<li>Sede excessiva (polidipsia);</li>
					<li>Boca seca;</li>
					<li>Fraqueza;</li>
					<li>Visão turva.</li>
				</ul>
				<p className='mb-2'>Diagnóstico</p>

				<p className='mb-2'>
					Para realizar o diagnóstico correto de diabetes mellitus, é necessário
					analisar os sintomas e realizar alguns exames para confirmar as
					suspeitas. Os exames recomendados são: glicemia de jejum, teste oral
					de tolerância à glicose (TTG-75) e glicemia casual.
				</p>
				<div className='mt-2'>
					<table className='border border-solid border-white'>
						<tbody className='border border-solid border-white'>
							<tr>
								<td className='border border-solid border-white'>
									Pré-diabetes
								</td>
								<td className='border border-solid border-white'>
									Glicemia de jejum entre 101 mg/dl e 125 mg/dl.
								</td>
							</tr>
							<tr>
								<td className='border border-solid border-white'>
									Diabetes tipo 1 e tipo 2
								</td>
								<td className='border border-solid border-white'>
									<ul>
										<li className='mb-2'>
											Glicemia de jejum maior ou igual a 126 mg/dl em mais de
											uma ocasião.
										</li>
										<li className='mb-2'>
											Glicemia maior ou igual a 200 mg/dl após duas horas de uma
											carga de 75 g de glicose.
										</li>
										<li>
											Glicemia casual maior ou igual a 200 com a presença de
											sintomas.
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td className='border border-solid border-white'>
									Diabetes gestacional
								</td>
								<td className='border border-solid border-white'>
									<ul>
										<li className='mb-2'>
											Glicemia de jejum maior ou igual a 110 mg/dl em mais de
											uma ocasião.
										</li>
										<li>
											Glicemia maior ou igual a 140 mg/dl após duas horas de uma
											carga de 75 g de glicose.
										</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p className='mb-2 mt-2'>Tratamento de diabetes mellitus</p>

				<p className='mb-2'>
					A diabetes mellitus, em suas diferentes formas, apresenta tratamento
					voltado para o controle dos níveis de glicose no sangue e para evitar
					complicações. Entre as principais recomendações médicas, está uma
					dieta saudável e com quantidade de carboidratos reduzida. Além da
					dieta, é importante a realização de exercícios físicos. Alguns
					pacientes, além de controlar a alimentação, devem fazer uso da
					insulina. A frequência da aplicação do hormônio varia de pessoa para
					pessoa e deve ser avaliada pelo médico.
				</p>

				<Image
					src={Diabetes}
					alt=''
					width={300}
					style={{ aspectRatio: "300/217" }}
					className='mx-auto mb-2'
				/>
				<p className='mb-2'>
					Desse modo, podemos concluir que a diabetes mellitus pode ser
					extremamente grave se não tratada adequadamente. Entretanto, um
					acompanhamento correto pode fazer com que complicações sejam evitadas
					e o paciente tenha uma vida normal.
				</p>
			</div>
		</main>
	);
};

export default MetabolismoCarboidratosDiabetesPage;
