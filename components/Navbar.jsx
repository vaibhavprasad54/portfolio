import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai" 
import { FaGithub, FaLinkedinIn } from "react-icons/fa" 
import { BsFillPersonLinesFill } from "react-icons/bs" 
import  logo from "../public/assets/logo.svg"
import { useEffect, useState } from "react"



const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl bg-slate-100 z-50' : 'fixed w-full h-20 bg-slate-100 z-50'}>
        <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
            <Link href="/">
                <Image src={logo} alt="" width={180} height={50} className="w-36 sm:w-40 cursor-pointer" />
            </Link>
            <div>
            <ul className="hidden md:flex">
                <Link href="/"> 
                    <li className="ml-10 text-sm uppercase hover:border-b tracking-widest font-medium"> Home </li>
                </Link> 
                <Link href="/#about"> 
                    <li className="ml-10 text-sm uppercase hover:border-b tracking-widest font-medium"> About </li>
                </Link>  
                <Link href="/#projects"> 
                    <li className="ml-10 text-sm uppercase hover:border-b tracking-widest font-medium"> Projects </li>
                </Link> 
                <Link href="/#contact"> 
                    <li className="ml-10 text-sm uppercase hover:border-b tracking-widest font-medium"> Contact </li>
                </Link> 
            </ul>
            <div className="md:hidden cursor-pointer" onClick={handleNav}>
                <AiOutlineMenu size={25} />
            </div>
        </div>
        </div>

        
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70": ""}>            {/* Overlay shadow on hamburger click */}
            <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500": "fixed left-[-100%] top-0 p-10 ease duration-500"}>
                <div>
                <div className="flex w-full items-center justify-between">
                    <Image src={logo} alt="" width={140} height={20}  />
                    <div onClick={handleNav} className="rounded-full shadow-lg text-xs sm:text-sm shadow-gray-400 p-[6px] sm:p-2 cursor-pointer">
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                    <p className="w-[85%] md:w-[90%] py-4"> Let's create superb user-interfaces! </p>
                </div>
            </div>
            <div className="py-4 flex flex-col">
                <ul className="uppercase">
                    <Link href="/"> <li className="py-3 font-medium text-sm"> Home </li> </Link>
                    <Link href="/#about"> <li className="py-3 font-medium text-sm"> About </li> </Link>
                    <Link href="/#projects"> <li className="py-3 font-medium text-sm"> Project </li> </Link>
                    <Link href="/#contact"> <li className="py-3 font-medium text-sm"> Contact </li> </Link>
                </ul>

                <div className="pt-40">
                    <p className="uppercase tracking-widest text-blue-900"> Let's Connect </p>
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                        <Link href="https://www.linkedin.com/in/vaibhav-prasad-495451166/">
                        <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-105 ease-in duration-200">
                            <FaLinkedinIn />
                        </div>
                        </Link>
                        <Link href="https://github.com/vaibhavprasad54">
                        <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-105 ease-in duration-200">
                            <FaGithub />
                        </div>
                        </Link>
                        <Link href="mailto:vaibhavprasad2700@gmail.com">
                        <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-105 ease-in duration-200">
                            <AiOutlineMail />
                        </div>
                        </Link>
                        <Link href="https://twitter.com/webdev_07">
                        <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-105 ease-in duration-200">
                            <AiOutlineTwitter />
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar