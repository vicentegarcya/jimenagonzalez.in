import { useEffect, useState } from "react";
import styles from "./toast.module.css";

export default function Toast({ message }) {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowToast(false), 5000);
  });

  return (
    <div>
      { showToast && <div className={styles.toast}>{message}</div> }
    </div>
  );
}
