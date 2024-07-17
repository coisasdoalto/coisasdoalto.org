import { Affix, Button, Transition } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";

import { useWindowScroll } from "@mantine/hooks";

export function BackToTopButton() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<Affix position={{ bottom: 20, right: 20 }}>
			<Transition transition="slide-up" mounted={scroll.y > 0}>
				{(transitionStyles) => (
					<Button
						leftSection={<IconArrowUp size={16} />}
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
					>
						Voltar ao topo
					</Button>
				)}
			</Transition>
		</Affix>
	);
}
