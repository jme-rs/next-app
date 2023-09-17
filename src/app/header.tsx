"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const links = new Map([
    ["Home", "/"],
    ["About", "/about"],
    ["Example", "/example"],
  ]);

  const sidebar = (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.linkContainer}>
        {
          Array.from(links).map(([name, href]) => (
            <Link href={href} className={styles.linkItem} onClick={toggleSidebar}>
              {name}
            </Link>
          ))
        }
      </div>
    </div>
  );

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className={styles.color} />
        </button>
        <div className={styles.title}>jme - Next.js</div>
      </div>
      <div className={`${styles.wrapper} ${isSidebarOpen ? styles.active : ''}`} onClick={toggleSidebar} />
      {sidebar}
    </div>
  );
}
