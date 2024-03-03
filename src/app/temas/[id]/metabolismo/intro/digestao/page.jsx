import Image from "next/image";
import Digestao from "../../../../../../../public/tematicas/tema4/intro/digestao.webp";

const MetabolismoBasalPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Digestão
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					A digestão é o processo de decompor os alimentos em nutrientes e é um
					exemplo de processo catabólico.
				</p>
				<p className='mb-2'>
					Existem dois tipos de digestão, mecânica e química.
				</p>
				<p className='mb-2'>
					O processo digestivo visa absorver proteínas, carboidratos e lipídios
					dos alimentos para nos nutrir e nos manter com energia.
				</p>
				<p className='mb-2'>
					As partes do sistema digestivo são a boca, faringe (garganta),
					esôfago, estômago, intestino delgado, intestino grosso, reto e ânus.
				</p>
				<Image
					src={Digestao}
					alt=''
					width={300}
					height={`auto`}
					priority={true}
					className='mb-3 mx-auto'
					style={{ aspectRatio: "64/55" }}
				/>
				<div className='w-[80%] mx-auto overflow-x-auto'>
					<p className='mb-2 text-center'>Termos chave</p>
					<table className='mb-3'>
						<thead className=''>
							<tr>
								<th className='border border-solid border-white '>Termo</th>
								<th className='border border-solid border-white'>
									Significado
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className=''>
								<td className='border border-solid border-white'>
									Sistema digestivo.
								</td>
								<td className='border border-solid border-white'>
									O sistema do corpo que converte alimentos em energia e
									nutrientes para abastecer o corpo.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									digestão química.
								</td>
								<td className='border border-solid border-white'>
									A decomposição dos alimentos por agentes químicos, como
									enzimas e bile.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									digestão mecânica.
								</td>
								<td className='border border-solid border-white'>
									A decomposição dos alimentos por meios físicos, como a
									mastigação.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>Absorção.</td>
								<td className='border border-solid border-white'>
									O processo pelo qual os nutrientes passam através das paredes
									do sistema digestivo para o sangue.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>
									sistema excretor.
								</td>
								<td className='border border-solid border-white'>
									O sistema do corpo que remove os resíduos metabólicos do
									corpo.
								</td>
							</tr>
							<tr className=''>
								<td className='border border-solid border-white'>Excreção.</td>
								<td className='border border-solid border-white'>
									O processo de remoção de resíduos e excesso de água do corpo.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className='mb-2'>
					A digestão começa quando o alimento entra na boca (cavidade oral).
					Tanto a digestão mecânica quanto a química ocorrem aqui. Os dentes
					trituram e decompõem os alimentos (mecanicamente), enquanto uma enzima
					na saliva chamada amilase começa a decompor os carboidratos (química).
				</p>
				<p className='mb-2'>
					Uma vez engolido, o alimento mastigado (agora chamado de bolo
					alimentar) passa para o esôfago. O esôfago é uma conexão entre a boca
					e o estômago, mas não há digestão aqui.
				</p>
				<p className='mb-2'>
					O bolo chega ao estômago, onde a digestão mecânica e química continua.
					Os músculos nas paredes do estômago agitam o bolo alimentar
					(mecânica), permitindo que as enzimas digestivas e os ácidos
					estomacais se misturem (química). Esse processo transforma o bolo
					alimentar em um líquido chamado quimo.
				</p>
				<p className='mb-2'>
					A digestão continua no estômago por várias horas. Durante esse tempo,
					uma enzima chamada pepsina quebra a maior parte da proteína do
					alimento.
				</p>
				<p className='mb-2'>
					O quimo é lentamente transportado para o intestino delgado, onde
					ocorre a maior parte da digestão química. A bile, produzida no fígado,
					é liberada da vesícula biliar para ajudar a digerir as gorduras. Além
					disso, as enzimas do pâncreas e das paredes intestinais combinam-se
					com o quimo para iniciar a parte final da digestão.
				</p>
				<p className='mb-2'>
					A absorção de nutrientes ocorre principalmente no intestino delgado.
					Os nutrientes são absorvidos através de suas paredes para o sistema
					circulatório e, quando o quimo deixa o intestino delgado, apenas água
					e material indigerível permanecem.
				</p>
				<p className='mb-2'>
					O quimo entra no intestino grosso. Aqui a água é removida, enquanto as
					bactérias decompõem alguns dos materiais indigeríveis e produzem
					compostos importantes (como a vitamina K). Os resíduos concentrados
					são conhecidos como fezes e passam para o reto para serem eliminados
					do corpo pelo ânus.
				</p>
			</div>
		</main>
	);
};

export default MetabolismoBasalPage;
