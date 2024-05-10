import { Button } from "@mantine/core";
import type { ReactNode } from "react";

export function ContentCard({ children }: { children: ReactNode }) {
	return (
		<Button variant="default" fullWidth tt="capitalize">
			{children}
		</Button>
	);
}
