import Nav from "@/components/Nav";

const Header = () => {
	return (
		<header className='fixed top-0 left-0 z-[999] flex items-center w-full h-16 bg-primary-foreground p-1 shadow'>
			<Nav />
		</header>
	);
};

export default Header;
