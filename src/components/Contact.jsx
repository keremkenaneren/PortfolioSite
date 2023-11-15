function Contact() {

    return (
        <div id="contact">
           <div>
               <div className="mt-20 text-center">
                   <h1 className="text-white text-5xl font-bold my-10">Get in touch</h1>
               </div>
               <div>

                   <form className="md:mx-52 mx-5">
                       <div className="grid md:grid-cols-2 md:gap-6">
                           <div className="relative z-0 w-full mb-6 group">
                               <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full
                               text-sm bg-transparent
                               border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-orange-400
                               focus:outline-none focus:ring-0 peer" placeholder=" " required />
                               <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm
                               text-gray-400
                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                               peer-focus:text-orange-400
                               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                               peer-focus:-translate-y-6">Name</label>
                           </div>
                           <div className="relative z-0 w-full mb-6 group">
                               <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full
                               text-sm bg-transparent
                               border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-orange-400
                               focus:outline-none focus:ring-0 peer" placeholder=" " required />
                               <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm
                               text-gray-400
                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                               peer-focus:text-orange-400
                               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                               peer-focus:-translate-y-6">Last name</label>
                           </div>
                       </div>
                       <div className="grid md:grid-cols-2 md:gap-6">
                           <div className="relative z-0 w-full mb-6 group">
                               <input type="email" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full
                               text-sm bg-transparent
                               border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-orange-400
                               focus:outline-none focus:ring-0 peer" placeholder=" " required />
                               <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm
                               text-gray-400
                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                               peer-focus:text-orange-400
                               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                               peer-focus:-translate-y-6">Email</label>
                           </div>
                           <div className="relative z-0 w-full mb-6 group">
                               <input type="tel" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full
                               text-sm bg-transparent
                               border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-orange-400
                               focus:outline-none focus:ring-0 peer" placeholder=" " required />
                               <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm
                               text-gray-400
                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                               peer-focus:text-orange-400
                               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                               peer-focus:-translate-y-6">Phone number</label>
                           </div>
                       </div>
                       <div className="relative z-0 w-full mb-6 group">
                           <textarea name="floating_first_name" id="floating_first_name" className="h-32 block py-2.5 px-2 w-full
                              text-sm bg-transparent
                               border-2 appearance-none text-white border-gray-600 focus:border-orange-400
                              focus:outline-none focus:ring-0 peer" placeholder=" Message" required />
                       </div>

                       <div className="mx-auto text-center">
                           <button type="submit" className="text-opacity-90 w-32 p-2 bg-green-500 text-white hover:opacity-75">Submit now</button>
                       </div>
                   </form>

               </div>
           </div>

        </div>
    );
}

export default Contact ;
