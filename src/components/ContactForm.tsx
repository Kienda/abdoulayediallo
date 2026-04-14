"use client";

import { useState } from "react";

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
        {/* Left */}
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

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 rounded-lg bg-[#1f55c6] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-green-600">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}
        </div>

        {/* Right */}
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
      </div>
    </form>
  );
}
