import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gayan Shaminda Karunarathne | Software Engineer" },
      {
        name: "description",
        content:
          "Computer Engineering graduate and Software Engineer specializing in full-stack development, AI-powered applications, cloud systems and modern web technologies.",
      },
      { property: "og:title", content: "Gayan Shaminda Karunarathne | Software Engineer" },
      {
        property: "og:description",
        content:
          "Computer Engineering graduate and Software Engineer specializing in full-stack development, AI-powered applications, cloud systems and modern web technologies.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gayan Shaminda Karunarathne",
          jobTitle: "Software Engineer",
          alumniOf: { "@type": "CollegeOrUniversity", name: "University of Ruhuna" },
          sameAs: [
            "https://github.com/Gayanshaminda",
            "https://www.linkedin.com/in/gayan-shaminda",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});
