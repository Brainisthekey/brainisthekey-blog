export const activityTimeline = [
  {
    slug: "discussion-panel-testing",
    title: "Discussion Panel on Testing",
    date: "2026-03-02",
    thesis: "Testing strategies and best practices in modern software development",
    tags: ["Workshop"],
    description:
      "A moderated panel discussion covering different testing philosophies, unit vs integration vs e2e testing, automation frameworks, testing in CI/CD pipelines, coverage metrics, and balancing test quality with development speed.",
    image: "/images/activities/discussion-panel-on-testing.jpg",
    content: [
      "A moderated panel discussion on testing strategies in modern software development. We covered the full spectrum, from testing philosophies and the unit vs integration vs end-to-end debate, to automation frameworks and how testing fits into CI/CD pipelines.",
      "The most interesting part was the discussion around test coverage metrics and whether they actually matter. We talked about the tradeoffs between test quality and development speed, and the common pitfalls teams fall into when they chase coverage numbers without thinking about what they're actually testing.",
      "The audience Q&A turned into a genuine back-and-forth on emerging testing trends, including how AI is changing the way we write and maintain tests.",
    ],
  },
  {
    slug: "ai-augmented-development",
    title: "AI-Augmented Development Workshop",
    date: "2025-17-12",
    thesis: "Best practices for AI-augmented development",
    tags: ["Workshop"],
    description:
      "A 90-minute hands-on workshop covering context engineering, quality by design, testing for AI-generated code, debugging AI-augmented development, and workflow orchestration with the BMAD pattern.",
    image: "/images/activities/ai-augmented-development.jpg",
    content: [
      "A 90-minute hands-on workshop on AI-augmented development best practices. Not generic theory, but real patterns from a production codebase.",
      "The workshop covered five sections. Context engineering, because AI is only as good as the context you give it. Quality by design, focused on making code that AI can verify, not just generate. Testing strategies for AI-generated code. Debugging techniques specific to AI-augmented workflows. And workflow orchestration using the BMAD pattern.",
      "The context engineering section dug into context window budgeting, project memory patterns like CLAUDE.md, and why framework choice matters when you're working with AI. The quality section covered the full process from PRD to ADR to stories, with templates that give AI measurable acceptance criteria.",
      "We also looked at type safety as contracts, using DTOs and OpenAPI specs to prevent frontend and backend drift. And how dependency injection makes AI-generated code actually testable.",
    ],
  },
  {
    slug: "ai-bootcamp",
    title: "AI Bootcamp",
    date: "2025-01-03",
    thesis: "4-day hands-on AI training for software engineers",
    tags: ["Workshop"],
    description:
      "An ongoing internal bootcamp turning developers into confident AI-augmented engineers. 4-day live remote format, 50+ participants across multiple cohorts, 8-10 people per session.",
    image: "/images/activities/ai-bootcamp.png",
    content: [
      "An ongoing internal bootcamp designed to turn developers into confident AI-augmented engineers. The format is a 4-day live remote workshop with 8-10 participants per cohort. Over 50 engineers have gone through the program so far.",
      "The bootcamp covers the full development cycle with AI, from project planning and prompt techniques through backend and frontend implementation to LLM integrations. Participants build a real application from scratch during the four days, keeping it practical rather than theoretical.",
      "After each cohort finishes, we run bi-weekly Q&A sessions to keep the momentum going. The whole thing grew out of the AI Ambassador role, where the goal was to build AI expertise across the company.",
    ],
  },
  {
    slug: "cursor-ai-presentation",
    title: "Cursor AI: The Future of Coding or Just Another Hype?",
    date: "2025-13-02",
    tags: ["Workshop"],
    description:
      "An internal workshop exploring Cursor AI as a development tool, comparing it with GitHub Copilot, covering real-world use cases, limitations, and impact on developer productivity.",
    image: "/images/activities/cursor-ai.jpg",
    content: [
      "An internal workshop exploring whether Cursor AI represents a genuine shift in how we write code, or if it's just another tool riding the AI hype cycle.",
      "We compared Cursor with GitHub Copilot and other AI coding assistants, looking at where each one actually helps and where they fall short. The focus was on real-world use cases, not marketing demos.",
      "We discussed the impact on developer productivity, the economic implications for the industry, and the ethical considerations around AI-assisted coding. The takeaway was practical: here's when to use it, here's when not to, and here's how to get the most out of it without becoming dependent on it.",
    ],
  },
  {
    slug: "ton-bootcamp-warsaw",
    title: "TON Society BootCamp in Warsaw",
    date: "2024-06-07",
    thesis: "Blockchain Development",
    tags: ["Event"],
    description:
      "48 hours at the TON Society BootCamp in Warsaw, building a crypto donation platform for streamers on the TON blockchain.",
    image: "/images/activities/ton-hackhaton-07.06.2024.jpg",
    content: [
      "48 hours at the TON Society BootCamp in Warsaw, building on the TON blockchain. The team was Artem Sokchin, Vlad Bondar, Alexandra Meshko, and myself.",
      "We built Donaton, a crypto donation platform for streamers running as a Telegram Mini App. The idea was seamless crypto donations with instant payouts and zero platform fees. We went from concept to working MVP in two days.",
      "The atmosphere was intense but energizing. Everyone at the event was focused on improving the Telegram ecosystem, and the tight deadline forced us to make fast decisions and ship.",
    ],
  },
  {
    slug: "pyra-stress-testing-2023",
    title: "PyRa",
    date: "2023-30-11",
    thesis: "From zero to strain: Imposing stress on Python apps",
    tags: ["Public Speech"],
    description:
      "A talk on stress testing and chaos engineering, covering six practical scenarios and demonstrating Taurus with FastAPI.",
    image: "/images/activities/pyra-stress-testing-30.11.2023.jpeg",
    content: [
      "A talk on stress testing and chaos engineering, covering how to push applications to their limits, find where they break, and build more resilient systems.",
      "The core of the presentation was six practical chaos engineering scenarios. Data corruption to test integrity under adverse conditions. Deadlock scenarios to identify and resolve concurrency issues. Geo-distributed failures to simulate regional outages. I/O delays to test behavior with slow disk or network. Resource consumption to see what happens when memory or CPU runs out. And task queue overflow to test backpressure handling.",
      "Each scenario came with a working setup. I demonstrated Taurus with FastAPI, showing how to set up realistic stress tests and interpret the results. The key message was that stress testing should be part of your regular development cycle, not something you do once before launch.",
    ],
  },
  {
    slug: "pycon-pl-2023",
    title: "PyCon PL",
    date: "2023-29-06",
    thesis: "How to smoothly migrate your legacy code/tool",
    tags: ["Public Speech"],
    description:
      "A talk about migrating legacy code without breaking everything, covering identification, preparation, refactorization, and rollback strategies.",
    image: "/images/activities/pycon-29.06.2023.jpeg",
    content: [
      "A talk at PyCon PL about migrating legacy code without breaking everything in the process. The core argument was that you need strong reasons for refactoring, and you need a structured approach to make migrations smooth.",
      "The presentation walked through three phases. Identification, where you catalog systems, dependencies, and risks. Preparation, where you plan resources, set up infrastructure, and prepare your tools. And refactorization, where you actually execute the migration.",
      "I covered parallel run strategies, the choice between big bang and incremental approaches, feature flags for gradual rollouts, and rollback procedures. All with real case examples from production systems. The biggest takeaway was that the most dangerous thing you can do is a big rewrite with no way back.",
    ],
  },
  {
    slug: "code-europe-2023",
    title: "Code Europe",
    date: "2023-10-06",
    thesis: "Company Representative",
    tags: ["Event"],
    description:
      "Represented STXNext at Code Europe 2023, connecting with professionals across AI, cybersecurity, and software development.",
    image: "/images/activities/code-europe-10.06.2023.jpeg",
    content: [
      "Represented STXNext at Code Europe 2023. The conference covered a wide range of topics, from AI and cybersecurity to Java, Python, and everything in between.",
      "It was a good chance to connect with other professionals in the industry and see what's trending. The discussions ranged from deeply technical to career-oriented, and the overall atmosphere was inspiring.",
    ],
  },
  {
    slug: "pyra-nats-eda-2023",
    title: "PyRa",
    date: "2023-30-05",
    thesis: "Event-Driven Architecture with NATS",
    tags: ["Public Speech"],
    description:
      "A talk on building event-driven systems with NATS, covering subject routing, request-reply patterns, and Protocol Buffers.",
    image:
      "/images/activities/pyra-nats-event-driven-architecture-30.05.2023.jpeg",
    content: [
      "A talk at the PyRa event on building event-driven systems with NATS. Covered the fundamentals of event-driven architecture and why NATS is a compelling choice for messaging in microservices.",
      "The presentation included working examples of subject-based routing, request-reply patterns, and Protocol Buffers for message serialization. I showed a complete Docker setup with multiple services communicating through NATS, demonstrating how to design subject namespaces for scalability and handle backpressure in distributed systems.",
      "The practical demos made it tangible. Instead of just theory, the audience could see real services publishing and consuming events, with proper error handling and resilience patterns built in.",
    ],
  },
  {
    slug: "pydata-nats-jetstream",
    title: "PyData",
    date: "2023-11-05",
    thesis: "Transform your data flow with NATS JetStream",
    tags: ["Public Speech"],
    description:
      "A talk at PyData Bydgoszcz on NATS JetStream, covering stream configuration, consumer patterns, event sourcing, and the CQRS pattern.",
    image: "/images/activities/pydata-nats-jetstream-11.05.2023.jpeg",
    content: [
      "A talk at PyData Bydgoszcz on NATS JetStream, the persistent event streaming layer built on top of NATS. The focus was on how JetStream can enhance data reliability and make real-time data processing more efficient.",
      "I covered stream configuration and retention policies, consumer patterns with explicit acknowledgment, and how to build durable event-driven pipelines. The architecture patterns included event sourcing, event replay, event transformation, and the CQRS pattern for separating read and write models.",
      "The demo showed a complete JetStream setup with Docker, including stream management, consumer groups, and message ordering. The key insight was that JetStream gives you Kafka-like capabilities without the operational complexity.",
    ],
  },
  {
    slug: "silence-scrum-teams",
    title: "Impact of silence on Scrum teams",
    date: "2023-07-03",
    tags: ["Tech Article"],
    description:
      "A two-part article exploring why team members stay silent during Scrum meetings and practical strategies to foster a communicative team environment.",
    image: "/images/activities/tech-article-saliency-2023-07-03.jpeg",
    content: [
      "A two-part article exploring why team members stay silent during Scrum meetings and what to do about it.",
      "Part one dug into the reasons. Fear of confrontation, where people don't want to appear disagreeable. Hierarchical culture, where corporate norms or lack of transparency make people reluctant to speak up. Lack of confidence, where people feel they don't have enough information or expertise. Feeling disempowered, where people perceive their opinions aren't valued. And the \"just give me a task\" mode, where people have completely disengaged from discussions.",
      "Part two was about solutions. I used a wall color analogy: you want to repaint your walls but live with family. You can pick your favorite color and ignore everyone else, let everyone choose and end up with chaos, or find a compromise. The same applies to team culture.",
      "The article explored practical strategies for involving everyone and creating an environment where people feel safe to speak their mind. Written together with Karolina Celmerowska, with collaborative solutions mapped out on a Miro board.",
    ],
  },
  {
    slug: "public-speaking-for-engineers",
    title: "Public speaking for software engineers",
    date: "2023-22-02",
    tags: ["Tech Article"],
    description:
      "An article about why public speaking matters for software engineers, covering knowledge sharing, networking, leadership, and communication.",
    image: "/images/activities/tech-article-public-speaking-22.02.2023.JPG",
    content: [
      "An article about why public speaking matters for software engineers, even though most of us would rather just write code.",
      "The key benefits: knowledge sharing, because presenting helps others learn while showcasing your expertise. Networking, because it connects you with developers, employers, clients, and collaborators you'd never meet otherwise. Leadership skills, because it practices motivating others, giving feedback, and making decisions in front of people. And communication and confidence, because it teaches you to explain complex concepts to any audience.",
      "The core message was simple. Everything in the world was built by people, including AI models. We are all human beings, and we tend to talk with each other. Public speaking is just a structured version of that.",
    ],
  },
  {
    slug: "interfaces-python-workshop",
    title: "Interfaces in Python",
    date: "2022-18-12",
    tags: ["Workshop"],
    description:
      "A two-part hands-on workshop on interfaces in Python, covering ABCs, Protocols, duck typing, dependency injection, and eight practical exercises.",
    image: "/images/activities/interfaces-in-python-15.02.2023.jpg",
    content: [
      "A two-part hands-on workshop on designing and implementing interfaces in Python, for developers with intermediate experience.",
      "The first session covered the fundamentals: what interfaces are and why they matter in a dynamically-typed language, Abstract Base Classes, Protocols and structural subtyping from PEP 544, and the tradeoffs between duck typing and explicit interfaces.",
      "The second session went deeper with eight practical exercises. Dependency injection for decoupling components. Custom datatypes for domain-specific type safety. Ports and adapters for hexagonal architecture. Proxies for lazy loading and access control. Abstract factory and builder patterns for flexible object construction. Metaprogramming with metaclasses and decorators. A cryptocurrency CLI using interface patterns. And a test email service with pluggable backends like SMTP and SendGrid.",
      "The whole workshop was hands-on from start to finish. Participants wrote real code, refactored existing code to use interfaces, and saw firsthand how interface-based design makes testing and mocking straightforward.",
    ],
  },
  {
    slug: "protobuf-with-buf",
    title: "Effective management of Protocol Buffers with Buf",
    date: "2022-18-12",
    tags: ["Tech Article"],
    description:
      "A technical article on managing Protocol Buffers with the Buf toolchain, covering schema management, breaking change detection, and CI/CD integration.",
    image: "/images/activities/tech-article-06.02.2023.jpg",
    content: [
      "A technical article published on the JustGeekIt blog about managing Protocol Buffers with the Buf toolchain.",
      "The article covered what Buf brings to the table: dependency management for proto modules, auto-formatting, linting and style enforcement, breaking change detection for APIs, multi-language code generation, and workspace support for managing multiple modules.",
      "The practical focus was on how Buf fits into a real development workflow. Versioning schemas across teams, enforcing naming conventions, detecting breaking API changes before they hit production, and automating code generation in CI/CD pipelines.",
    ],
  },
  {
    slug: "pycon-pl-2022",
    title: "PyCon PL",
    date: "2022-03-11",
    thesis: "Interfaces in Python. The benefits and harms",
    tags: ["Public Speech"],
    description:
      "A PyCon PL talk on interfaces in Python, exploring ABCs, Protocols, duck typing, and real-world examples with demo projects.",
    image: "/images/activities/pycon-11.03.2022.jpeg",
    content: [
      "A PyCon PL talk on interfaces in Python, exploring how to design effective interfaces in a dynamically-typed language and when they help versus when they get in the way.",
      "The talk covered Abstract Base Classes, Protocols from PEP 544, and the tension between duck typing and explicit interface definitions. I showed real-world examples of how interface-based design enables dependency injection, simplifies testing, and makes codebases more flexible.",
      "The presentation included two working demo projects: a crypto trading CLI with pluggable exchange connectors, and a mock email service with multiple backend implementations like SMTP, SendGrid, and AWS SES. Both demonstrated how the same interface patterns apply across very different domains.",
    ],
  },
  {
    slug: "frontend-for-backend-devs",
    title: "Frontend for backend developers",
    date: "2022-18-08",
    tags: ["Workshop"],
    description:
      "A two-day intensive workshop covering frontend frameworks for backend developers, with hands-on exercises and real-life cases.",
    image: "/images/activities/frontend-for-backend-devs-19.08.2022.JPG",
    content: [
      "A two-day intensive workshop covering frontend frameworks for backend developers. Designed to bridge the gap between backend and frontend, with a focus on practical, real-life cases.",
      "The workshop gave a broad overview of the frontend landscape, from frameworks and tooling to common patterns. It was hands-on, with participants building real things rather than just watching slides.",
    ],
  },
  {
    slug: "game-of-teens",
    title: "Game of Teens",
    date: "2022-31-07",
    thesis: "Mentorship and part of the jury in Hackathon",
    tags: ["Event"],
    description:
      'Mentor and jury member at the "Game of Teens Hackathon", working with young tech enthusiasts building projects under tight deadlines.',
    image: "/images/activities/game-of-teens-31.07.2022.jpeg",
    content: [
      "Participated as a mentor and jury member at the Game of Teens Hackathon. The event brought together young tech enthusiasts to build projects under tight deadlines.",
      "Great atmosphere and inspiring to see how the next generation approaches problem-solving. The energy and creativity of the participants made it one of the more memorable events of the year.",
    ],
  },
  {
    slug: "code-europe-2022",
    title: "Code Europe",
    date: "2022-29-05",
    thesis: "Company Tech Representative",
    tags: ["Event"],
    description:
      "Represented STXNext at Code Europe 2022, connecting with professionals across the tech industry.",
    image: "/images/activities/code-europe-29.05.2022.jpeg",
    content: [
      "Represented STXNext at Code Europe 2022. The conference had a pleasant atmosphere with interesting lectures and great people from across the tech industry.",
      "It was a good opportunity to connect with other professionals and see what's happening in the broader tech community.",
    ],
  },
  {
    slug: "katowice-multi-tenant",
    title: "Pythonowe Katowice Meetup",
    date: "2022-17-05",
    thesis: "Multi-tenant Architecture: Is It Really Good?",
    tags: ["Public Speech"],
    description:
      "A talk on multi-tenant architecture covering the real-world tradeoffs of different isolation strategies with Django examples.",
    image: "/images/activities/python-katowice-17.05.2022.jpg",
    content: [
      "A talk at the Pythonowe Katowice Meetup on multi-tenant architecture, covering the real-world tradeoffs of different isolation strategies.",
      "I walked through three main approaches: shared database with shared schema using row-level filtering, shared database with separate PostgreSQL schemas for per-tenant isolation, and database per tenant for maximum separation. Each comes with its own set of tradeoffs around data isolation, security, performance, and operational complexity.",
      "The talk used real examples from production Django applications, focusing on the disadvantages and hidden costs that most tutorials skip over. Multi-tenancy looks simple in theory, but the edge cases around migrations, billing, data residency, and performance at scale are where it gets interesting.",
    ],
  },
  {
    slug: "pytech-summit-2022",
    title: "Pytech Summit 2022",
    date: "2022-22-04",
    thesis: "Multi-tenant architecture the drawbacks and possibilities",
    tags: ["Public Speech"],
    description:
      "A talk on transitioning from single-tenant to multi-tenant architecture, covering isolation patterns with Python and Django examples.",
    image: "/images/activities/pytech-22.04.2022.png",
    content: [
      "A talk at Pytech Summit on transitioning from single-tenant to multi-tenant architecture. Covered the full spectrum from shared schemas to database-per-tenant isolation.",
      "The presentation focused on the practical side: when to choose which approach, what the migration path looks like, and what breaks along the way. I used Python and Django examples to show how each pattern plays out in real code.",
      "The audience was a mix of experience levels, so the talk balanced high-level architecture decisions with concrete implementation details.",
    ],
  },
  {
    slug: "wrocpy-multi-tenant",
    title: "Wroc.py",
    date: "2022-05-04",
    thesis:
      "Multi-tenant architecture as one of ways to scale your application",
    tags: ["Public Speech"],
    description:
      "A talk on multi-tenant architecture as a scaling strategy, covering isolation patterns and practical tradeoffs with Django examples.",
    image: "/images/activities/wroc-py-05.04.2022.jpg",
    content: [
      "A talk at Wroc.py on multi-tenant architecture as a scaling strategy. The focus was on how to take a single-tenant application and evolve it into a multi-tenant system without rewriting everything.",
      "I covered the three main isolation patterns: shared schema, separate schema, and database per tenant, with Django examples showing the practical tradeoffs. The key message was that multi-tenancy is a spectrum, not a binary choice, and the right approach depends on your specific requirements around security, performance, and compliance.",
    ],
  },
];
