import { createFileRoute } from "@tanstack/react-router";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omatule Marvellous — Full-Stack Developer" },
      { name: "description", content: "Omatule Marvellous is a full-stack developer in Port Harcourt, Nigeria, building thoughtful web applications and digital experiences." },
      { property: "og:title", content: "Omatule Marvellous — Full-Stack Developer" },
      { property: "og:description", content: "Explore selected web projects, technical skills, and the professional journey of developer Omatule Marvellous." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
