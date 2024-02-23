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

const BioPage = () => {
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
						<a href={`/tematicas/tema2/Biomoleculas.docx`} download>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/intro`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Introdução</h2>
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
						<a href={`/tematicas/tema2/proteinas/Proteinas.docx`} download>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/estruturas`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Estruturas</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/classificacao`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Classificação</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/funcao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Funções</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/aminoacidos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Aminoácidos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/ligacao_peptidica`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Ligação peptídica</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/peptideos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Peptídeos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/valor_bio`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Valor Biológico</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/desnaturacao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Desnaturação</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/proteinas/fontes`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Fontes</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3' className='bg-accordion-blue  shadow-sm '>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<GiAcid className='text-lg font-bold ml-3' />
							<h2 className='text-xl font-bold'>ácidos nucleicos</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a
							href={`/tematicas/tema2/nucleotidos/Nucleotidos_acidos_nucleicos.docx`}
							download
						>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/acidos_nucleicos/estruturas`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Estruturas</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />

						<Link href={`/temas/2/biomoleculas/acidos_nucleicos/funcao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Funções</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/acidos_nucleicos/diferencas`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Diferenças</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4' className='bg-primary shadow-sm '>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<Wheat className='h-[18px] font-bold ml-3' />
							<h2 className='text-xl font-bold'>carboidratos</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a
							href={`/tematicas/tema2/carboidratos/Carboidratos.docx`}
							download
						>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/carboidratos/funcao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Funções</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/carboidratos/classificacao`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Classificação</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/carboidratos/exemplos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Exemplos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/carboidratos/fontes`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Fontes</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link
							href={`/temas/2/biomoleculas/carboidratos/ligacao_glicosidica`}
						>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Ligação Glicosídica</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/carboidratos/fibra_dietetica`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Fibra Dietética</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value='item-5'
					className='bg-accordion-blue-green  shadow-sm '
				>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<MdOilBarrel className='text-lg font-bold ml-3' />
							<h2 className='text-xl font-bold'>lipídios</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a href={`/tematicas/tema2/lipidos/Lipidos.docx`} download>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/lipidios/estruturas`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Estruturas</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/lipidios/funcao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Funções</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/lipidios/classificacao`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Classificação</h2>
								<FaArrowRight />
							</div>
						</Link>

						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/lipidios/acidos_gordos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Ácidos gordos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/lipidios/exemplos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Exemplos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/lipidios/fontes`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Fontes</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/lipidios/ranciosidades`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Ranciosidades das grasas</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value='item-6'
					className='bg-accordion-green-blue  shadow-sm '
				>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<GiMinerals className='text-lg font-bold ml-3' />
							<h2 className='text-xl font-bold'>vitaminas</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a href={`/tematicas/tema2/vitaminas/Vitaminas.docx`} download>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/vitaminas/classificacao`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Classificação</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/vitaminas/estruturas`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Estruturas</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/2/biomoleculas/vitaminas/tabela_func`}>
							<div className='flex justify-between items-center px-4 pt-1 '>
								<h2>Tabela das funções e doenças</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
};

export default BioPage;
