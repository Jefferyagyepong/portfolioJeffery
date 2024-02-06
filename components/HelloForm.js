import Image from "next/image";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function HelloForm() {
  const [state, handleSubmit] = useForm("maygvdqr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="container">
      <Image
        src="static/jeffery.svg"
        width={150}
        height={150}
        alt="dev jeffery"
      />

      <p> Want to say hello 👋🏿 I&apos;m most definitely game.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors}/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <br />
        <br />

        <button
          type="submit"
          disabled={state.submitting}
          className="form-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default HelloForm;
