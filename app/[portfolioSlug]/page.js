import Gallery from "@/components/Portfolio/1_Gallery/Gallery";
import styles from "./page.module.css";

export default function PortfolioPage({ params }) {
  const slug = params.portfolioSlug;

  return (
    <main className={styles.main}>
      <Gallery slug={slug} />
    </main>
  );
}
