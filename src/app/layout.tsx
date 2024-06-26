import type { ReactNode } from "react";

import type { Metadata } from "next";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import dynamic from "next/dynamic";

import { theme } from "~/theme";

import { HOME_OG_IMAGE_URL } from "~/lib/constants";

import "@mantine/core/styles.css";

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
			</head>
			<body>
				<MantineProvider theme={theme}>
					<AppShell>{children}</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
