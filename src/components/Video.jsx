const Video = ({ poster, src, cls }) => {
	return (
		<video
			className={cls}
			//poster={poster}
			width='320'
			height='320'
			loop
			controls
		>
			<source src={src} type='video/mp4' width={320} height={320} />
			Seu navegador não soporta a etiqueta de video.
		</video>
	);
};

export default Video;
