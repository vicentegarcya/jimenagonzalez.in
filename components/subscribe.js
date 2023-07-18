import { useState } from "react";
import axios from "axios";
import styles from "./subscribe.module.css";
import Toast from "./toast";
import Link from "next/link";
import Confetti from "./confetti";

function Subscribe({ pageWhereLoaded }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      console.log(response);
      setState("Success");
      setEmail("");
    } catch (e) {
      console.log(e.response.data.error);
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <form
      id={styles.subscribe_form}
      className={pageWhereLoaded === "me" ? styles.sobre_mi : undefined}
      onSubmit={subscribe}
    >
      <div className={state === "Error" ? styles.inspirate_email + ' ' + styles.email_error : styles.inspirate_email}>
        <input
          required
          id="email-input"
          name="email"
          type="email"
          placeholder={state === "Error" ? "Revisa tu email y vuelve a intentarlo" : "Escribe tu email"}
          value={state === "Error" ? "Revisa tu email y vuelve a intentarlo" : email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={(e) => setState("idle")}
        />
      </div>
      <div className={styles.inspirate_cta_div}>
        <button
          disabled={state === "Loading"}
          type="submit"
          className={styles.subscribe_btn}
          onClick={subscribe}
        >
          SUSCRIBIRME
        </button>
        <button>
          <Link
            href={
              "https://mailchi.mp/cd32dfb448ae/aqu-llega-el-pre-estreno-julio-en-despertar-creativo?e=6fb98a57ae"
            }
          >
            INSPÍRAME AHORA
          </Link>
        </button>
      </div>
      {state === "Success" && (
        <div className={styles.confetti_div}>
          <Confetti pageWhereLoaded={pageWhereLoaded} />
        </div>
      )}
    </form>
  );
}

export default Subscribe;
