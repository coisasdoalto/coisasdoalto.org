import { Button } from "@mantine/core";
import Link from "next/link";
import type { ReactNode } from "react";

export function ContentCard({
	children,
	to,
}: { children: ReactNode; to: string }) {
	return (
		<Button
			component={Link}
			variant="default"
			fullWidth
			tt="capitalize"
			href={to}
		>
			{children}
		</Button>
	);
}
