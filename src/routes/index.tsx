import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/public-site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "PDLC | Professional Education & Coaching" },
    { name: "description", content: "A premium frontend demo for PDLC professional education, mentoring and career-focused learning." },
    { property: "og:title", content: "PDLC | Professional Education & Coaching" },
    { property: "og:description", content: "Where ambition meets the right guidance." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});
