"use client";

import { Form, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import Button from "../ui/Button";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  return (
    <Form
      action={"/api/form"}
      encType="application/json"
      control={control}
      onSuccess={() => {
        toast.success("Message sent succesfully.");
      }}
      onError={() => {
        toast.error("Message failed to send.");
      }}
      className="flex flex-col"
    >
      <div className={`flex flex-col ${!errors.name && "mb-5"}`}>
        <label htmlFor="name">
          <span className="text-red-500">*</span>Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Jiří Šimeček"
          autoComplete="name"
          className="rounded-md border-2 border-bgColor bg-bgColor px-5 py-3"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )}
      </div>
      <div className={`flex flex-col ${!errors.email && "mb-5"}`}>
        <label htmlFor="email">
          <span className="text-red-500">*</span>Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="jirulak02@gmail.com"
          autoComplete="email"
          className="rounded-md border-2 border-bgColor bg-bgColor px-5 py-3"
          {...register("email", { required: true, pattern: /^.+@.+\..+$/i })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-sm text-red-500">Provide a valid email format!</p>
        )}
      </div>
      <div className={`flex flex-col ${!errors.message && "mb-5"}`}>
        <label htmlFor="message">
          <span className="text-red-500">*</span>Message:
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Your message here"
          className="rounded-md border-2 border-bgColor bg-bgColor px-5 py-3"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )}
      </div>
      <Button submitButton isSubmitting={isSubmitting}>
        {isSubmitting ? "Submitting" : "Submit"}
      </Button>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 w-80 border-2 border-priColor",
          },
          error: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 w-80 border-2 border-red-500",
          },
        }}
      />
    </Form>
  );
}
