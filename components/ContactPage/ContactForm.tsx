"use client";

import { Form, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

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
          placeholder="Jiří Šimeček"
          autoComplete="name"
          className="rounded-md border-2 px-5 py-3"
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
          placeholder="jirulak02@gmail.com"
          autoComplete="email"
          className="rounded-md border-2 px-5 py-3"
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
          rows={4}
          placeholder="Your message here"
          className="rounded-md border-2 px-5 py-3"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )}
      </div>
      <div className="flex">
        <button
          type="submit"
          {...(isSubmitting && { disabled: true })}
          className={`mx-auto rounded-md border-2 px-5 py-3 font-semibold ${
            isSubmitting
              ? "cursor-not-allowed border-gray-300 bg-gray-400 text-gray-300"
              : "border-lime-800 bg-lime-800 text-neutral-200 hover:bg-neutral-200 hover:text-lime-800"
          }`}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </div>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 w-80 border-2 border-lime-800",
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
