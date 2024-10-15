"use client"
import { BackgroundBeams } from "./ui/background-beams";

export function ContactUs(){
    return(
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Get in Touch with Us!
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Feel free to reach out to us using the contact form below, and we’ll get back to you as soon as possible. Your feedback and inquiries are important to us, and we’re committed to providing prompt, reliable service to meet your needs.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <div className="mt-5">
      <button 
  type="button"
  className="px-4 py-2 bg-slate-800 text-gray-300 font-bold rounded-2xl hover:bg-blue-600 transition duration-300 cursor-pointer"
>
  Send
</button>


      </div>
      <BackgroundBeams />
    </div>
    )
}
