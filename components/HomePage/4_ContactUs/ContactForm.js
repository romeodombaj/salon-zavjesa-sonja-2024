"use client";

import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./ContactForm.module.css";
import Button from "../../UI/Button";
import axios from "axios";
import Loader from "@/components/UI/Loader";
import Error from "@/components/UI/Error";
import Success from "@/components/UI/Success";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const recaptchaRef = useRef(null);

  const onNameChange = (e) => {
    setName(e.currentTarget.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };

  const onSubjectChange = (e) => {
    setSubject(e.currentTarget.value);
  };

  const onReCAPTCHAChange = (token) => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    try {
      setIsLoading(true);
      const data = {
        name,
        subject,
        email,
        text: description,
        token,
      };

      await axios.post("/api/sendMail", data);
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error onClose={() => setIsError(false)} />}
      {isSuccess && <Success onClose={() => setIsSuccess(false)} />}
      <form onSubmit={onFormSubmit} className={styles.wrapper}>
        <Input onChange={onNameChange} value={name} label="Ime" required />
        <Input
          onChange={onEmailChange}
          value={email}
          label="Email"
          required
          type="email"
        />
        <Input
          value={subject}
          onChange={onSubjectChange}
          label="Naslov"
          required
        />
        <Input
          isTextArea={true}
          onChange={onDescriptionChange}
          value={description}
          label="Poruka"
          required
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY} // Replace with your actual site key
          size="invisible"
          badge="bottomleft" // Options: "bottomright", "bottomleft", or "inline"
          onChange={onReCAPTCHAChange}
        />
        <div className={styles[`button-wrapper`]}>
          <Button type="submit">POŠALJI</Button>
        </div>
      </form>
    </>
  );
}
