import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  senderName: string;
  fromAddress: string;
  message: string;
};

const ContactForm = (props: {mailto: string}) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        console.log('would send data:');
        console.log(data)
        console.log(`to ${props.mailto}`)
    });

    return(
        <form onSubmit={onSubmit}>
            <label>Name:
                <input {...register('senderName', { required: true })} />
                {errors.senderName?.type === 'required' && "A name is required"}
            </label>
            <label>From:
                <input {...register('fromAddress', { required: true })} />
                {errors.fromAddress?.type === 'required' && "A from address is required"}
            </label>
            <label>Message:
                <textarea {...register('message', { required: true })} />
                {errors.message?.type === 'required' && "A message is required"}
            </label>
            <button type='submit'>
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;
