"use client";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export function Header() {

  // sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    console.log("dark mode: " + isDarkMode);
  }, [isDarkMode]);


  // links
  const links = new Map([
    ["Home", "/"],
    ["Blog", "/blog"],
    ["Experimental", "/experimental"],
    ["About", "/about"],
  ]);

  const sidebar = (
    <nav className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.linkContainer}>
        {
          Array.from(links).map(([name, href]) => (
            <Link
              href={href}
              className={styles.linkItem}
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
        <button className={styles.menuButton} onClick={toggleSidebar}>
          {/* <FontAwesomeIcon icon={faBars} className={styles.color} /> */}
          <MenuIcon className={styles.color} />
        </button>
        <div className={styles.title}>jme - Next.js</div>
        <button className={styles.themeButton} onClick={toggleDarkMode}>
          {isDarkMode ?
            <DarkModeOutlinedIcon className={styles.mode} />
            :
            <LightModeOutlinedIcon className={styles.mode} />
          }
        </button>
      </header>
      <div className={`${styles.wrapper} ${isSidebarOpen ? styles.active : ''}`} onClick={toggleSidebar} />
      {sidebar}
    </>
  );
}
