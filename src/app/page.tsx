"use client";

import Head from "next/head";
import styles from "@/app/page.module.css";
import "@/app/navbar.css";
import { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";

export default function Home() {
  useEffect(() => {
    const noMenu = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest("#show-menu")) setMenu(false);
    };
    document.addEventListener("click", noMenu);
    return () => {
      document.removeEventListener("click", noMenu);
    };
  }, []);

  const [menu, setMenu] = useState<boolean>(false);

  const menuHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setMenu(!menu);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <Link href={"/"}>
              <div className="logo">Abdullah.</div>
            </Link>
            <div className={`right ${menu ? "open" : "close"}`}>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <button className="btn btn-filled" id="download-cv">
                <a href="https://abdullah-salahuddin.vercel.app/cv/download" target="_blank" rel="noopener noreferrer">Download CV</a>
              </button>
            </div>
            <button
              className="btn btn-transparent"
              id="show-menu"
              onClick={menuHandler}
            >
              {menu ? (
                <RxCross2 style={{ pointerEvents: "none" }} />
              ) : (
                <IoMdMenu style={{ pointerEvents: "none" }} />
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className={styles.container}>
        <Head>
          <title>Abdullah Salahuddin - Resume</title>
          <meta name="description" content="Your personal resume website" />
        </Head>

        <section id="about" className={styles.hero}>
          <h1>Abdullah Salahuddin</h1>
          <h2>Aspiring Web Developer</h2>
          <p>
            Passionate about building responsive and user-friendly web
            applications.
          </p>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact Information</h2>
          <p>
            Email:{" "}
            <a href="mailto:contactabdullah26@gmail.com">contactabdullah26@gmail.com</a>
          </p>
          <p>Phone: <u onClick={() => { navigator.clipboard.writeText("+923213887757"); alert("Number copied") }} style={{ color: "#0070f3" }}>+92 321 3887757</u></p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/abdullahsalahuddin"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourname
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/AbdullahSheikh7"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourname
            </a>
          </p>
        </section>

        <section id="skills" className={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>GSAP</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
          </ul>
        </section>

        <section id="education" className={styles.section}>
          <h1>Education</h1>
          <div>
            <h2>Intermediate</h2>
            <p>
              <strong>Government Degree Science and Commerce College Landhi</strong>
            </p>
            <p>Computer Sciences</p>
            <p>Aug 2023 - Aug 2025</p>
          </div>

          <div>
            <h2>Matric</h2>
            <p>
              <strong>White House Grammar School</strong>
            </p>
            <p>Computer Sciences</p>
            <p>Sep 2019 - Sep 2023</p>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <h2>Experience</h2>
          <p>
            <strong>Worked as Computer Operator</strong> - Mubarak Industries (Sep 2023 - Feb 2024)
          </p>
          <p>
            DEALS IN TEXTILE POLYESTER FILAMENT YARN
            A-9, S.I.T.E, Ahnasabad, Super Highway, Karachi
          </p>
        </section>

        <section id="portfolio" className={styles.section}>
          <h2>Portfolio</h2>
          <p>Check out my projects:</p>
          <ul>
            <li>
              <a
                href="https://passman-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 1
              </a>{" "}
              - Password Manager
            </li>
            <li>
              <a
                href="https://mern-book-store-frontend-abdullah.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 2
              </a>{" "}
              - Book Store
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
