"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: Bots füllen unsichtbare Felder aus, echte Nutzer:innen nicht.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success" };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return { status: "error", message: "Bitte fülle alle Felder aus." };
  }

  // TODO: E-Mail-Versand an business.email (koerpergfueh.23@gmail.com)
  // technisch einrichten (z.B. via Resend/Nodemailer) – aktuell wird nur validiert.

  return { status: "success" };
}
