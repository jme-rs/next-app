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
import LinkCard from "@/components/link-card";


export default function Home() {
  return (
    <>
      <PageHeader title="Home" />

      <Island expansion>
        <p>
          このサイトは個人的に作成したブログ兼ポートフォリオサイトで、
          技術記事や日記などを投稿していく予定です。
        </p>
        <p>
          サイト作成に当たって web 技術を学ぶ事を目的としています。
        </p>
      </Island>

      {/* <Island expansion>
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
      </Island> */}

      <Island expansion>
        <ul>
          <li>情報工学科 3年 佐々木孟</li>
          <li>GitHub
            <LinkCard href="https://github.com/jme-rs" />
          </li>
          <li>ソースコード
            <LinkCard href="https://github.com/jme-rs/next-app" />
          </li>
        </ul>
      </Island>
    </>
  )
}
