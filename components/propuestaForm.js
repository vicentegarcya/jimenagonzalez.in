import styles from "./propuestaForm.module.css";

export default function PropuestaForm() {
  return (
    <div className={styles.propuesta_form}>
      <form>
        <fieldset className={styles.temas}>
          <legend>Selecciona los temas:</legend>
          <input type="button" value="#estrategia" />
          <input type="button" value="#diseño" />
          <input type="button" value="#innovacion" />
          <input type="button" value="#arte" />
          <input type="button" value="#tarot" />
          <input type="button" value="#astrologia" />
          <input type="button" value="#creatividad" />
          <input type="button" value="#registros" />
          <input type="button" value="otros" />
        </fieldset>
        <fieldset className={styles.formato}>
          <legend>Selecciona el formato:</legend>
          <input type="button" value="sesión individual" />
          <input type="button" value="formación" />
          <input type="button" value="sesión en equipo" />
          <input type="button" value="colaboración" />
          <input type="button" value="charla" />
          <input type="button" value="sesión en pareja" />
          <input type="button" value="otro" />
        </fieldset>
        <label>Describe tu idea:</label>
      </form>
    </div>
  );
}
