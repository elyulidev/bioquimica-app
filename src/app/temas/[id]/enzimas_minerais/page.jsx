import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { TestTube2 } from "lucide-react";
import Link from "next/link";
import { FaArrowRight, FaFileWord } from "react-icons/fa";
import { GiMineWagon } from "react-icons/gi";

const EnzMinPage = () => {
	return (
		<main className='py-16 px-1'>
			<Accordion type='single' collapsible className='w-full '>
				<AccordionItem value='item-1' className='bg-accordion shadow-sm '>
					<AccordionTrigger className=' hover:no-underline'>
						<div className='flex items-center gap-2 text-card-foreground'>
							<TestTube2 className='h-[18px] font-bold ml-3' />
							<h2 className='text-xl font-bold'>enzimas</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a href={`/tematicas/tema3/enzimas/Enzima.docx`} download>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/enzimas/intro`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Introdução</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/enzimas/classificacao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Classificação</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/enzimas/fatores`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Fatores</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/enzimas/exemplos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Exemplos</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/enzimas/cofatores`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Cofatores</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value='item-2'
					className='bg-accordion-purple shadow-sm '
				>
					<AccordionTrigger className=' hover:no-underline '>
						<div className='flex items-center gap-2 text-card-foreground'>
							<GiMineWagon className='h-[18px] font-bold ml-3' />
							<h2 className='text-xl font-bold'>minerais</h2>
						</div>
					</AccordionTrigger>
					<AccordionContent className='bg-accordion-blue-soft'>
						<a href={`/tematicas/tema3/minerais/Minerales.docx`} download>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Dercarga</h2>
								<FaFileWord />
							</div>
						</a>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/minerais/intro`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Introdução</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/minerais/classificacao`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Classificação</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/minerais/fontes_funcoes`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Fontes-Funções</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/minerais/estresse`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Estresse oxidativo e antioxidantes</h2>
								<FaArrowRight />
							</div>
						</Link>
						<Separator className='my-1' />
						<Link href={`/temas/3/enzimas_minerais/minerais/compostos`}>
							<div className='flex justify-between items-center px-4 pt-1'>
								<h2>Compostos antioxidantes</h2>
								<FaArrowRight />
							</div>
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
};

export default EnzMinPage;
