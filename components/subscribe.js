import { useState } from "react";
import axios from "axios";
import styles from "./subscribe.module.css";
import Toast from "./toast";
import Link from "next/link";

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
    <form className={pageWhereLoaded === 'me' ? styles.sobre_mi : undefined} onSubmit={subscribe}>
      <div className={styles.inspirate_email}>
        <input
          required
          id="email-input"
          name="email"
          type="email"
          placeholder="Escribe tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button><Link href={'https://mailchi.mp/cd32dfb448ae/aqu-llega-el-pre-estreno-julio-en-despertar-creativo?e=6fb98a57ae'}>INSPÍRAME AHORA</Link></button>
      </div>
      {state === "Error" && <Toast message={"Ha habido un error :( Revisa tu email y vuelve a intentarlo"}/>}
      {state === "Success" && <Toast message={"¡Ya estás dentro! Recibirás la Newsletter Despertar Creativo cada mes en tu bandeja de entrada"}/>}
    </form>
  );
}

export default Subscribe;
