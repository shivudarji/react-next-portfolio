"use client";
import { useState, type FormEvent } from "react";

const DEFAULT_NOTE = "Opens your email app; nothing is stored on this site.";

export default function Contact({ email, phone }: { email: string; phone?: string }) {
  const [note, setNote] = useState(DEFAULT_NOTE);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Hello from ${name}`;
    const body = `${message}\n\n— ${name} (${from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNote(`Your email app should open now. If it didn’t, email me at ${email}.`);
  }

  return (
    <section className="block" id="contact" aria-labelledby="contact-h">
      <div className="sec-head">
        <span className="sec-num">05</span>
        <h2 id="contact-h">Contact</h2>
      </div>
      <div className="contact">
        <div className="reveal">
          <p className="contact-lead">Have a project or a role in mind? Let’s talk.</p>
          <p>
            I usually reply within a day. Email me directly, or use the form — it opens your email app with the
            message ready to send.
          </p>
          <a className="mail" href={`mailto:${email}`}>{email}</a>
          {phone && (
            <p style={{ marginTop: 16 }}>
              Or call / WhatsApp: <a className="mail" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
            </p>
          )}
        </div>
        <form className="reveal" onSubmit={onSubmit} noValidate>
          <label>
            Your name <input name="name" autoComplete="name" required />
          </label>
          <label>
            Your email <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message <textarea name="message" required />
          </label>
          <button className="btn btn-primary" type="submit" style={{ justifyContent: "center" }}>
            Send message
          </button>
          <p className="form-note">{note}</p>
        </form>
      </div>
    </section>
  );
}
