"use client";

import { useState, useTransition } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback({ type: null, message: "" });

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        const payload = (await response.json()) as { message?: string; error?: string };

        if (!response.ok) {
          throw new Error(payload.error || "Something went wrong.");
        }

        setFeedback({
          type: "success",
          message:
            payload.message ||
            "Your request has been received. We will be in touch shortly.",
        });
        setFormState(initialState);
      } catch (error) {
        setFeedback({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "Unable to send your request right now.",
        });
      }
    });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[var(--color-charcoal)]">Name</span>
          <input
            required
            type="text"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-[1.2rem] border border-[var(--color-border)] bg-white/90 px-4 py-3.5 text-[var(--color-charcoal)] outline-none placeholder:text-[var(--color-muted)] focus:border-[rgba(110,35,58,0.28)] focus:shadow-[0_0_0_4px_rgba(110,35,58,0.08)]"
            placeholder="Your full name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[var(--color-charcoal)]">Email</span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-[1.2rem] border border-[var(--color-border)] bg-white/90 px-4 py-3.5 text-[var(--color-charcoal)] outline-none placeholder:text-[var(--color-muted)] focus:border-[rgba(110,35,58,0.28)] focus:shadow-[0_0_0_4px_rgba(110,35,58,0.08)]"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[var(--color-charcoal)]">Phone</span>
          <input
            type="tel"
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-[1.2rem] border border-[var(--color-border)] bg-white/90 px-4 py-3.5 text-[var(--color-charcoal)] outline-none placeholder:text-[var(--color-muted)] focus:border-[rgba(110,35,58,0.28)] focus:shadow-[0_0_0_4px_rgba(110,35,58,0.08)]"
            placeholder="+000 000 000 000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[var(--color-charcoal)]">
            Service type
          </span>
          <select
            required
            value={formState.serviceType}
            onChange={(event) => updateField("serviceType", event.target.value)}
            className="w-full rounded-[1.2rem] border border-[var(--color-border)] bg-white/90 px-4 py-3.5 text-[var(--color-charcoal)] outline-none focus:border-[rgba(110,35,58,0.28)] focus:shadow-[0_0_0_4px_rgba(110,35,58,0.08)]"
          >
            <option value="">Select a service</option>
            <option value="Custom Dressmaking">Custom Dressmaking</option>
            <option value="Alterations & Repairs">Alterations & Repairs</option>
            <option value="Bridal & Event Wear">Bridal & Event Wear</option>
            <option value="Corporate / Uniform Tailoring">
              Corporate / Uniform Tailoring
            </option>
            <option value="Pattern Making">Pattern Making</option>
            <option value="Fabric Consultation">Fabric Consultation</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-[var(--color-charcoal)]">Message</span>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full rounded-[1.2rem] border border-[var(--color-border)] bg-white/90 px-4 py-3.5 text-[var(--color-charcoal)] outline-none placeholder:text-[var(--color-muted)] focus:border-[rgba(110,35,58,0.28)] focus:shadow-[0_0_0_4px_rgba(110,35,58,0.08)]"
          placeholder="Tell us about your design, event, fitting needs, or alteration request."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-burgundy)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(110,35,58,0.25)] hover:-translate-y-0.5 hover:bg-[var(--color-burgundy-deep)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Sending request..." : "Send booking request"}
        </button>

        <p className="text-sm leading-6 text-[var(--color-muted)]">
          We usually reply within one business day.
        </p>
      </div>

      <p
        aria-live="polite"
        className={`min-h-6 text-sm ${
          feedback.type === "error"
            ? "text-[var(--color-burgundy)]"
            : "text-[var(--color-muted)]"
        }`}
      >
        {feedback.message}
      </p>
    </form>
  );
}
