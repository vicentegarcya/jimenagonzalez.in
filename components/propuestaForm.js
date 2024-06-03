import { useContext, useState } from "react";
import styles from "./propuestaForm.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSpring, animated } from "react-spring";
import { useIntl } from "react-intl";
import { isPlayingContext } from "@/context/context";

export default function PropuestaForm({ service, setService }) {
  const [state, setState] = useState("idle");
  const { isDesktop } = useContext(isPlayingContext);
  const intl = useIntl();

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

  const handleSetService = (_service) => {
    console.log("_service:", _service, "service:", service);
    if (service === _service) {
      setService("");
    } else {
      setService(_service);
    }
  };

  return (
    <div className={styles.propuesta_form}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {intl.formatMessage({ id: "HI_JIMENA_IM" })}{" "}
          <input
            name="name"
            value={formik.values.name}
            placeholder={intl.formatMessage({ id: "TYPE_YOUR_NAME" })}
            onChange={formik.handleChange}
            style={{ minWidth: "32.5%", width: "32.5%" }}
          ></input>
          {intl.formatMessage({ id: "I_WORK_AT" })}{" "}
          <input
            name="company"
            value={formik.values.company}
            placeholder={intl.formatMessage({ id: "TYPE_YOUR_COMPANYS_NAME" })}
            onChange={formik.handleChange}
            style={{ minWidth: "56%" }}
          ></input>{" "}
          {intl.formatMessage({ id: "AND_I_HAVE_AN_IDEA_OR_NEED_RELATED_TO" })}{" "}
          <span
            style={{
              background: service === "estrategia" ? "#282C32" : undefined,
              color: service === "estrategia" ? "#F8F8F8" : undefined,
            }}
            onClick={() => handleSetService("estrategia")}
          >
            {intl.formatMessage({ id: "STRATEGY" })}
          </span>{" "}
          <br></br>
          <span
            style={{
              background:
                service === "diseño-de-servicios" ? "#282C32" : undefined,
              color: service === "diseño-de-servicios" ? "#F8F8F8" : undefined,
            }}
            onClick={() => handleSetService("diseño-de-servicios")}
          >
            {intl.formatMessage({ id: "SERVICE_DESIGN" })}
          </span>{" "}
          <span
            style={{
              background: service === "web" ? "#282C32" : undefined,
              color: service === "web" ? "#F8F8F8" : undefined,
            }}
            onClick={() => handleSetService("web")}
          >
            web
          </span>{" "}
          <span
            style={{
              background: service === "branding" ? "#282C32" : undefined,
              color: service === "branding" ? "#F8F8F8" : undefined,
            }}
            onClick={() => handleSetService("branding")}
          >
            branding
          </span>{" "}
          {intl.formatMessage({ id: "WHICH_IS" })}{" "}
          <input
            name="idea"
            value={formik.values.idea}
            onChange={formik.handleChange}
            style={{ minWidth: isDesktop ? "90%" : "85%" }}
            placeholder={intl.formatMessage({
              id: "DESCRIBE_YOUR_IDEA_OR_NEED",
            })}
          ></input>{" "}
          .<br></br>
          <br></br>
          {intl.formatMessage({ id: "CONTACT_ME_AT" })}{" "}
          <input
            name="email"
            value={formik.values.email}
            placeholder={intl.formatMessage({ id: "TYPE_YOUR_EMAIL" })}
            onChange={formik.handleChange}
            style={{ minWidth: "32%", width: isDesktop ? "32%" : "50%" }}
          ></input>{" "}
          {intl.formatMessage({ id: "OR_AT" })}{" "}
          <input
            name="phone"
            value={formik.values.phone}
            placeholder={intl.formatMessage({ id: "TYPE_YOUR_PHONE" })}
            onChange={formik.handleChange}
            style={{ minWidth: "35%", width: "35%" }}
          ></input>{" "}
          .
        </div>
        <button type="submit">
          <p>{intl.formatMessage({ id: "SEND" })}</p>
        </button>
      </form>
      {state === "success" && (
        <animated.div
          style={openAnimation}
          className={styles.form_success}
          onClick={() => setState("idle")}
        >
          <animated.div style={openAnimation}>
            <p>
              {intl.formatMessage({ id: "MENSAJE_ENVIADO_CORRECTAMENTE" })}
              <br></br>
              {intl.formatMessage({
                id: "JIMENA_SE_PONDRA_EN_CONTACTO_CONTIGO",
              })}
            </p>
            <div onClick={() => setState("idle")}>X</div>
          </animated.div>
        </animated.div>
      )}
    </div>
  );
}
