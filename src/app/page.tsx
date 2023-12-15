import styles from "./home.module.scss";
import Island from "@/components/island";
import PageHeader from "@/components/page-header";
import Img from "next-image-export-optimizer";

import githubSvg from "@/assets/images/All_logo_and_pictures-main/social icons/github.svg";
import clangSvg from "@/assets/images/All_logo_and_pictures-main/programming languages/c.svg";
import javaSvg from "@/assets/images/All_logo_and_pictures-main/programming languages/java.svg";
import pythonSvg from "@/assets/images/All_logo_and_pictures-main/programming languages/python.svg";
import jsSvg from "@/assets/images/All_logo_and_pictures-main/programming languages/javascript.svg";
import tsSvg from "@/assets/images/All_logo_and_pictures-main/programming languages/typescript.svg";
import rustSvg from "@/assets/images/All_logo_and_pictures-main/programming languages/rust.svg";


export default function Home() {
  return (
    <>
      <PageHeader title="Home" description="このサイトの情報" />

      <Island expansion>
        <h2>About This Site</h2>
        <p>
          このサイトは個人的に作成したブログ兼ポートフォリオサイトで、
          技術記事や日記などを投稿していく予定です。
        </p>
        <p>
          サイト作成に当たって web 技術を学ぶ事を目的としています。
        </p>
      </Island>

      <Island expansion>
        <h2>Author</h2>
        <ul>
          <li>情報工学科 3年 佐々木孟</li>
          <li>
            <a href="https://github.com/jme-rs">GitHub</a>
            <Img src={githubSvg} alt="" className={styles.icon} />
          </li>
          <li><a href="https://github.com/jme-rs/next-app">このサイトのソースコード</a></li>
        </ul>
        <ul>
          <li>プログラミング言語
            <ul>
              <li>C言語<Img src={clangSvg} alt="" className={styles.icon} /></li>
              <li>Java<Img src={javaSvg} alt="" className={styles.icon} /></li>
              <li>Python<Img src={pythonSvg} alt="" className={styles.icon} /></li>
              <li>
                JavaScript<Img src={jsSvg} alt="" className={styles.icon} />
                /TypeScript<Img src={tsSvg} alt="" className={styles.icon} />
              </li>
              <li>Rust<Img src={rustSvg} alt="" className={styles.icon} /></li>
            </ul>
          </li>
        </ul>
      </Island>
    </>
  )
}
