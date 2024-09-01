import { Box } from "@mantine/core";
import classes from "./styles.module.css";

export function Article({
	children,
}: {
	children: string;
}) {
	return (
		<Box
			component="article"
			pb="xl"
			className={classes.article}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: We need it to render post
			dangerouslySetInnerHTML={{
				__html: children,
			}}
		/>
	);
}
