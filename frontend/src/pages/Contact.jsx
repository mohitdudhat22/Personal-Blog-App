import React from 'react'
import Layout from '../components/Layout'

export default function Contact() {

  return (
    <Layout>
      <div className="bg-gray-100 py-10 flex justify-around items-center flex-col md:flex-row space-y-3">
        <div className="bg-white p-10 rounded-lg">
            <div className="text-center text-3xl text-gray-700 mb-2 capitalize">
                Contact me
            </div>
            <div className="flex justify-center items-center">
                <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORM}/>
                <input type="hidden" name="subject" value="Contact From mohit dudhat"/>
                {/* <input type="hidden" name="redirect" value="https://abdurrahim.netlify.app/"/> */}
                <input type="hidden" name="redirect" value="https://react-blog-localstorage.vercel.app/sucess" />
                    <div className="w-96">
                        <div className="flex flex-col mb-2">
                            <label className="text-gray-700">Name</label>
                            <input type="text" name='name' className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required/>
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-gray-700">Email</label>
                            <input type="email" name='email' className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required/>
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-gray-700">Message</label>
                            <textarea name="message" id="" cols="30" rows="5" className="border border-gray-300 px-2 py-1 rounded resize-none focus:outline-green-500" required aria-required></textarea>
                        </div>
                        
                        <div className="flex flex-col mb-2">
                            <button className="bg-green-500 text-white px-2 py-1 rounded capitalize">contact</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className=" space-y-3">
          <div className="bg-white px-8 py-4 rounded-md flex justify-center items-center flex-col">
            <svg className='text-green-500 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
            <div className="text-gray-700 text-xl font-semibold mb-2">Address</div> 
            <div className="text-gray-600">Dhaka, Bangladesh</div>
          </div>
          <div className="bg-white px-8 py-4 rounded-md flex justify-center items-center flex-col">
            <svg className='text-green-500 w-10 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
            <div className="text-gray-700 text-xl font-semibold mb-2">Phone</div> 
            <div className="text-gray-600">+880 1711 111 111</div>
          </div>
          <div className="bg-white px-8 py-4 rounded-md flex justify-center items-center flex-col">
           <svg className='text-green-500 w-10 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
            <div className="text-gray-700 text-xl font-semibold mb-2">Email</div> 
            <div className="text-gray-600">rahim@mailinator.com</div>
          </div>
        </div>
      </div>
    </Layout>
    
  )
}
