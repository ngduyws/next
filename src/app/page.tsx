"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://express1-nine.vercel.app",
  withCredentials: true,
});

export default function Home() {
  const [response, setResponse] = useState<any>(null);

  const setCookie = async () => {
    try {
      const response = await fetch(
        "https://express1-nine.vercel.app/set-cookie",
        {
          credentials: "include",
        }
      );
      const result = await response.json();
      setResponse(result);
    } catch (error) {}
  };

  const checkCookie = async () => {
    try {
      const response = await fetch(
        "https://express1-nine.vercel.app/check-cookie",
        {
          credentials: "include",
        }
      );
      const result = await response.json();
      setResponse(result);
    } catch (error) {}
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <pre>{JSON.stringify(response)}</pre>
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
