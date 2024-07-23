"use client";

import { Anchor, Flex, Title, useMantineColorScheme } from "@mantine/core";

export function Hero() {
	const { colorScheme } = useMantineColorScheme();

	return (
		<Flex
			bg={colorScheme === "dark" ? "gray.9" : "gray.3"}
			p="xl"
			direction="column"
			justify="center"
			gap="sm"
		>
			<Title ta="center">Coisas do Alto</Title>
			<Title ta="center" order={2} fz="lg" className="font-serif" fw="light">
				<cite>"Pensem nas coisas lá do alto [...]"</cite>
			</Title>
			<Anchor
				fz="md"
				ff="text"
				ta="center"
				href="https://www.bibliaonline.com.br/naa/cl/3/2"
			>
				Colossenses 3:2 NAA
			</Anchor>
		</Flex>
	);
}
