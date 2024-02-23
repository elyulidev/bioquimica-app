import Image from "next/image";
import FontesCarb from "../../../../../../../public/tematicas/tema2/carboidratos/fontes_de_carboidratos.webp";

const BioCarboidratosFontesPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Fontes de carboidratos
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					Os carboidratos são encontrados principalmente nos vegetais, já que
					são um dos produtos da fotossíntese. Entretanto, produtos de origem
					animal podem conter carboidratos, como o leite que possui o açúcar
					lactose.
				</p>
				<p className='mb-2'>
					Os carboidratos são um dos três grupos de macronutrientes, juntamente
					com proteínas e gorduras, que precisam ser inseridos na dieta, já que
					o organismo não os produz. Independente de sua fonte, a cada 1 g de
					carboidrato consumido são fornecidos 4,02 kcal.
				</p>
				<p className='mb-2'>
					Na alimentação, as calorias consumidas durante um dia devem
					corresponder a 55% a 65% de carboidratos. A quantidade diária
					recomendada é de 135 gramas. Essa ingestão varia se a pessoa sofre de
					doenças, como diabetes, ou apresenta outras condições, como gravidez.
				</p>
				<Image
					src={FontesCarb}
					alt=''
					width={`full`}
					height={`auto`}
					priority={true}
					className='mb-2'
				/>
				<p className='mb-2'>
					Entre as fontes de carboidratos simples mais populares, temos:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Açúcar.</li>
					<li className='mb-2 font-semibold'>Achocolatados.</li>
					<li className='mb-2 font-semibold'>Doces em geral.</li>
					<li className='mb-2 font-semibold'>
						Massas refinadas e instantâneas.
					</li>
					<li className='mb-2 font-semibold'>Refrigerantes.</li>
					<li className='mb-2 font-semibold'>Sorvetes.</li>
				</ul>
				<p className='mb-2'>
					As fontes de carboidratos complexos mais populares são:
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>Alimentos integrais.</li>
					<li className='mb-2 font-semibold'>Batata-doce.</li>
					<li className='mb-2 font-semibold'>
						Derivados da aveia (farinha, farelo e grãos).
					</li>
					<li className='mb-2 font-semibold'>Sementes.</li>
				</ul>
			</div>
		</main>
	);
};

export default BioCarboidratosFontesPage;
