'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Login() {
  const { push } = useRouter();
  function handleClick() {
      //push works but it doesnt load js properly for flowbite sidebar drawer to work. hence am using window.location
      push('/dashboard')
      //window.location = '/dashboard';
  }
  return (
    <div className="container mx-auto py-8">
      <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-center font-bold mb-3">COMPANY NAME</h1>
        <h2 className="text-md mb-6 text-center text-gray-400">Login</h2>
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
             htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between my-5">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label  htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <Link
            href="/forgot-password"
            className="text-blue-500 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </Link>
        </div>
        <button
          className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          type="button"
          onClick={handleClick}
        >
          Login
        </button>
        <p className="my-3 text-sm font-light text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
