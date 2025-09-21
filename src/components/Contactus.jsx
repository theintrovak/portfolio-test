import React from 'react'
import Input from "../components/Input";
import Button from "../components/button";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import conf from '../conf/conf'
import { useForm } from 'react-hook-form'


function Contactus() {
    const form = useRef();
    const { isSubmitting } = useForm()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(conf.serviceid, conf.templateid, form.current, conf.publickey)
            .then(
                () => {
                    alert("Message Sent Successfully")
                    form.current.reset();
                },
                (error) => {
                    alert("error in sending message:  " + error.text);
                }
            )
    }
    return (
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4" >
                <Input type="text" placeholder="Your Name" name="user_name" required />
                <Input type="email" placeholder="Your Email" name="user_email" required />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 outline-none"
                    rows="4"
                    required
                ></textarea>
                <Button variant="secondary" type="submit"  >{(isSubmitting) ? "sending..." : "send Message"}</Button>
            </form>
        </div>
    )
}

export default Contactus