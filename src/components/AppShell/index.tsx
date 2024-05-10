"use client";

import type { PropsWithChildren } from "react";

import {
	Breadcrumbs,
	Burger,
	Button,
	Container,
	Flex,
	AppShell as MantineAppShell,
	useMantineColorScheme,
	useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

import { useDisclosure } from "@mantine/hooks";
import { DarkModeToggle } from "./DarkModeToggle";
import { VerticalNavigation } from "./VerticalNavigation";

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
			aside={{
				width: 300,
				breakpoint: "md",
				collapsed: { desktop: false, mobile: true },
			}}
			header={{
				height: { base: 50, md: 70 },
			}}
			navbar={{
				breakpoint: "sm",
				width: 300,
				collapsed: { mobile: !opened },
			}}
		>
			<MantineAppShell.Header p="md">
				<Flex h="100%" align="center" justify="center">
					<Burger
						opened={opened}
						onClick={toggle}
						size="sm"
						color={theme.colors.gray[6]}
						mr="xl"
						hiddenFrom="sm"
					/>

					<Breadcrumbs style={{ marginRight: "auto" }}>
						<Button variant="subtle" component={Link} href="/">
							Coisas do Alto
						</Button>
					</Breadcrumbs>

					<DarkModeToggle />
				</Flex>
			</MantineAppShell.Header>

			<MantineAppShell.Navbar p="md">
				<VerticalNavigation onNavigation={close} />
			</MantineAppShell.Navbar>

			<MantineAppShell.Main>
				<Container pt="md">{children}</Container>
			</MantineAppShell.Main>
		</MantineAppShell>
	);
}
