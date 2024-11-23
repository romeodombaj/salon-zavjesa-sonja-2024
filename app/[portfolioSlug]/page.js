export const runtime = "edge";

import Gallery from "@/components/Portfolio/1_Gallery/Gallery";
import styles from "./page.module.css";

const pageValues = [
  {
    slug: "zavjese",
    name: "Zavjese",
    num_of_images: 12,
  },
  {
    slug: "dekoracija",
    name: "Dekoracija",
    num_of_images: 14,
  },
  {
    slug: "prateca_dekoracija",
    name: "Prateća dekoracija",
    num_of_images: 11,
  },
  {
    slug: "rolice_paneli",
    name: "Rolice i paneli",
    num_of_images: 12,
  },
];

export default function PortfolioPage({ params }) {
  const slug = params.portfolioSlug;
  const currentPageValue =
    pageValues[pageValues.findIndex((value) => value.slug === slug)];

  return (
    <>
      <header className={styles.header}>
        <div className={styles[`mobile-portfolio-title`]}>
          {currentPageValue.name}
        </div>
      </header>
      <main className={styles.main}>
        <Gallery slug={slug} values={currentPageValue} />
      </main>
    </>
  );
}
