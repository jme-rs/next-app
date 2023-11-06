"use client";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Cookies from "js-cookie";

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
    Cookies.set("darkMode", isDarkMode ? "true" : "false", { expires: 3 });
  }, [isDarkMode]);


  // initialize dark mode
  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);


  // links
  const links = new Map([
    ["Home", "/"],
    ["Blog", "/blog"],
    ["⚠️Exp", "/experimental"],
    ["About", "/about"],
  ]);


  // navigation
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


  // for PWA
  const pwaMeta = (
    isDarkMode ?
      <meta name="theme-color" content="#222222" />
      :
      <meta name="theme-color" content="#ffffff" />
  );


  return (
    <>
      {pwaMeta}
      <header className={styles.container}>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          {/* <FontAwesomeIcon icon={faBars} className={styles.color} /> */}
          <MenuIcon className={styles.color} />
        </button>
        <div className={styles.title}>jme Blog</div>
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
