"use client";
import React, { useState } from "react";
import { Input } from "../components/ui/input";
import cn from "../../lib/utils";
import emailjs from "emailjs-com";

export function SignupFormDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  console.log("Status", status);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      phoneNo: phoneNo,
      message: message,
    };

    emailjs
      .send(
        "service_q67167i", // Replace with your EmailJS service ID
        "template_9p6l126", // Replace with your EmailJS template ID
        templateParams,
        "s4JMors5Pu8pMhyYj" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setPhoneNo("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        Welcome to My Portfolio
      </h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        Your feedback is always welcome!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <label htmlFor="name">Name</label>
            <Input
              id="Name"
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <label htmlFor="phoneno">Phone no</label>
          <Input
            id="phoneno"
            placeholder="+92..."
            type="number"
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="message"
            className="h-20 rounded-lg  focus:border-gray-400  p-2 bg-[#27272A]"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
