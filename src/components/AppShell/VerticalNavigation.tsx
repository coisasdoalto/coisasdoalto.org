"use client";

import { Box, NavLink } from "@mantine/core";
import { IconBooks, IconHome } from "@tabler/icons-react";
import Link from "next/link";

export function VerticalNavigation({
	onNavigation,
}: { onNavigation: () => void }) {
	return (
		<Box>
			<NavLink
				label="Início"
				leftSection={<IconHome size={16} stroke={1.5} />}
				component={Link}
				href="/"
				onClick={onNavigation}
				style={{ borderRadius: "0.5rem" }}
			/>

			<NavLink
				label="Livros"
				leftSection={<IconBooks size={16} stroke={1.5} />}
				component={Link}
				href="/books"
				onClick={onNavigation}
				style={{ borderRadius: "0.5rem" }}
			/>
		</Box>
	);
}
