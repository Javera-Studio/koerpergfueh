"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <p className="rounded-sm bg-mint-pale px-6 py-8 font-sans text-base text-petrol">
        Danke für deine Nachricht! Ich melde mich so bald wie möglich bei dir.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {/* Honeypot – für Menschen unsichtbar, Bots füllen es meist aus */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-sans text-sm text-petrol">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-sm border border-mint-pale bg-cream px-4 py-3 font-sans text-base text-petrol outline-none focus:border-mint-deep"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-sans text-sm text-petrol">
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-sm border border-mint-pale bg-cream px-4 py-3 font-sans text-base text-petrol outline-none focus:border-mint-deep"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-sans text-sm text-petrol">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-none rounded-sm border border-mint-pale bg-cream px-4 py-3 font-sans text-base text-petrol outline-none focus:border-mint-deep"
        />
      </div>

      {state.status === "error" && (
        <p className="font-sans text-sm text-red-700">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream disabled:opacity-60"
      >
        {pending ? "Wird gesendet …" : "Nachricht senden"}
      </button>
    </form>
  );
}
