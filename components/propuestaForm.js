import { useState } from "react";
import styles from "./propuestaForm.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSpring, animated } from "react-spring";

export default function PropuestaForm({service, setService}) {
  const [state, setState] = useState("idle");

  const validationSchema = yup.object({
    name: yup.string().required("Escribe tu nombre"),
    company: yup.string().required("Escribe el nombre de tu empresa"),
    idea: yup.string().required("Escribe tu idea"),
    email: yup
      .string()
      .email("Escribe un email válido")
      .required("Escribe tu email"),
    phone: yup.string().min(9, "Escribe un teléfono válido"),
  });

  const initialState = {
    name: "",
    company: "",
    service: "",
    idea: "",
    email: "",
    phone: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, service }),
      }).then((res) => {
        if (res.status === 200) {
          setState("success");
          resetForm();
        }
      });
    },
  });

  const openAnimation = useSpring({
    opacity: state === "success" ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <div className={styles.propuesta_form}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          Hola Jimena, soy{" "}
          <input
            name="name"
            value={formik.values.name}
            placeholder="(escribe tu nombre)"
            onChange={formik.handleChange}
            style={{ minWidth: "32.5%", width: "32.5%" }}
          ></input>
          . Trabajo en{" "}
          <input
            name="company"
            value={formik.values.company}
            placeholder="(escribe el nombre de tu empresa)"
            onChange={formik.handleChange}
            style={{ minWidth: "56%" }}
          ></input>{" "}
          y tengo una idea o necesidad relacionada con{" "}
          <span
            style={{
              background: service === "estrategia" ? "#282C32" : undefined,
              color: service === "estrategia" ? "#F8F8F8" : undefined,
            }}
            onClick={() => setService("estrategia")}
          >
            estrategia
          </span>{" "}<br></br>
          <span
            style={{
              background:
                service === "diseño-de-servicios" ? "#282C32" : undefined,
              color: service === "diseño-de-servicios" ? "#F8F8F8" : undefined,
            }}
            onClick={() => setService("diseño-de-servicios")}
          >
            diseño de servicios
          </span>{" "}
          <span
            style={{
              background: service === "web" ? "#282C32" : undefined,
              color: service === "web" ? "#F8F8F8" : undefined,
            }}
            onClick={() => setService("web")}
          >
            web
          </span>{" "}
          <span
            style={{
              background: service === "branding" ? "#282C32" : undefined,
              color: service === "branding" ? "#F8F8F8" : undefined,
            }}
            onClick={() => setService("branding")}
          >
            branding
          </span>{" "}
          , que es{" "}
          <input
            name="idea"
            value={formik.values.idea}
            onChange={formik.handleChange}
            style={{ minWidth: "90%" }}
            placeholder="(describe tu idea o necesidad)"
          ></input>{" "}
          .<br></br><br></br>Puedes contactarme en{" "}
          <input
            name="email"
            value={formik.values.email}
            placeholder="(escribe tu e-mail)"
            onChange={formik.handleChange}
            style={{ minWidth: "32%", width: "32%" }}
          ></input>{" "}
          o en{" "}
          <input
            name="phone"
            value={formik.values.phone}
            placeholder="(escribe tu teléfono)"
            onChange={formik.handleChange}
            style={{ minWidth: "35%", width: "35%" }}
          ></input>{" "}
          .
        </div>
        <button type="submit"><p>ENVIAR</p></button>
      </form>
      {state === "success" && (
        <animated.div
          style={openAnimation}
          className={styles.form_success}
          onClick={() => setState("idle")}
        >
          <animated.div style={openAnimation}>
            <p>
              Mensaje enviado correctamente.<br></br> Jimena se pondrá en
              contacto contigo en breve.
            </p>
            <div onClick={() => setState("idle")}>X</div>
          </animated.div>
        </animated.div>
      )}
    </div>
  );
}
