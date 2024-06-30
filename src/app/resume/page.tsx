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
        I&apos;m a full-stack developer that loves
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
