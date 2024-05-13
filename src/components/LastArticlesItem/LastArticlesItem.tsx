import { Anchor, Box, Text } from "@mantine/core";
import Link from "next/link";
import classes from "./LastArticlesItem.module.css";

export function LastArticlesItem({
	itemName,
	author,
	href,
}: {
	itemName: string;
	author: string;
	href: string;
}) {
	return (
		<Box className={classes.root}>
			<Anchor href={href} component={Link}>
				{itemName}
			</Anchor>

			<Text size="sm" c="dimmed">
				<Text className={classes.subInfo} span>
					autor:
				</Text>

				<Anchor href={`/authors/${author}`} component={Link}>
					{author}
				</Anchor>

				{/* <Text className={classes.subInfo} span>
					série:
				</Text>

				<Anchor href="#" component={Link}>
					Notas sobre 1 Coríntios
				</Anchor> */}
			</Text>
		</Box>
	);
}
