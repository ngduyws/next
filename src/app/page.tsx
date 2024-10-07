"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://express1-nine.vercel.app",
  withCredentials: true,
});

export default function Home() {
  const setCookie = async () => {
    try {
      const response = await fetch(
        "https://express1-nine.vercel.app/set-cookie"
        // {
        //   credentials: "include",
        // }
      );
      console.log("Set-Cookie response:", response);
    } catch (error) {
      console.error("Set-Cookie error:", error);
    }
  };

  const checkCookie = async () => {
    try {
      const response = await fetch(
        "https://express1-nine.vercel.app/check-cookie",
        {
          credentials: "include",
        }
      );
      console.log("Check-Cookie response:", response);
    } catch (error) {
      console.error("Check-Cookie error:", error);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={setCookie}>SET</button>
        <button onClick={checkCookie}>GET</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
