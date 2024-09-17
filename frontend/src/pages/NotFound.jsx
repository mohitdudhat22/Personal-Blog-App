import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Layout>
      <div className="flex justify-center flex-col items-center py-32 bg-gray-100">
        <h1 className="text-6xl uppercase font-black">404 Not Found</h1>
        <p className="mt-5 text-3xl leading-9 tracking-tight text-gray-900  ">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-8 rounded-md shadow px-5 py-4 bg-green-500 text-white uppercase tracking-wider font-semibold text-lg">Go back home</Link>
      </div>
    </Layout>
  )
}
