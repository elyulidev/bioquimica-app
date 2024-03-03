import Image from "next/image";

const Card = ({ img, bgImg, aspectRatio, title, style }) => {
	return (
		<div
			className={`max-w-xs min-w-64 bg-card-foreground rounded-md shadow-sm border border-muted`}
		>
			{img ? (
				<Image
					src={img}
					alt=''
					width={320}
					height={320}
					priority={true}
					style={style}
				/>
			) : (
				<div
					className={`w-full max-h-80 ${bgImg} bg-cover`}
					style={{ aspectRatio }}
				></div>
			)}
			<div className='p-2'>
				<h2 className='text-card text-xl font-bold text-center mb-2'>
					{title}
				</h2>
			</div>
		</div>
	);
};

export default Card;
