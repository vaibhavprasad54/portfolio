import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../public/assets/astronaut";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle, AiFillInstagram, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';

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
      <div className="max-w-[1220px] m-auto px-7 sm:px-2 py-16 w-full">
        <h2>Contact Me!</h2>

        <div class="container mx-auto pt-5">
          <div class="lg:flex">
            <div class="xl:w-2/5 lg:w-2/5 bg-blue-400 py-5 sm:py-14 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none p-2">
              <div className="flex items-center justify-center sm:w-72 sm:ml-20">
               <Lottie options={defaultOptions} />
              </div>

              <div className="text-center px-10">
                <p className="font-semibold text-xl text-white">Connect with me if you're searching for someone to build robust, fast and modern websites and web-apps!</p>
              </div>

              <div className="flex items-center justify-center my-4 sm:my-0 space-x-5 w-full sm:h-40 sm:items-end">
                        <div className="rounded-full bg-gray-100 p-2 sm:p-3 mt-2 cursor-pointer hover:text-blue-800 hover:scale-105 ease-in duration-200">
                            <FaLinkedinIn className="text-base" />
                        </div>
                        <div className="rounded-full bg-gray-100 p-2 sm:p-3 mt-2 cursor-pointer hover:text-blue-500 hover:scale-105 ease-in duration-200">
                            <FaTwitter className="text-base" />
                        </div>
                        <div className="rounded-full bg-gray-100 p-3 mt-2 cursor-pointer hover:text-pink-600 hover:scale-105 ease-in duration-200">
                            <AiOutlineInstagram className="text-base" />
                        </div>
                        <div className="rounded-full bg-gray-100 p-2 sm:p-3 mt-2 cursor-pointer hover:text-black hover:scale-105 ease-in duration-200">
                            <FaGithub className="text-base" />
                        </div>
                    </div>

            </div>
            <div class="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full xl:pr-5 xl:pl-0 rounded-tr rounded-br">
              <form
                ref={form} onSubmit={sendEmail}
                id="contact"
                class="bg-white dark:bg-gray-800 py-4 px-6 sm:px-12 rounded-tr rounded-br"
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
               (<div className='bg-green-400 pl-12 font-light text-base text-black px-2 py-2 rounded-[4px]'> <h4 className="flex items-center">Thank you for contacting me, I have recieved your mail and will reply ASAP! <AiFillCheckCircle className="ml-2" /> </h4> </div>)
                : (<div className='hidden bg-red-400 pl-12 font-light text-base text-black px-2 py-2 rounded-[4px]'> <h4 className="flex items-center">Mail not sent, check input fields and try again! <AiFillCloseCircle className="ml-2" /> </h4> </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
