import { useState } from "react";
import styles from "./propuestaForm.module.css";
import { useFormik } from "formik";
import * as yup from "yup";

export default function PropuestaForm() {
  const [service, setSrevice] = useState('');
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
      console.log(values);
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <div>
          Hola Jimena, soy <input name="name" value={formik.values.name} placeholder="" onChange={formik.handleChange}></input><i>(escribe tu nombre)</i>.<br></br>
          Trabajo en <input name="company" value={formik.values.company} placeholder="" onChange={formik.handleChange}></input><i>(escribe el nombre de tu empresa)</i> y tengo
          una idea o necesidad relacionada con <span>#estrategia</span> #diseño-de-servicios
          #web #branding , que es <input name="idea" value={formik.values.idea} placeholder="" onChange={formik.handleChange} style={{minWidth: '100%'}}></input>{" "}
          <i>(describe tu idea o necesidad)</i>.<br></br>Puedes contactarme en <input name="email" value={formik.values.email} placeholder="" onChange={formik.handleChange}></input> <i>(escribe tu e-mail)</i> o en <input name="phone" value={formik.values.phone} placeholder="" onChange={formik.handleChange}></input>{" "}
          <i>(escribe tu teléfono)</i>.
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
