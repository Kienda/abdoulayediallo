"use client";

import { useState } from "react";
import { Icon } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, website: honeypot }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
      setErrorMessage(data.error ?? "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        {/* Contact details */}
        <div className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold text-neutral-700">Full name:</label>
            <input
              id="contact-name"
              className="h-10 w-full rounded-xl border border-neutral-200 px-4 text-sm outline-none focus:border-[#1f55c6]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold text-neutral-700">Email:</label>
            <input
              id="contact-email"
              type="email"
              className="h-10 w-full rounded-xl border border-neutral-200 px-4 text-sm outline-none focus:border-[#1f55c6]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-neutral-700">Message:</label>
          <textarea
            id="contact-message"
            className="h-32 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#1f55c6]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {/* Keep the primary action after every field on both mobile and desktop. */}
        <div className="flex flex-col items-start gap-3 md:col-span-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f55c6] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1848aa] hover:shadow-md disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
          >
            <Icon name="send" className="h-4 w-4" />
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p role="status" className="text-sm font-medium text-green-600">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}
        </div>
      </div>
    </form>
  );
}
