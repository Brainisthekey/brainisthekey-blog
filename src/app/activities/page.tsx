import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";
import { ActivityHistory } from "@/components/activities";

export default function Activities() {
  return (
    <Container>
      <Heading className="pb-4">
        Milestone Moments <span className="text-neutral-50">🌟</span>
      </Heading>
      <Paragraph className="max-w-2xl pb-4">
        Here are some of the notable milestones and achievements I have been
        involved in, including hackathons, public speaking engagements, project
        presentations, workshops and courses
      </Paragraph>
      <ActivityHistory />
    </Container>
  );
}
