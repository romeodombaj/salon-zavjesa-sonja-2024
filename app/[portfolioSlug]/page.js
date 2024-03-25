import Gallery from "@/components/Portfolio/1_Gallery/Gallery";
import styles from "./page.module.css";
import fs from "fs";
import path from "path";

export const getPostLength = (directory) => {
  return fs.readdirSync(directory).length;
};

export default function PortfolioPage({ params }) {
  const slug = params.portfolioSlug;

  const POST_FOLDER_NAME = `images/webImages/${slug}`;
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", POST_FOLDER_NAME);

  const length = getPostLength(POSTS_DIRECTORY);

  return (
    <main className={styles.main}>
      <Gallery slug={slug} length={length} />
    </main>
  );
}
