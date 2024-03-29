import { useState, useEffect } from 'react';

const Test = (ref: any) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const observer = new IntersectionObserver(([entry]) =>
		setIsIntersecting(entry.isIntersecting)
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	return isIntersecting;
};

export default Test;
