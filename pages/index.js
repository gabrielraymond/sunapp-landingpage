import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// import UserAgent from "user-agents";

export default function Home() {
  const [deviceType, setDeviceType] = useState("");
  const [gab, setGab] = useState("");

  useEffect(() => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setDeviceType("Mobile");
      console.log("mobile");
    } else {
      console.log(navigator.userAgent);
      setDeviceType("Desktop");
      console.log("desktop");
    }
    setGab(navigator.userAgent);
  }, []);
  return (
    <div>
      <Head>
        <title>SUN EDUCATION APPS</title>
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <p>{gab}</p>
          <div className={styles.image}>
            {/* <Image
              src="/images/sunApp.png"
              alt="sunApp"
              width={1300}
              height={1000}
            /> */}
          </div>
          <div className={styles.desc}>
            <div className={styles.pickMobile}>
              <a href="https://play.google.com/store/apps/details?id=com.sunedu.app&hl=en&gl=US">
                <img
                  src="/images/Google Play.png"
                  alt="google play"
                  className={styles.btn}
                />
              </a>
              <a href="https://apps.apple.com/id/app/sun-education-group/id1446868544?l=id">
                <img
                  src="/images/Appstore.png"
                  alt="google play"
                  className={styles.btn}
                />
              </a>
            </div>
            <div>
              <p className={styles.textdesc}>
                Temukan berbagai informasi penting dan menarik untuk persiapan
                studi ke luar negeri-mu! Dapatkan info <span>beasiswa </span>
                hingga <span>diskon </span>
                spesial hanya di <span>SUN Education Mobile App</span>.
              </p>
            </div>
            <div>
              <a href={""}>
                <img
                  src="/images/UNDUH SEKARANG.png"
                  alt="google play"
                  className={styles.btn}
                />
              </a>
            </div>
          </div>
        </div>

        <img
          src="/images/blur bawah.png"
          alt="icon-blur"
          className={styles.bg1}
        />

        <img
          src="/images/Blur atas.png"
          alt="icon-blur"
          className={styles.bg2}
        />
        <div className={styles.footer}>
          <h4>www.suneducationgroup.com</h4>
        </div>
      </main>
    </div>
  );
}
