import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";
import { Posts } from "@/components/Posts";
import { SparklesPreview } from "@/components/ui";
import { getAllBlogs } from "@/lib/getAllBlogs";

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <Heading className="pb-4">
        Bytes and Thoughts <span className="text-neutral-50">💻</span>
      </Heading>
      <Paragraph className="pb-4">
        The tech journey blog, where I share insights, project experiences,
        Agile pain points, coding adventures, tech tips, success stories, and
        lessons learned along the way
      </Paragraph>
      <Posts posts={data} type="blog" />
      <SparklesPreview />
    </Container>
  );
}
