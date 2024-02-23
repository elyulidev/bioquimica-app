const BioProtDesnaturacaoPage = () => {
	return (
		<main className='w-4/5 mx-auto py-16'>
			<h1 className='my-2 sm:my-3 md:my-4 lg:my-5 text-card-foreground font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Desnaturação das proteínas
			</h1>
			<div className='mt-2'>
				<p className='mb-2'>
					A desnaturação de proteínas ocorre quando a estrutura tridimensional
					da proteína é alterada, o que pode levar à perda da sua atividade
					biológica. Isso geralmente ocorre quando as proteínas são expostas a
					condições extremas de pH, temperatura ou presença de substâncias
					químicas.Isso afeta os níveis secundário, terciário, quaternário,
					devido à ruptura ou modificação dos elos que os estabilizam; não afeta
					o nível primário, pois as ligações peptídicas permanecem inalteradas.
				</p>
				<p className='mb-2'>
					Geralmente, esse processo leva à perda da atividade biológica das
					proteínas, bem como à alteração de suas propriedades físicas e
					químicas.
				</p>
				<p className='mb-2'>
					<ul>
						<li>
							<span className='font-bold'>Agentes Desnaturantes: </span>
							Estes podem ser de 2 tipos.
						</li>
						<li>
							<span className='font-bold'>Físico: </span> Calor, radiação
							ultravioleta, ultrassom, agitação energética e raios x e gama.
						</li>
						<li>
							<span className='font-bold'>Produtos químicos: </span> produtos
							químicos como ácidos e bases fortes, uréia, guanidina ,
							detergentes, sais de metais pesados, mercaptoetanol e ácido
							perfórmico .
						</li>
					</ul>
				</p>
				<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Importância Biológica:
				</h2>
				<p className='mb-2'>
					A desnaturação é importante porque as enzimas proteolíticas realizam
					sua ação mais eficaz nas proteínas desnaturadas, portanto, os
					alimentos proteicos devem ser cozidos para facilitar a digestão. Além
					disso, numerosos agentes antimicrobianos como (calor, raios
					ultravioleta e agentes desinfetantes como o álcool) baseiam sua ação,
					pelo menos em parte, na desnaturação que produzem. Também o efeito é
					útil na fixação de proteínas para estudos histológicos, estruturais e
					funcionais.
				</p>
				<h2 className='my-2 text-card-foreground font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center'>
					Renaturação
				</h2>
				<p className=''>
					É um processo reversível que ocorre quando os agentes causadores da
					desnaturação são eliminados, como a ação da uréia e da guanidina ; o
					que evita interações entre cadeias e mantém as mesmas em solução.
				</p>

				<p className=''>
					Se o agente causar precipitação, o processo geralmente é irreversível.
				</p>
				<p className=''>
					Esse processo é importante porque a proteína recupera sua estrutura
					nativa e com ela sua atividade catalítica.
				</p>
			</div>
		</main>
	);
};

export default BioProtDesnaturacaoPage;
