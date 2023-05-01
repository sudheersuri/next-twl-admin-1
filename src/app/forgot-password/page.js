'use client';
import { useRouter } from 'next/navigation';

export default function Login() {
    const { push } = useRouter();
    function handleClick() {
        push('/otp-reset-password')
    }
    return (
      <div className="container mx-auto py-8">
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <h1 className="text-center font-bold mb-3">COMPANY NAME</h1>
          <h2 className="text-md mb-6 text-center text-gray-400">Forgot Password</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>
        
          <button
            type='button'
            className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleClick}
          >
            Send Reset Email
          </button>
        </form>
      </div>
    );
  }
  