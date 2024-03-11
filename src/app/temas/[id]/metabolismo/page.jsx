import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Wheat } from "lucide-react";
import Link from "next/link";
import { FaArrowRight, FaFileWord, FaInfo } from "react-icons/fa";
import { GiAcid, GiMinerals } from "react-icons/gi";
import { MdOilBarrel } from "react-icons/md";
import { SiMoleculer } from "react-icons/si";

const MetabolismoPage = () => {
	return (
		<main className='py-16 px-1 lg:w-4/5 lg:mx-auto'>
			<Accordion type='single' collapsible className='w-full '>
				<AccordionItem value='item-1' className='bg-accordion shadow-sm '>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<FaInfo className='text-lg font-bold ml-3' />
							<h2 className='text-xl font-bold'>introdução</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a
							href={`/tematicas/tema4/intro/introducción_metabolismo.docx`}
							download
						>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Descarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/intro`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Introdução</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/intro/vias`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Vias metabolicas</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/intro/funcoes`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Funções</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/intro/rotas`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Rotas</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/intro/energetico`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Metabolismo energético</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/intro/basal`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Metabolismo basal</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/intro/digestao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Digestão</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value='item-2'
					className='bg-accordion-purple  shadow-sm '
				>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<SiMoleculer className='text-lg font-bold ml-3' />
							<h2 className='text-xl font-bold'>proteínas</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a
							href={`/tematicas/tema4/proteinas/Metabolismo_de_Proteinas.docx`}
							download
						>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/proteinas/m_proteinas`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Metabolismo das proteínas</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/proteinas/destino`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Destino e transporte de aminoácidos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/proteinas/sintesis`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Síntesis de aminoácidos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/proteinas/catabolismo`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Catabolismo de aminoácidos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/proteinas/disturbios`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Distúrbios metabólicos do ciclo da ureia</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3' className='bg-accordion-blue shadow-sm '>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<Wheat className='h-[18px] font-bold ml-3' />
							<h2 className='text-xl font-bold'>carboidratos</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a
							href={`/tematicas/tema4/carboidratos/Metabolismo_de_carboidratos.docx`}
							download
						>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Descarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/carboidratos/m_carboidratos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Metabolismo de carboidratos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/carboidratos/disturbios`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Distúrbios do metabolismo de carboidratos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/carboidratos/galactosemia`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Galactosemia</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/carboidratos/diabetes`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Diabetes Mellitus</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4' className='bg-primary shadow-sm'>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<MdOilBarrel className='text-lg font-bold ml-3' />
							<h2 className='text-xl font-bold'>lipídios</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a href={`/tematicas/tema4/lipidos/Lipidos.docx`} download>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/m_lipidico`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Metabolismo Lipídico</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/tipos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Tipos de Lipídios</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/digestao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Digestão</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/absorcao`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Absorção</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/transporte`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Transporte</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/sintese`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Síntese e Decomposição de lípidos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/disturbios`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Distúrbios do metabolismo de lípidos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/dislipidemia`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dislipidemia</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/4/metabolismo/lipidios/aterosclerose`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Aterosclerose</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
};

export default MetabolismoPage;
