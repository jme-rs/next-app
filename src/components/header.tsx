"use client";

import styles from "./header.module.scss";
import common from "@/styles/common.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";

function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const links = new Map([
    ["Home", "/"],
    ["About", "/about"],
    ["Experimental", "/experimental"],
  ]);

  const sidebar = (
    <nav className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.linkContainer}>
        {
          Array.from(links).map(([name, href]) => (
            <Link
              href={href}
              className={`${styles.linkItem} ${common.hover}`}
              onClick={toggleSidebar}
              prefetch={false}
            >
              {name}
            </Link>
          ))
        }
      </div>
    </nav>
  );

  return (
    <>
      <header className={styles.container}>
        <button className={`${styles.toggleButton} ${common.hover}`} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className={styles.color} />
        </button>
        <div className={styles.title}>jme - Next.js</div>
      </header>
      <div className={`${styles.wrapper} ${isSidebarOpen ? styles.active : ''}`} onClick={toggleSidebar} />
      {sidebar}
    </>
  );
}

export { Header, useState }
