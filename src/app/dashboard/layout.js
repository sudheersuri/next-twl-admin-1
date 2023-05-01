'use client';
import Link from 'next/link';
import {usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite';

export default function DashboardSidebarLayout({ children }) {
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();
  useEffect(() => {
    //get current url path
    setActiveLink(pathname);
      //init flowbite
      initFlowbite();
  }, [pathname]);
  
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
         <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
            <Link href="https://flowbite.com" className="flex ml-2 md:mr-24">
               <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
               <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            </div>
            <div className="flex items-center">
               <div className="flex items-center ml-3">
                  <div>
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                     <span className="sr-only">Open user menu</span>
                     <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                  </button>
                  </div>
                  <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                     <p className="text-sm text-gray-900 dark:text-white" role="none">
                        Neil Sims
                     </p>
                     <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        neil.sims@flowbite.com
                     </p>
                  </div>
                  <ul className="py-1" role="none">
                     <li>
                        <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                     </li>
                  </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </nav>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
         <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
               <li className={`py-1 ${activeLink === '/dashboard/users' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}>
                  <Link href="/dashboard/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
                     <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/dashboard/users' ? 'text-white' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                     <span className={`py-1 ${activeLink === '/dashboard/users' ? 'text-white ml-3' : 'ml-3'}`} >Users</span>
                  </Link>
               </li>
            </ul>
         </div>
      </aside>
      <div className="p-2 sm:ml-64 mt-14">
         {children}
      </div>
   </div>
  );
}
