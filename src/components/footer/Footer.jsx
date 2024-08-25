import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="w-full overflow-hidden py-7 bg-bgColor text-textColor border-t border-gray-500">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-6 px-5 sm:px-8 lg:px-16">
    <div className="flex flex-col justify-between">
      <div className="mb-4 inline-flex items-center">
        <Logo width="100px" />
      </div>
      <p className="text-sm text-cyan-50">
        &copy; Copyright 2024. All Rights Reserved by <a href="https://www.linkedin.com/in/alicode6/" className='text-xl'>Barkat Ali</a>.
      </p>
    </div>
    <div className="lg:ml-12">

      <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-cyan-50">
        Company
      </h3>
      <ul>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Features
          </Link>
        </li>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Pricing
          </Link>
        </li>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50" to="/">
            Affiliate Program
          </Link>
        </li>
        <li>
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Press Kit
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-cyan-50">
        Support
      </h3>
      <ul>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Account
          </Link>
        </li>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Help
          </Link>
        </li>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="text-base font-medium text-cyan-50" to="/">
            Customer Support
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-cyan-50">
        Legals
      </h3>
      <ul>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Terms &amp; Conditions
          </Link>
        </li>
        <li className="mb-4">
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className="text-base font-medium text-cyan-50 hover:font-extrabold" to="/">
            Licensing
          </Link>
        </li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default Footer