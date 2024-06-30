import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";
import { Contact } from "@/components/contact";

export default function Projects() {
  return (
    <Container>
      <Heading className="pb-4">
        Contact Me <span className="text-neutral-50">✉️</span>
      </Heading>
      <Paragraph className="pb-10">
        Reach out to me over email or fill up this contact form. I will get back
        to you!
      </Paragraph>
      <Contact />
    </Container>
  );
}
