import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";
import {
  CertsCoursesHistory,
  CodeWarsStatistics,
  GallupReport,
  BooksList,
} from "@/components/learning";

export default function Learning() {
  return (
    <Container>
      <Heading className="pb-4">
        How did I get there? <span className="text-neutral-50">📖</span>
      </Heading>
      <Paragraph className="max-w-2xl pb-4">
        Welcome to my journey page! Here, you will discover the various
        milestones and achievements that have shaped my career
      </Paragraph>
      <Heading as="h3" variant="h3" className="my-4">
        Courses & Certifications
      </Heading>
      <CertsCoursesHistory />
      <Heading as="h3" variant="h3" className="my-6">
        Code Wars
      </Heading>
      <CodeWarsStatistics />
      <Heading as="h3" variant="h3" className="my-4">
        Gallup
      </Heading>
      <GallupReport />
      <Heading as="h3" variant="h3" className="my-4">
        Books
      </Heading>
      <BooksList />
    </Container>
  );
}
