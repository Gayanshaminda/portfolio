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
      { property: "og:url", content: "https://gayanshaminda.me/" },
      { property: "og:site_name", content: "Gayan Shaminda" },
      { property: "og:image", content: "https://gayanshaminda.me/og-image.png" },
      {
        property: "og:image:alt",
        content: "Gayan Shaminda — Software Engineer portfolio",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gayan Shaminda Karunarathne | Software Engineer" },
      {
        name: "twitter:description",
        content:
          "Computer Engineering graduate and Software Engineer specializing in full-stack development, AI-powered applications, cloud systems and modern web technologies.",
      },
      { name: "twitter:image", content: "https://gayanshaminda.me/og-image.png" },
      {
        name: "twitter:image:alt",
        content: "Gayan Shaminda — Software Engineer portfolio",
      },
    ],
    links: [{ rel: "canonical", href: "https://gayanshaminda.me/" }],
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
