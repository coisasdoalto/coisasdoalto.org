"use client";

import type { PropsWithChildren } from "react";

import Link from "next/link";

import {
	Breadcrumbs,
	Button,
	Container,
	Flex,
	AppShell as MantineAppShell,
	useMantineColorScheme,
	useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { BackToTopButton } from "../BackToTopButton";
import { DarkModeToggle } from "./DarkModeToggle";

export default function AppShell({ children }: PropsWithChildren) {
	const theme = useMantineTheme();
	const { colorScheme } = useMantineColorScheme();
	const [opened, { toggle, close }] = useDisclosure();

	return (
		<MantineAppShell
			styles={{
				main: {
					background:
						colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			/* aside={{
				width: 300,
				breakpoint: "md",
				collapsed: { desktop: false, mobile: true },
			}} */
			header={{
				height: { base: 50, md: 70 },
			}}
			/* navbar={{
				breakpoint: "sm",
				width: 300,
				collapsed: { mobile: !opened },
			}} */
		>
			<MantineAppShell.Header p="md">
				<Flex h="100%" align="center" justify="center">
					<Breadcrumbs style={{ marginRight: "auto" }}>
						<Button variant="subtle" component={Link} href="/">
							Coisas do Alto
						</Button>
					</Breadcrumbs>

					<DarkModeToggle />
				</Flex>
			</MantineAppShell.Header>

			{/* <MantineAppShell.Navbar p="md">
				<VerticalNavigation onNavigation={close} />
			</MantineAppShell.Navbar> */}

			<MantineAppShell.Main>
				<Container pt="md">{children}</Container>
				<BackToTopButton />
			</MantineAppShell.Main>
		</MantineAppShell>
	);
}
