import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>

      <div className="flex justify-between flex-col-reverse md:flex-row py-20 px-8">
          <div className="space-y-3 basis-9/12 ">
            <h1 className="text-4xl font-bold capitalize border-b-2 border-green-400">About me </h1>
            <h3 className="text-4xl font-bold capitalize">hello, i'm <span className='text-green-500'>mohit dudhat</span> </h3>
            <p className="text-lg font-semibold">Introducing <span className='text-green-500'>mohit dudhat</span> a skilled web developer with a passion for crafting beautiful and functional online experiences. A master of both front-end development and WordPress, Abdur brings a unique blend of technical expertise and creative vision to every project touches.</p>

            <button className='bg-green-500 text-white px-5 py-2 rounded-lg capitalize'>get in touch</button>
            <div className="flex space-x-2">

              <a href="">
              <svg className='w-8 bg-green-500 text-white rounded-full p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
              </a>
              <a href="">
              <svg className='w-8 bg-green-500 text-white rounded-full p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg>
              </a>
              <a href="">
              <svg className='w-8 bg-green-500 text-white rounded-full p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
              </a>
              
            </div>
            
          </div>
          <div className="flex-grow-4">
            <img loading='lazy' width={440} src="https://www.vidyard.com/wp-content/themes/vidyard-website/img/pages/company/about-us/main-image.png.webp" alt="" />
          </div>
      </div>

    </Layout>
  )
}
