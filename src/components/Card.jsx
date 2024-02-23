import Image from "next/image";

const Card = ({ img, title, style }) => {
	return (
		<div className='max-w-xs bg-card-foreground rounded-md shadow-sm border border-muted bg-cover bg-no-repeat'>
			<Image
				src={img}
				alt=''
				width={320}
				height={320}
				priority={true}
				style={style}
			/>
			<div className='p-2'>
				<h2 className='text-card text-xl font-bold text-center mb-2'>
					{title}
				</h2>
			</div>
		</div>
	);
};

export default Card;
