import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo,setPhoneNo] = useState("")
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  console.log("statue",status)

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      phoneNo:phoneNo,
      message: message,
    };

    emailjs
      .send(
        "service_q67167i",    // Replace with your EmailJS service ID
        "template_9p6l126",   // Replace with your EmailJS template ID
        templateParams,
        "s4JMors5Pu8pMhyYj"        // Replace with your EmailJS user ID
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
    <div className="w-full flex md:justify-start justify-center">
      <form className="sm:w-1/2 w-full flex flex-wrap gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none border border-gray-500 bg-transparent px-2 w-full py-2 font-fira_code text-base"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="email"
          className="outline-none border border-gray-500 bg-transparent px-2 w-full py-2 font-fira_code text-base"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
         <input
          type="number"
          className="outline-none border border-gray-500 bg-transparent px-2 w-full py-2 font-fira_code text-base"
          placeholder="Phone number"
          onChange={(e) => setPhoneNo(e.target.value)}
          value={phoneNo}
          required
        />
        <textarea
          className="outline-none pt-2 font-fira_code border border-gray-500 bg-transparent px-2 w-full h-[100px]"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        ></textarea>
        <button
          type="submit"
          className="w-[71px] h-[37px] border border-gray-500 hover:border-[#C778DD] font-fira_code font-medium hover:font-bold flex justify-center items-center"
        >
          Send
        </button>
      </form>
      {/* {status && <p className="mt-4 text-center">{status}</p>} */}
    </div>
  );
};

export default ContactForm;
