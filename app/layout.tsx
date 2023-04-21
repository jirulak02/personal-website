import { Inter } from "next/font/google";

import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export type Children = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Children) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<Header />
				<main className="pt-16">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
