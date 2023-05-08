import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../public/assets/astronaut";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle, AiFillInstagram, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import Link from "next/link";

const Contact = () => {

  const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
      const form = useRef();

      // Send Email using EmailJS
      const sendEmail = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    
        emailjs.sendForm('service_hsbj53n', 'template_evospdq', form.current, 'aI2glAk1hjubO7zKc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setFormValues({ name: "", email: "", message: "" });
      };


      //Form Validation
      useEffect(() => {
        console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
      }
    }, [formErrors])
    
    
    const handleChange = (e) => {
        console.log(e.target)
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }
    
    const validate = (values) => {

        const errors  = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if(!values.name){
            errors.name = "Name is Required!"
        } 
        if(!values.email){
            errors.email = "Email is Required!"
        } else if(!regex.test(values.email)){
            errors.email = "Invalid Email!"
        }
        if(!values.message){
            errors.message = "Message is Required!"
        }else if(values.message.length < 4){
            errors.message = "Message too short!"
        }
    
        return errors;

    }


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <div id="contact" className="w-full">
      <div className="max-w-7xl m-auto px-4 sm:px-2 py-5 pb-5 sm:py-16 w-full">
        <div className="flex container items-end justify-start mb-2 mx-auto px-2">
          <h2>Contact Me!</h2>
          <div className="flex items-end justify-center w-28 sm:w-40 sm:-ml-5 -mb-[20px] sm:-mb-1 h-[6rem]">
                <Lottie options={defaultOptions} />
          </div>
        </div>

        <div class="container flex items-center justify-center mx-auto pt-5">
            <div class=" w-full px-2 h-full xl:pr-5 xl:pl-0 rounded-lg">
              <form
                ref={form} onSubmit={sendEmail}
                id="contact"
                class="bg-white dark:bg-gray-800 py-4 px-6 sm:px-12 rounded-lg"
              >
                <h1 class="text-2xl sm:text-4xl text-gray-800 mt-4 sm:mt-5 dark:text-white font-extrabold mb-2 sm:mb-6">
                  Get in touch!
                </h1>
                <div class="flex flex-col xl:flex w-full flex-wrap justify-center mb-6">
               
                    <div class="flex flex-col py-5 sm:py-2">
                      <label
                        for="full_name"
                        class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Name
                      </label>
                      <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={handleChange}
                        class="shadow-sm bg-gray-900 border border-gray-600 text-gray-200 text-sm rounded-md block w-full p-2.5"
                        placeholder="Enter Name"
                        aria-label="enter your full name input"
                      />
                    </div>
                
                 
                    <div class="flex flex-col py-2">
                      <label
                        for="email"
                        class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        class="shadow-sm bg-gray-900 border border-gray-600 text-gray-200 text-sm rounded-md block w-full p-2.5"
                        placeholder="Enter Email"
                        aria-label="enter your email input"
                      />
                    </div>
                  
                </div>
                <div class="flex w-full flex-wrap">
                  <div class="w-2/4 max-w-xs">
                    
                  </div>
                </div>
                <div class="w-full mt-2 sm:mt-6">
                  <div class="flex flex-col">
                    <label
                      class="text-sm font-semibold text-gray-800 dark:text-white mb-2"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Enter your message"
                      name="message"
                      class="bg-gray-900 border border-gray-600 text-gray-200 mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-gray-300"
                      rows="8"
                      id="message"
                      value={formValues.message}
                      onChange={handleChange}
                      aria-label="enter your message input"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full px-7 py-2 mt-10 mb-5 rounded-md shadow-none bg-blue-600 hover:bg-blue-700">
                    Send
                  </button>
                </div>
              </form>

              {Object.keys(formErrors).length === 0 && isSubmit ?
               (<div className='bg-green-600 mt-1 pl-12 font-light text-base text-gray-800 px-2 py-2 rounded-[4px]'> <h4 className="flex items-center">Thank you for contacting me, I have recieved your mail and will reply ASAP! <AiFillCheckCircle className="ml-2" /> </h4> </div>)
                : (<div className='hidden bg-red-400 mt-1 pl-12 font-light text-base text-gray-800 px-2 py-2 rounded-[4px]'> <h4 className="flex items-center">Mail not sent, check input fields and try again! <AiFillCloseCircle className="ml-2" /> </h4> </div>)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
