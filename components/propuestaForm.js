import { useState } from "react";
import styles from "./propuestaForm.module.css";

export default function PropuestaForm() {
  const [temas, setTemas] = useState([]);
  const [formato, setFormato] = useState([]);
  const [idea, setIdea] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const handleChange = (e) => {
    if (e.target.name === "idea") {
      setIdea(e.target.value);
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (!e.target.classList.contains("seleccionado")) {
      if (e.target.parentNode.className.split("_")[1].split("_") == "temas") {
        e.target.classList.add("seleccionado");
        setTemas([...temas, e.target.value]);
      } else if (
        e.target.parentNode.className.split("_")[1].split("_") == "formato"
      ) {
        e.target.classList.add("seleccionado");
        setFormato([...formato, e.target.value]);
      }
    } else {
      if (e.target.parentNode.className.split("_")[1].split("_") == "temas") {
        e.target.classList.remove("seleccionado");
        setTemas([...temas].filter((element) => element != e.target.value));
      } else if (
        e.target.parentNode.className.split("_")[1].split("_") == "formato"
      ) {
        e.target.classList.remove("seleccionado");
        setFormato([...formato].filter((element) => element != e.target.value));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      temas,
      formato,
      idea,
      email,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        document
          .querySelectorAll("#__next form > fieldset > input")
          .forEach((e) => e.classList.remove("seleccionado"));
        setState("Success");
        setTimeout(() => {
          setState("idle");
        }, 100);
        setTemas([]);
        setFormato([]);
        setIdea("");
        setEmail("");
      }
    });
  };

  return (
    <div className={styles.propuesta_form}>
      Hola Jimena, soy _______<i>(escribe tu nombre)</i>.<br></br>Trabajo en
      ___________<i>(escribe el nombre de tu empresa)</i> y tengo una idea o
      necesidad relacionada con #estrategia #diseño-de-servicios #web #branding
      , que es ______________________
      ______________ <i>(describe tu
      idea o necesidad)</i>.<br></br>Puedes
      contactarme en __________ <i>(escribe tu e-mail)</i> o en
      ___________ <i>(escribe tu teléfono)</i>.
      {/* <form onSubmit={handleSubmit}>
        <fieldset className={styles.temas}>
          <legend>Selecciona los temas:</legend>
          <input onClick={handleChange} type="button" value="#asesoramiento-estrategico" />
          <input onClick={handleChange} type="button" value="#diseño-de-servicios" />
          <input onClick={handleChange} type="button" value="#diseño-de-experiencia" />
          <input onClick={handleChange} type="button" value="#business" />
          <input onClick={handleChange} type="button" value="#emprendimiento" />
          <input onClick={handleChange} type="button" value="#facilitacion" />
          <input onClick={handleChange} type="button" value="#coaching-creativo" />
          <input onClick={handleChange} type="button" value="#tarot" />
          <input onClick={handleChange} type="button" value="#astrologia" />
          <input onClick={handleChange} type="button" value="otros" />
        </fieldset>
        <fieldset className={styles.formato}>
          <legend>Selecciona el formato:</legend>
          <input
            onClick={handleChange}
            type="button"
            value="proyecto"
          />
          <input onClick={handleChange} type="button" value="acompañamiento" />
          <input
            onClick={handleChange}
            type="button"
            value="sesión 1:1"
          />
          <input onClick={handleChange} type="button" value="charla" />
          <input onClick={handleChange} type="button" value="formación" />
          <input
            onClick={handleChange}
            type="button"
            value="sesión con tu equipo"
          />
          <input onClick={handleChange} type="button" value="colaboración" />
          <input onClick={handleChange} type="button" value="otro" />
        </fieldset>
        <div className={styles.describe_tu_idea}>
          <label>Describe tu idea:</label>
          <textarea
            name="idea"
            value={idea}
            onChange={handleChange}
            placeholder="Escribe aquí..."
            required
          />
        </div>
        <div className={styles.tu_email}>
          <label>Tu email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Escribe aquí..."
            required
          ></input>
        </div>
        <button type="submit">
          ENVIAR
        </button>
        {state === "Success" && (
          <div className={styles.confetti_div}>
          </div>
        )}
      </form> */}
    </div>
  );
}
