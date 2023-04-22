import Card from "@/components/ui/Card";

export default function ContactLoading() {
	return (
		<section className="grid sm:grid-cols-6 lg:grid-cols-7 gap-8 mt-12 mb-36">
			<Card className="col-span-3">
				<h3>Get in touch</h3>
				<p>
					If I have sparked your interest or if you have any
					additional questions, please don't hesitate to reach out to
					me.
				</p>
				<p>
					Here is my contact information, listed in order of quickest
					response time and likelihood that I won't miss it.
				</p>
			</Card>
			<div className="lg:col-end-8 col-span-3 space-y-8 pl-6">
				<div>
					<h2 className="font-semibold">Email:</h2>
					<a href="mailto:jirulak02@gmail.com" className="underline">
						jirulak02@gmail.com
					</a>
				</div>
				<div>
					<h3>Instagram:</h3>
					<a
						href="https://www.instagram.com/jirulak02/"
						className="underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						@jirulak02
					</a>
				</div>
				<div>
					<h4>Phone:</h4>
					<a href="tel:+420777898501" className="underline">
						777 898 501
					</a>
				</div>
			</div>
		</section>
	);
}
