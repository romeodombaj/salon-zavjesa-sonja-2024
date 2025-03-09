import Gallery from "@/components/Portfolio/1_Gallery/Gallery";
import styles from "./page.module.css";
import useGetGalleryData from "@/components/hooks/uge-get-gallery-data";
import { getGallery } from "@/lib/gallery";

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

export default async function PortfolioPage({ params }) {
  //const { getGalleryData } = useGetGalleryData();

  const slug = params.portfolioSlug;
  const currentPageValue =
    pageValues[pageValues.findIndex((value) => value.slug === slug)];

  const imageList = await getGallery(slug);

  //const imageList = await getGalleryData(slug);

  console.log("IN HERE");
  console.log(imageList);

  return (
    <>
      <header className={styles.header}>
        <div className={styles[`mobile-portfolio-title`]}>
          {currentPageValue.name}
        </div>
      </header>
      <main className={styles.main}>
        {imageList && (
          <Gallery
            imageList={imageList}
            slug={slug}
            values={currentPageValue}
          />
        )}
      </main>
    </>
  );
}
