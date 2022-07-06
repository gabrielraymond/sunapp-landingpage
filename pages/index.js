import Head from "next/head";
import styles from "../styles/Home.module.css";
import MobileDetect from "mobile-detect";

export default function Home() {
  var md = new MobileDetect(
    "Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i" +
      " Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)" +
      " Version/4.0 Mobile Safari/534.30"
  );
  return (
    <div>
      <Head>
        <title>SUN EDUCATION APPS</title>
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
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
              <a
                href={
                  md.is("iPhone")
                    ? "https://apps.apple.com/id/app/sun-education-group/id1446868544?l=id"
                    : "https://play.google.com/store/apps/details?id=com.sunedu.app&hl=en&gl=US"
                }
              >
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
