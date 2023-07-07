import { useState } from "react";
import styles from "./propuestaForm.module.css";

export default function PropuestaForm() {
  const [temas, setTemas] = useState([]);
  const [formato, setFormato] = useState([]);
  const [idea, setIdea] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "idea") {
      setIdea(e.target.value);
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
        setTemas([...temas].filter(element => element != e.target.value));
      } else if (
        e.target.parentNode.className.split("_")[1].split("_") == "formato"
      ) {
        e.target.classList.remove("seleccionado");
        setFormato([...formato].filter(element => element != e.target.value));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(temas, formato, idea);
  };

  return (
    <div className={styles.propuesta_form}>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.temas}>
          <legend>Selecciona los temas:</legend>
          <input onClick={handleChange} type="button" value="#estrategia" />
          <input onClick={handleChange} type="button" value="#diseño" />
          <input onClick={handleChange} type="button" value="#innovacion" />
          <input onClick={handleChange} type="button" value="#arte" />
          <input onClick={handleChange} type="button" value="#tarot" />
          <input onClick={handleChange} type="button" value="#astrologia" />
          <input onClick={handleChange} type="button" value="#creatividad" />
          <input onClick={handleChange} type="button" value="#registros" />
          <input onClick={handleChange} type="button" value="otros" />
        </fieldset>
        <fieldset className={styles.formato}>
          <legend>Selecciona el formato:</legend>
          <input
            onClick={handleChange}
            type="button"
            value="sesión individual"
          />
          <input onClick={handleChange} type="button" value="formación" />
          <input
            onClick={handleChange}
            type="button"
            value="sesión en equipo"
          />
          <input onClick={handleChange} type="button" value="colaboración" />
          <input onClick={handleChange} type="button" value="charla" />
          <input
            onClick={handleChange}
            type="button"
            value="sesión en pareja"
          />
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
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}
