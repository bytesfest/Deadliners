import React from 'react'


const ContactUs = () => {
  return (
    <div id='contactus' className=' w-full min-h-screen base-background bg-gradient-to-tl pt-20'>
      <div className=' layout flex flex-col justify-center'>
        <div className=' max-w-[650px] w-full mx-auto md:mx-0 flex flex-col gap-20 neu-convex p-12 rounded-[50px]'>
          <div className=' text-3xl font-semibold'>Contact us</div>
          <div className=' flex flex-col gap-6 w-full'>

            <input type="text" name='name' id='name' className=' form__input' placeholder='Your Name' />
            <input type="email" name='email' id='email' className=' form__input' placeholder='Your Email Address' />
            <input type="text" name='message' id='message' className=' form__input' placeholder='Your Message' />

          </div>
          <div className=' py-3 px-8 text-center bg-primary text-xl text-black font-medium cursor-pointer hover:bg-primaryHover transition-all duration-300 ease-out rounded-full sm:w-[300px]'>Submit</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ContactUs