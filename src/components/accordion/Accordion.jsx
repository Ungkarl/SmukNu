import styles from "./accordion.module.css";
import { useState, useRef, useEffect } from "react";
import { useQuestions } from "../../hooks/useQuestions";
import ReactHtmlParser from "react-html-parser";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className={styles.accordion}>
      <div
        className={styles["accordion-title"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2> <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`${styles["accordion-content"]} ${
          isOpen ? styles.open : ""
        }`}
        ref={contentRef}
      >
        <div className={styles["accordion-content-inner"]}>
          {ReactHtmlParser(content)}
        </div>
      </div>
    </div>
  );
};

const AccordionContainer = () => {
  const questions = useQuestions(); // Henter spørgsmålene her
  console.log(questions);

  return (
    <div className={styles["accordion-container"]}>
      {questions &&
        questions.map((q, index) => (
          <Accordion key={index} title={q.question} content={q.answer} />
        ))}
    </div>
  );
};

export default AccordionContainer;
