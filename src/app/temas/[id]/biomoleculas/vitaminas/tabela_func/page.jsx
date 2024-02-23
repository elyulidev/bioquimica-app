import Image from "next/image";
import Vitaminas from "../../../../../../../public/tematicas/tema2/vitaminas/vitaminas.webp";

const BioVitaminasTabelaPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Fontes, funções e doenças por sua deficiência
			</h1>
			<div className='mt-2'>
				<Image
					src={Vitaminas}
					alt=''
					width={`full`}
					height={`auto`}
					priority={true}
				/>
				<div className='w-[80%] mx-auto mt-2 overflow-x-auto '>
					<table className='mb-2'>
						<thead className=''>
							<tr>
								<th className='border border-solid border-white '>Vitaminas</th>
								<th className='border border-solid border-white'>Fontes</th>
								<th className='border border-solid border-white '>
									Funções no organismo
								</th>
								<th className='border border-solid border-white '>Doenças</th>
							</tr>
						</thead>
						<tbody>
							<tr className=''>
								<td className='border border-solid border-white'>
									A (retinol)
								</td>
								<td className='border border-solid border-white'>
									Hortaliças de coloração verde-escuro; vegetais de coloração
									alaranjada; leite e derivados; fígado, gema de ovo e óleo.
								</td>
								<td className='border border-solid border-white'>
									Apresenta importante papel na visão, atua na manutenção de
									tecidos epiteliais e imunidade.
								</td>
								<td className='border border-solid border-white'>
									Problemas de visão, alterações na pele e alteração na
									imunidade.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									D (calciferol)
								</td>
								<td className='border border-solid border-white'>
									Leite e derivados; salmão; e gemas de ovo.
								</td>
								<td className='border border-solid border-white'>
									Participa da absorção e utilização de dois sais importantes: o
									cálcio e o fósforo.
								</td>
								<td className='border border-solid border-white'>
									Raquitismo (problema de saúde que desencadeia amolecimento e
									fragilidade de ossos e, em crianças, causa deformações ósseas)
									e osteoporose.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									E (tocoferol)
								</td>
								<td className='border border-solid border-white'>
									Óleos vegetais; nozes; gérmen de trigo, fígado e vegetais de
									folhas verdes.
								</td>
								<td className='border border-solid border-white'>
									Atua como antioxidante.
								</td>
								<td className='border border-solid border-white'>
									Problemas no sistema nervoso.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									K (filoquinona)
								</td>
								<td className='border border-solid border-white'>
									Hortaliças verdes; gema de ovo, óleo de soja, fígado, também é
									produzida por bactérias presentes no intestino.
								</td>
								<td className='border border-solid border-white'>
									Possui importante papel na coagulação sanguínea.
								</td>
								<td className='border border-solid border-white'>
									Alterações na coagulação sanguínea.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B1 (tiamina)
								</td>
								<td className='border border-solid border-white'>
									Carne de porco; legumes; vegetais folhosos; e grãos integrais.
								</td>
								<td className='border border-solid border-white'>
									Atua como coenzima usada na remoção de gás carbônico de
									compostos orgânicos. Importante na manutenção do funcionamento
									dos sistemas nervoso e circulatório.
								</td>
								<td className='border border-solid border-white'>
									Beribéri (problema de saúde que desencadeia sintomas como
									fraqueza, formigamento, dor nos membros, falta de ar e inchaço
									dos membros).
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B2 (riboflavina)
								</td>
								<td className='border border-solid border-white'>
									Carnes; grãos integrais; hortaliças; leite e derivados.
								</td>
								<td className='border border-solid border-white'>
									Faz parte das coenzimas FAD e FMN. Está relacionada com a
									manutenção da pele.
								</td>
								<td className='border border-solid border-white'>
									Lesões na pele.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B3 (niacina)
								</td>
								<td className='border border-solid border-white'>
									Carnes; ovos; vegetais folhosos; grãos; e nozes.
								</td>
								<td className='border border-solid border-white'>
									É um componente das coenzimas NAD+ e NADP+. Ajuda no
									funcionamento do sistema nervoso e imunológico.
								</td>
								<td className='border border-solid border-white'>
									Lesões gastrointestinais e na pele, e confusão mental.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B5 (ácido pantotênico)
								</td>
								<td className='border border-solid border-white'>
									Carnes; hortaliças; grãos integrais; frutas; e leite e
									derivados.
								</td>
								<td className='border border-solid border-white'>
									Componente da coenzima A. Relaciona-se com a formação de
									hemácias e previne a degeneração de cartilagens.
								</td>
								<td className='border border-solid border-white'>
									Formigamentos, dormência e fadiga.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B6 (piridoxina)
								</td>
								<td className='border border-solid border-white'>
									Carnes; grãos integrais; nozes; e hortaliças.
								</td>
								<td className='border border-solid border-white'>
									É uma coenzima utilizada no metabolismo de aminoácidos. Ajuda
									na manutenção do sistema nervoso central e imunológico.
								</td>
								<td className='border border-solid border-white'>
									Irritabilidade, anemia e espasmos musculares.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B7 (biotina)
								</td>
								<td className='border border-solid border-white'>
									Hortaliças; ovos; e carnes.
								</td>
								<td className='border border-solid border-white'>
									Atua como coenzima na síntese de gordura, aminoácidos e
									glicogênio. Auxilia na produção de ácidos graxos e redução dos
									níveis de glicose no sangue.
								</td>
								<td className='border border-solid border-white'>
									Pele com escamações e problemas neuromusculares.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B9 (ácido fólico)
								</td>
								<td className='border border-solid border-white'>
									Hortaliças verde; nozes; legumes; e grãos integrais.
								</td>
								<td className='border border-solid border-white'>
									Atua como coenzima no metabolismo de ácidos nucleicos e
									aminoácidos. Atua na manutenção do sistema imunológico,
									nervoso e circulatório.
								</td>
								<td className='border border-solid border-white'>
									Anemia e problemas congênitos.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									B12 (cobalamina)
								</td>
								<td className='border border-solid border-white'>
									Carnes; leite; e derivados e ovos.
								</td>
								<td className='border border-solid border-white'>
									Participa da produção dos ácidos nucleicos e das hemácias. Age
									também sobre as células nervosas e no equilíbrio hormonal.
								</td>
								<td className='border border-solid border-white'>
									Dormência, alterações neurológicas, anemia e perca de
									equilíbrio.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									C (ácido ascórbico)
								</td>
								<td className='border border-solid border-white'>
									Brócolis; frutas; e tomate.
								</td>
								<td className='border border-solid border-white'>
									Importante na síntese de colágeno, manutenção e integridade
									das paredes capilares, e atua como antioxidante.
								</td>
								<td className='border border-solid border-white'>
									Escorbuto (doença que causa sangramentos nas gengivas,
									fraqueza e irritação na pele) e dificuldade de regeneração de
									feridas.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};

export default BioVitaminasTabelaPage;
