import {
	Affix,
	Button,
	Transition,
	useMantineColorScheme,
} from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";

import { useWindowScroll } from "@mantine/hooks";

export function BackToTopButton() {
	const [scroll, scrollTo] = useWindowScroll();
	const { colorScheme } = useMantineColorScheme();

	return (
		<Affix position={{ bottom: 20, right: 20 }}>
			<Transition transition="slide-up" mounted={scroll.y > 0}>
				{(transitionStyles) => (
					<Button
						leftSection={<IconArrowUp size={16} />}
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
						variant="default"
					>
						Voltar ao topo
					</Button>
				)}
			</Transition>
		</Affix>
	);
}
