"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { treatmentOptions } from "@/lib/data";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  treatment: string;
  preferredDate: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  treatment: treatmentOptions[0],
  preferredDate: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required";
  if (!values.lastName.trim()) errors.lastName = "Last name is required";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Enter a valid email";
  if (!values.preferredDate.trim()) errors.preferredDate = "Preferred date is required";
  return errors;
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-4 grid gap-2">
      <label htmlFor={id} className="text-[11px] tracking-[0.18em] text-ink-2 uppercase">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-rose">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full appearance-none rounded-14 border bg-cream px-4.5 py-3.75 text-[14.5px] font-light text-ink outline-none focus:border-rose ${
    hasError ? "border-rose" : "border-line"
  }`;
}

const chevronUrl =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235E5866' stroke-width='1.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")";

export default function BookingForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-28 bg-white p-11 text-center shadow-[0_40px_80px_-40px_rgba(42,38,48,.25)]">
        <h3 className="mb-2.5 text-[30px]">Request received</h3>
        <p className="text-sm text-muted">
          We will confirm your slot within 2 hours during opening hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-28 bg-white p-11 shadow-[0_40px_80px_-40px_rgba(42,38,48,.25)]"
    >
      <h3 className="mb-1.5 text-[30px]">Request an appointment</h3>
      <p className="mb-7.5 text-sm text-muted">
        We will confirm your slot within 2 hours during opening hours.
      </p>

      <div className="grid grid-cols-1 gap-4 min-[721px]:grid-cols-2">
        <Field label="First name" id="firstName" error={errors.firstName}>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            onChange={(event) => handleChange("firstName", event.target.value)}
            className={inputClass(!!errors.firstName)}
          />
        </Field>
        <Field label="Last name" id="lastName" error={errors.lastName}>
          <input
            id="lastName"
            name="lastName"
            placeholder="Cooper"
            value={values.lastName}
            onChange={(event) => handleChange("lastName", event.target.value)}
            className={inputClass(!!errors.lastName)}
          />
        </Field>
      </div>

      <Field label="Email" id="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@email.com"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          className={inputClass(!!errors.email)}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 min-[721px]:grid-cols-2">
        <Field label="Treatment" id="treatment">
          <select
            id="treatment"
            name="treatment"
            value={values.treatment}
            onChange={(event) => handleChange("treatment", event.target.value)}
            className={inputClass(false)}
            style={{ backgroundImage: chevronUrl, backgroundRepeat: "no-repeat", backgroundPosition: "right 18px center" }}
          >
            {treatmentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date" id="preferredDate" error={errors.preferredDate}>
          <input
            id="preferredDate"
            name="preferredDate"
            placeholder="Oct 24, 2026"
            value={values.preferredDate}
            onChange={(event) => handleChange("preferredDate", event.target.value)}
            className={inputClass(!!errors.preferredDate)}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 flex w-full items-center justify-center gap-3 rounded-999 bg-ink px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3b3542] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Request Appointment"}
        {status !== "loading" && (
          <span className="flex h-7.5 w-7.5 items-center justify-center rounded-999 bg-white/14">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        )}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-xs text-rose">
          Something went wrong. Please try again.
        </p>
      )}

      <small className="mt-4 block text-center text-xs text-muted">
        By submitting you agree to our privacy policy. We never share your data.
      </small>
    </form>
  );
}
