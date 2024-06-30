import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";
import { Posts } from "@/components/Posts";
import { SparklesPreview } from "@/components/ui";
import { getAllProjects } from "@/lib/getAllProjects";

export default async function Project() {
  const projects = await getAllProjects();
  const data = projects.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <Heading className="pb-4">
        Tech Ventures <span className="text-neutral-50">🛠️</span>
      </Heading>
      <Paragraph className="pb-4">
        A showcase of the diverse and innovative projects I have undertaken or
        currently developing. Here, you will find detailed overviews of my
        completed, forbidden and ongoing work
      </Paragraph>
      <Posts posts={data} type="project" />
      <SparklesPreview />
    </Container>
  );
}
