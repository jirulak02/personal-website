import Button from "../ui/Button";
import Card from "../ui/Card";

export default function Wow() {
	return (
		<Card className="max-w-2xl m-auto my-12 lg:my-20 px-3">
			<div className="text-center">
				<h3>Wow!</h3>
			</div>
			<p>
				Let's be honest, no one reads all the way to the bottom of the
				page. So if you have read this far, it is clear that you are
				genuinely interested in getting to know me better. I encourage
				you to seize this opportunity and reach out to me.
			</p>
			<Button />
		</Card>
	);
}
