import { useEffect, useRef, useState } from "react";
import styles from "./loadingPage.module.css";
import { gsap } from "gsap";

export default function LoadingPage() {
  const nameRef = useRef();
  const keywordsRef = useRef();
  const yearsRef = useRef();

  const [hideName, setHideName] = useState(false);
  const [hideKeywords, setHideKeywords] = useState(true);
  const [hideYears, setHideYears] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideName(true);
      setHideKeywords(false);
      animateKeywords(0);
    }, 700);
    setTimeout(() => {
      setHideKeywords(true);
      setHideYears(false);
      animateYears(0);
    }, 2500);
  }, []);

  function animateKeywords(index) {
    const paragraphs = keywordsRef.current?.querySelectorAll("p");
    if (index < paragraphs.length) {
      if (index > 0) {
        gsap.to(paragraphs[index - 1], {
          display: "none",
          duration: 0.3,
          onComplete: function () {
            gsap.to(paragraphs[index], {
              display: "block",
              duration: 0.3,
              onComplete: function () {
                animateKeywords(index + 1);
              },
            });
          },
        });
      } else {
        gsap.to(paragraphs[index], {
          display: "block",
          duration: 0.3,
          onComplete: function () {
            animateKeywords(index + 1);
          },
        });
      }
    }
  }

  function animateYears(index, duration = 0.6) {
    const paragraphs = yearsRef.current?.querySelectorAll("p");
    if (index < paragraphs.length) {
      if (index > 0) {
        gsap.to(paragraphs[index - 1], {
          display: "none",
          duration: duration,
          onComplete: function () {
            gsap.to(paragraphs[index], {
              display: "block",
              duration: 0.12,
              onComplete: function () {
                animateYears(index + 1, duration * 0.5);
              },
            });
          },
        });
      } else {
        gsap.to(paragraphs[index], {
          display: "block",
          duration: 0.12,
          onComplete: function () {
            animateYears(index + 1, duration * 0.5);
          },
        });
      }
    }
  }

  return (
    <div className={styles.loadingPage}>
      <div
        ref={nameRef}
        className={`${styles.name}`}
        style={{ display: hideName ? "none" : "flex" }}
      >
        <p>Strategy</p>
      </div>
      <div
        ref={keywordsRef}
        className={`${styles.keywords}`}
        style={{ display: hideKeywords ? "none" : "block" }}
      >
        <p>Business Design</p>
        <p>Service Design</p>
        <p>Facilitation</p>
      </div>
      <div
        ref={yearsRef}
        className={`${styles.years}`}
        style={{ display: hideYears ? "none" : "block" }}
      >
        <p>2015</p>
        <p>2016</p>
        <p>2017</p>
        <p>2018</p>
        <p>2019</p>
        <p>2020</p>
        <p>2021</p>
        <p>2022</p>
        <p>2023</p>
        <p>2024</p>
      </div>
    </div>
  );
}
