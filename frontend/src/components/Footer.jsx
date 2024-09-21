import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
                <h5 className="text-xl font-bold mb-6">Features</h5>
                <ul className="list-none footer-links">
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Cool stuff</a>
                    </li>
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Random feature</a>
                    </li>
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Team feature</a>
                    </li>
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Stuff for developers</a>
                    </li>
                    <li>
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Another one</a>
                    </li>
                </ul>
                </div>
                <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
                <h5 className="text-xl font-bold mb-6">Resources</h5>
                <ul className="list-none footer-links">
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Resource</a>
                    </li>
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Resource name</a>
                    </li>
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Another resource</a>
                    </li>
                    <li>
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Final resource</a>
                    </li>
                </ul>
                </div>
                <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
                <h5 className="text-xl font-bold mb-6">About</h5>
                <ul className="list-none footer-links">
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Team</a>
                    </li>
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Locations</a>
                    </li>
                    <li>
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Privacy</a>
                    </li>
                </ul>
                {/*<SocialLinks />*/}
                </div>
                <div className="w-full lg:w-1/4 mb-10 lg:mb-0"> 
                <h5 className="text-xl font-bold mb-6">Help</h5>
                <ul className="list-none footer-links">
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Support</a>
                    </li>
                    <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Help Center</a>
                    </li>
                    <li>
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-500 pb-1">Contact Us</a>
                    </li>
                </ul>
                </div>
                </div>
                <hr className="my-6 border-gray-700"/>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center text-white">
               
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                    <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                        <li>
                        <a href="" className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">About Us</a>
                        </li>
                        <li>
                        <a href="" className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">Blog</a>
                        </li>
                        <li>
                        <a href="" className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">MIT License</a>
                        </li>
                        <li>
                        <a href=""className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                
            </footer>
         {/* End Footer */}

    </div>
  )
}
