import { Children } from "@/app/layout";

export default function Container({ children }: Children) {
	return <div className="max-w-6xl m-auto px-3">{children}</div>;
}
