import { Alert, Anchor } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export function ReviewAlert({ link }: { link: string | undefined }) {
	return (
		<Alert
			mb={20}
			variant="light"
			color="gray"
			title="Tradução"
			icon={<IconInfoCircle />}
		>
			Este texto foi traduzido com ferramentas de IA, e ainda não foi revisado
			por um humano. Pode conter erros graves. <br />
			{link && (
				<>
					Confira sempre o link do texto original:{" "}
					<Anchor size="sm" href={link} target="_blank" c="blue">
						{link}
					</Anchor>
				</>
			)}
		</Alert>
	);
}
