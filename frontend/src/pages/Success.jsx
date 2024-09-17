import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <Layout> 
        <div className="py-20 space-x-3 flex flex-col justify-center items-center h-full">
        <svg width="100" height="100" className="text-green-500 dark:text-green-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z" stroke="currentColor" strokeWidth="3"></path></svg>
        <h1 className="text-3xl font-bold  text-green-500 dark:text-green-300">Success</h1>
        <p className=" text-gray-500 dark:text-gray-400">Your message has been sent successfully</p>
        <div className="mt-6">
          <Link to="/contact" className="px-4 py-2 bg-green-500 text-white rounded-md">Go back</Link>
        </div>
        </div>

    </Layout>
  )
}
