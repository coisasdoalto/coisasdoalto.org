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
			align="center"
			gap="sm"
		>
			<Title ta="center">Coisas do Alto</Title>
			<Title
				ta="center"
				order={2}
				fz="lg"
				className="font-serif"
				fw="lighter"
				component="cite"
			>
				<sup>1</sup> Portanto, se fostes ressuscitados juntamente com Cristo,
				<br />
				<strong>buscai as coisas lá do alto</strong>, onde Cristo vive,
				assentado à direita de Deus.
			</Title>
			<Anchor
				fz="md"
				ff="text"
				ta="center"
				href="https://www.bibliaonline.com.br/ara/cl/3/1"
				target="_blank"
			>
				Colossenses 3:1 ARA
			</Anchor>
		</Flex>
	);
}
