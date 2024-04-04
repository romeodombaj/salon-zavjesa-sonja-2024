import styles from "./page.module.css";

import Head from "@/components/HomePage/0_Head/Head";
import AboutUs from "@/components/HomePage/2_AboutUs/AboutUs";
import ContactUs from "@/components/HomePage/4_ContactUs/ContactUs";
import Services from "@/components/HomePage/1_Services/Services";
import Location from "@/components/HomePage/3_Location/Location";

export default function Home() {
  return (
    <>
      <header>
        <Head />
      </header>
      <main>
        <Services />
        <div className={styles.divider} />
        <AboutUs />
        <div className={styles.divider} id="location" />
        <Location />
        <div className={styles.divider} id="contact" />
        <ContactUs />
      </main>
    </>
  );
}
