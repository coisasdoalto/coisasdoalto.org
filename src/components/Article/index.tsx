import classes from "./styles.module.css";

export function Article({
	children,
}: {
	children: string;
}) {
	return (
		<article
			className={classes.article}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: We need it to render post
			dangerouslySetInnerHTML={{
				__html: children,
			}}
		/>
	);
}
