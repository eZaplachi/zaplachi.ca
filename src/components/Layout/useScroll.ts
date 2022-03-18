import { useEffect } from "react";
// TODO: fix undefined window error when tabbed off screen

const useScroll = (callback: any) => {
	useEffect(function mount() {
		const onScroll = () => {
			const scrollPosition = window.scrollY;

			callback(scrollPosition);
		};

		window.addEventListener("scroll", onScroll);

		return function unMount() {
			window.removeEventListener("scroll", onScroll);
		};
	});

	return null;
};

export default useScroll;
