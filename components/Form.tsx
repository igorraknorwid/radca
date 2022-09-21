/* eslint-disable react/display-name */

import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

interface IFormInput {
  name: string;
  email: string;
  message: string;
  rodo: boolean;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    const addMessage = () => {
      console.log(data);
      // const response = axios.post(
      //   `https://sheltered-river-97651.herokuapp.com/api/forms`,
      //   {
      //     data,
      //   }
      // );
      // return response;
    };
    async function postMessage() {
      try {
        const res = await addMessage();
        // console.log(res.data);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        alert(message);
      }
    }

    postMessage();
    reset();
  };
  return (
    <section className='bg-white text-black py-20 px-5'>
      <p className='mb-16 text-base uppercase'>
        Skontaktuj się z nami za pośrednictwem formularza.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='form flex flex-col'>
        <Input
          placeholder='Imię i nazwisko'
          className='border px-4 py-2 mb-5 text-black text-lg font-medium  outline-none'
          id='name'
          type='text'
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <p className='text-red-600 text-sm'>Please fill out this field.</p>
        )}

        <Input
          placeholder='Adres email*'
          id='email'
          type='text'
          className='border px-4 py-2 mb-5 text-black text-lg font-medium outline-none'
          {...register("email", { required: true, pattern: /^\d{9}$/ })}
        />

        {errors?.email?.type === "required" && (
          <p className='text-red-600 mb-5 text-sm'>
            Please fill out this field.
          </p>
        )}

        <textarea
          placeholder='Treść zapytania'
          id='message'
          className='border px-4 py-4 mb-5 text-black text-lg font-medium outline-none h-40'
          {...register("message", { required: true })}
        />
        {errors?.message?.type === "required" && (
          <p className='text-red-600 mb-5  text-sm'>
            Please fill out this field.
          </p>
        )}
        <p className='text-sm'>
          Twoje dane przesyłane przez formularz są chronione. Mimo tego, prosimy
          nie umieszczać w zapytaniu danych uznawanych za wrażliwe.
        </p>
        <div className='my-10'>
          <div className='flex justify-center items-center gap-x-5 mx-auto'>
            <Input
              id='checkbox'
              type='checkbox'
              className='h-5 w-5'
              {...register("rodo", { required: true })}
            />
            <p className='text-lg'>Polityka prywatności</p>
          </div>
          {errors?.rodo?.type === "required" && (
            <p className='text-red-600 mb-5 text-sm'>
              Please fill out this field.
            </p>
          )}
        </div>
        <p className='text-sm'>
          Wyrażam zgodę na przetwarzanie moich danych osobowych i akceptuję
          treść Polityki prywatności.
        </p>
        <div className='mt-10'>
          <input
            className='border hover:border-black bg-slate-100 hover:bg-black hover:text-white  font-semibold cursor-pointer py-6 px-10 text-xl transition  duration-700 ease-in-out'
            type='submit'
            value='Wyślij'
          />
        </div>
      </form>
    </section>
  );
};

export default Form;
