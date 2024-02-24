import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import NavContextProvider from "@/components/context/NavContext";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata = {
	title: "BioqApp",
	description: "Application for teaching Biochemistry",
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt' suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased overflow-x-hidden",
					fontSans.variable
				)}
			>
				<link rel='icon' href='/favicons/favicon.ico' sizes='any' />
				<NavContextProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
						<Footer />
					</ThemeProvider>
				</NavContextProvider>
			</body>
		</html>
	);
}
