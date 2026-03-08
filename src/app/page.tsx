import { Container } from "@/components/layout";
import { Heading } from "@/components/typography";
import { About } from "@/components/about";

export default function Home() {
  return (
    <Container>
      <Heading>
        About Me <span className="text-neutral-50">💬</span>
      </Heading>
      <About />
    </Container>
  );
}
