"use client";

import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function ChaptersDrawer({
	content,
}: { content: React.ReactNode }) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Drawer
				offset={8}
				radius="md"
				position="bottom"
				opened={opened}
				onClose={close}
				title="Authentication"
			>
				{content}
			</Drawer>

			<Button onClick={open}>Open Drawer</Button>
		</>
	);
}
