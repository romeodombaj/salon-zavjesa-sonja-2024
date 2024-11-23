"use client";

import { Fragment, useState, useEffect } from "react";
import useScrollStop from "../hooks/use-scroll-stop";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const portalElement = document.getElementById("overlays");

  useScrollStop();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted
    ? ReactDOM.createPortal(
        <>
          {
            <Fragment>
              <div className={styles.backdrop} onClick={props.onClose} />
              <div className={styles.wrapper}>{props.children}</div>;
            </Fragment>
          }
        </>,
        document.body
      )
    : null;
}
