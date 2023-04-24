"use client";

import { useEffect } from "react";

function ScrollUp() {
	useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

	return null;
}

export default ScrollUp;
