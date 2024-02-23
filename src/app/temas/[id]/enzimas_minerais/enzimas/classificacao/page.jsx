const EnzimaClassifPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Classificação das enzimas
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					As enzimas podem ser classificadas em seis grupos, utilizando-se como
					critério o tipo de reação que catalisam.
				</p>
				<ul className='list-disc ml-4'>
					<li className='mb-2 font-semibold'>
						Oxidoredutases: enzimas relacionadas com as reações de oxirredução.
					</li>
					<li className='mb-2 font-semibold'>
						Transferases: catalisam a transferência de grupos de um composto
						para outro.
					</li>
					<li className='mb-2 font-semibold'>
						Hidrolases: catalisam reações de hidrólise.
					</li>
					<li className='mb-2 font-semibold'>
						Liases: atuam na adição de grupos a ligações duplas ou remoção de
						grupos formando uma ligação dupla.
					</li>
					<li className='mb-2 font-semibold'>
						Isomerases: catalisam reações de isomerização.
					</li>
					<li className='mb-2 font-semibold'>
						Ligases: enzimas que provocam a degradação da molécula de ATP,
						usando a energia liberada nessa reação para a formação de novos
						compostos.
					</li>
				</ul>
			</div>
		</main>
	);
};

export default EnzimaClassifPage;
