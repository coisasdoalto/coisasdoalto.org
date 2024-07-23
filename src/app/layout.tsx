import type { ReactNode } from "react";

import type { Metadata } from "next";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import dynamic from "next/dynamic";

import { theme } from "~/theme";

import { HOME_OG_IMAGE_URL } from "~/lib/constants";

import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
	title: "Coisas do Alto",
	description: "Uma coletânea de artigos cristãos sobre as Coisas do Alto",
	openGraph: {
		images: [HOME_OG_IMAGE_URL],
	},
};

const AppShell = dynamic(() => import("~/components/AppShell"), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<head>
				<ColorSchemeScript />
				<link rel="shortcut icon" href="/favicon.svg" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<MantineProvider theme={theme}>
					<AppShell>{children}</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
