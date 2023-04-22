import Header from "@/components/layout/Header";

export default function NotFound() {
	return (
		<>
			<Header normal={false} />
			<div className="text-center absolute top-1/3 w-full flex flex-col space-y-3 p-3">
				<h2 className="font-semibold">404 | Page not found</h2>
				<p>Please navigate back.</p>
			</div>
		</>
	);
}
