"use client";

import type { PropsWithChildren } from "react";

import Link from "next/link";

import {
	Anchor,
	Burger,
	Flex,
	Group,
	AppShell as MantineAppShell,
	useMantineColorScheme,
	useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { BackToTopButton } from "../BackToTopButton";
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
			/* aside={{
				width: 300,
				breakpoint: "md",
				collapsed: { desktop: false, mobile: true },
			}} */
			header={{
				height: { base: 50, md: 70 },
			}}
			navbar={{
				breakpoint: "sm",
				width: 300,
				collapsed: { desktop: true, mobile: !opened },
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

					<Group justify="space-between" style={{ flex: 1 }}>
						<Group ml="xl" visibleFrom="sm">
							<Anchor component={Link} href="/">
								Início
							</Anchor>
							<Anchor component={Link} href="/">
								Artigos
							</Anchor>
							<Anchor variant="transparent" component={Link} href="/books">
								Livros
							</Anchor>
						</Group>

						<DarkModeToggle />
					</Group>
				</Flex>
			</MantineAppShell.Header>

			<MantineAppShell.Navbar p="md">
				<VerticalNavigation onNavigation={close} />
			</MantineAppShell.Navbar>

			<MantineAppShell.Main mb="md">
				{children}
				<BackToTopButton />
			</MantineAppShell.Main>
		</MantineAppShell>
	);
}
