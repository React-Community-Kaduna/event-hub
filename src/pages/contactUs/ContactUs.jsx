import coverimage from "../../assets/images/coverImage.jpeg";

const ContactUs = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative">
      <div className="w-[100vw] h-[300px] md:h-[300px] relative">
        <img src={coverimage} alt="background image" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(53,87,194,0.9)] to-[rgba(53,87,194,0.9)] via-[rgba(45,44,60,0.9)20%]"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 grid gap-5">
        <h1 className="text-white text-center text-base md:text-2xl font-[700] font-montserrat">
        Get in Touch with EventHub
        </h1>
      </div>
    </div>
    <div className="px-5 font-openSans max-w-5xl m-auto pt-5 my-10">
    <h1 className="text-2xl font-medium text-[#3557c2]">Contact Us</h1>
    <h3>Get in Touch with EventHub</h3>
 <p>We’re always happy to assist you with any inquiries, feedback, or technical support needs regarding EventHub.</p>
 <form className="flex flex-col gap-5 md:flex-row justify-between items-stretch my-4">
  <div className="grid gap-4 rounded-md w-full md:w-1/2">
    <div className="flex flex-col gap-1">
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required className="border border-gray-400 h-10 pl-4 rounded-md focus:border-[#3557c2] outline-none" placeholder="Jane"/>  
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" className="border border-gray-400 h-10 pl-4 rounded-md focus:border-[#3557c2] outline-none"  required placeholder="Doe"/>  
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="firstName">Email</label>
      <input type="email" id="lastName" name="lastName" className="border border-gray-400 h-10 pl-4 rounded-md focus:border-[#3557c2] outline-none"  required placeholder="example@gmailcom"/>  
    </div>
  </div>
  <div className="flex flex-col gap-1 w-full md:w-1/2 rounded-md">
    <label htmlFor="message">Your message</label>
    <textarea name="message" id="message" className="border border-gray-400 pl-4 rounded-md focus:border-[#3557c2] outline-none h-full min-h-[200px] md:min-h-16" ></textarea>
    <button className="bg-[#3557c2] text-white p-2 rounded-md mt-5">Send</button>
  </div>
 </form>
<p className="text-lg">Feel free to contact us through any of channels below,<br/> and we’ll get back to you as soon as possible</p>.
    </div>
    </section>
  )
}

export default ContactUs