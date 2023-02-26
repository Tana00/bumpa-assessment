import { useRef, useEffect, useState } from "react";

interface Props {
	loadMoreFunction: () => void;
}

export const useInfiniteScroll = ({ loadMoreFunction }: Props) => {
	const [targetRef, setTargetRef] = useState();

	const observer = useRef(
		new IntersectionObserver(
			([entries]) => {
				if (entries?.isIntersecting) {
					return loadMoreFunction();
				}
			},
			{ threshold: 0.8 }
		)
	);

	useEffect(() => {
		const currentObserver = observer.current;

		if (targetRef) {
			currentObserver.observe(targetRef);
		}
		return () => {
			if (targetRef) {
				currentObserver.unobserve(targetRef);
			}
		};
	}, [targetRef]);

	return { setTargetRef };
};
