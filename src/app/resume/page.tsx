import { Container } from "@/components/layout";
import { Heading, Highlight, Paragraph } from "@/components/typography";
import { WorkHistory } from "@/components/resume";

export default function Home() {
  return (
    <Container>
      <Heading className="pb-4">
        Work History <span className="text-neutral-50">💼</span>
      </Heading>
      <Paragraph className="max-w-2xl pb-4">
        Where I&apos;ve been and what I&apos;ve worked on.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
