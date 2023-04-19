import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export const metadata = {
	title: "Contact",
	description:
		"All the important contact information, including my socials, e-mail and phone number.",
};

export default function Contact() {
	return (
		<>
			<Title title="<Contact>" />
			<Container>
				<section className="grid grid-cols-7 gap-8 mt-12">
					<Card className="col-span-3">
						<h3>Get in touch</h3>
						<p>
							If I have sparked your interest or if you have any
							additional questions, please don't hesitate to reach
							out to me.
						</p>
						<p>
							Here is my contact information, listed in order of
							quickest response time and likelihood that I won't
							miss it.
						</p>
					</Card>
					<div className="col-end-8 col-span-3 space-y-8">
						<div>
							<h2 className="font-semibold">Email:</h2>
							<a
								href="mailto:jirulak02@gmail.com"
								className="underline"
							>
								jirulak02@gmail.com
							</a>
						</div>
						<div>
							<h3>Instagram:</h3>
							<a
								href="https://www.instagram.com/jirulak02/"
								className="underline"
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
				<div className="mt-20 mb-4 text-center">
					<h1 className="font-normal">{"</Contact>"}</h1>
				</div>
			</Container>
		</>
	);
}
