'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const { push } = useRouter();
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    function handleClick() {
        setPasswordUpdated(true);
        //wait for 2 seconds.
        setTimeout(() => {
        setPasswordUpdated(false);
        push('/login');
        }, 2000);
    }
    return (
      <div className="container mx-auto py-8">
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <h1 className="text-center font-bold mb-3">Reset Password</h1>
          <h2 className="text-md mb-6 text-center text-gray-400">OTP Verfication</h2>
         {passwordUpdated && <div className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Password successfully updated!</span> Now going back to login.
            </div>
            </div>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="otp">
            OTP
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="otp"
              name="otp"
              placeholder="****"
            />
          </div>
          <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="password">Password</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="password" id="password" name="password" placeholder="********"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="confirm-password">Confirm Password</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
      </div>  
          <button
            className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            type="button"
            onClick={handleClick}
         >
            Update Password
          </button>
        </form>
      </div>
    );
  }
  