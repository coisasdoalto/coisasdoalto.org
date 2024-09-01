"use client";

import { Button, Drawer, Portal, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBook } from "@tabler/icons-react";
import type { PropsWithChildren } from "react";

export function ChaptersDrawer({ children }: PropsWithChildren) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Drawer
				offset="1rem"
				radius="md"
				overlayProps={{ blur: 4 }}
				position="bottom"
				opened={opened}
				onClose={close}
				title={<Title order={4}>Capítulos</Title>}
			>
				{children}
			</Drawer>

			<Portal target="#book-post-view-header">
				<Button
					leftSection={<IconBook size={16} color="currentColor" />}
					onClick={open}
					variant="default"
					size="sm"
					hiddenFrom="md"
				>
					Ver capítulos
				</Button>
			</Portal>
		</>
	);
}
