import { SubmitHandler, useForm } from "react-hook-form";

interface ContactFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>();
  const onSubmit: SubmitHandler<ContactFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("firstName", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName && <p>This field is required</p>}
      <input
        type="text"
        placeholder="Last name"
        {...register("lastName", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      {errors.lastName && <p>This field is required</p>}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      <textarea
        placeholder="Message"
        {...register("message", { required: true, pattern: /^.+$/i })}
        aria-invalid={errors.message ? "true" : "false"}
      />
      <input type="submit" />
    </form>
  );
}
