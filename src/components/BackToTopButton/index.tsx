import { ActionIcon } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";

import { useEffect, useState } from "react";
import classes from "./styles.module.css";

export function BackToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight / 2) {
				setIsVisible(true);
				return;
			}

			setIsVisible(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<ActionIcon
			className={classes.button}
			onClick={handleClick}
			data-visible={isVisible}
			size="xl"
		>
			<IconChevronUp />
		</ActionIcon>
	);
}
