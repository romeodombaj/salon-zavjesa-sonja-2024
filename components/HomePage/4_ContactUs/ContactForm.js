"use client";

import { useState } from "react";
import Input from "../../UI/Input";
import styles from "./ContactForm.module.css";
import Button from "../../UI/Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const onNameChange = (e) => {
    setName(e.currentTarget.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };

  return (
    <div className={styles.wrapper}>
      <Input onChange={onNameChange} value={name} label="Ime" />
      <Input onChange={onEmailChange} value={email} label="Email" />
      <Input
        isTextArea={true}
        onChange={onDescriptionChange}
        value={description}
        label="Poruka"
      />
      <div style={{ height: 20 }}></div>
      <Button>POŠALJI</Button>
    </div>
  );
}
