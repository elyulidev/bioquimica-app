import MobileNav from "./MobileNav";

const Footer = () => {
	return (
		<footer className='w-full fixed bottom-0 left-0 z-[999] bg-primary-foreground shadow'>
			<MobileNav />
			<p className='text-center text-xs text-primary p-1'>
				Copyright &copy; 2024 - <span className='font-bold'>BioqApp</span> por{" "}
				<span className='font-bold'>@elyulidev</span>
			</p>
		</footer>
	);
};

export default Footer;
