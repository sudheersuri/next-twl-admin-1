"use client";
import {
  Button,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useSWR from "swr";
import { initModals, initDrawers, initDropdowns, initFlowbite } from "flowbite";

export default function Page() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [products, setProducts] = useState([]);
  const onCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        
      });
    initFlowbite();
    initModals();
    initDrawers();
    initDropdowns();
  }, []);
  
  // const fetcher = (...args) => fetch(...args).then((res) => res.json())
  // const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);
  
  if (!products) {
    return (
      <div className="p-2 mx-auto max-w-screen-xl px-2 lg:px-12">
        <p>Loading...</p>
      </div>
    );
  } else {
    // const EditUserModal = () => {
    //     return ( <div
    //         id="editUserModal"
    //         tabindex="-1"
    //         aria-hidden="true"
    //         class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    //       >
    //         <div class="relative w-full max-w-2xl max-h-full">
    //           <form
    //             action="#"
    //             class="relative bg-white rounded-lg shadow dark:bg-gray-700"
    //           >
    //             <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
    //               <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
    //                 Edit user
    //               </h3>
    //               <button
    //                 type="button"
    //                 class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //                 //data-modal-hide="editUserModal"
    //               >
    //                 <svg
    //                   aria-hidden="true"
    //                   class="w-5 h-5"
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     fill-rule="evenodd"
    //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                     clip-rule="evenodd"
    //                   ></path>
    //                 </svg>
    //               </button>
    //             </div>

    //             <div class="p-6 space-y-6">
    //               <div class="grid grid-cols-6 gap-6">
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="first-name"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     First Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="first-name"
    //                     id="first-name"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="Bonnie"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="last-name"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     Last Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="last-name"
    //                     id="last-name"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="Green"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="email"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     Email
    //                   </label>
    //                   <input
    //                     type="email"
    //                     name="email"
    //                     id="email"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="example@company.com"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="phone-number"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     Phone Number
    //                   </label>
    //                   <input
    //                     type="number"
    //                     name="phone-number"
    //                     id="phone-number"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="e.g. +(12)3456 789"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="department"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     Department
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="department"
    //                     id="department"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="Development"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="company"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     Company
    //                   </label>
    //                   <input
    //                     type="number"
    //                     name="company"
    //                     id="company"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="123456"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="current-password"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     Current Password
    //                   </label>
    //                   <input
    //                     type="password"
    //                     name="current-password"
    //                     id="current-password"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="••••••••"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div class="col-span-6 sm:col-span-3">
    //                   <label
    //                     for="new-password"
    //                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                   >
    //                     New Password
    //                   </label>
    //                   <input
    //                     type="password"
    //                     name="new-password"
    //                     id="new-password"
    //                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                     placeholder="••••••••"
    //                     required=""
    //                   />
    //                 </div>
    //               </div>
    //             </div>

    //             <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
    //               <button
    //                 type="submit"
    //                 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //               >
    //                 Save all
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>)
    // }
    return (
      <section className="p-2">
        <div className="mx-auto max-w-screen-xl px-2 lg:px-12" >
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  type="button"
                  className="bg-indigo-500 flex items-center justify-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <svg
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add product
                </button>
                <div className="flex items-center space-x-3 w-full md:w-auto"></div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-all-search" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Position
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   {products.map((product) => (
                   <tr  key={`${product.id}`}  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="w-4 p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Jese image"
                        />
                        <div class="pl-3">
                          <div class="text-base font-semibold">Neil Sims</div>
                          <div class="font-normal text-gray-500">
                            neil.sims@flowbite.com
                          </div>
                        </div>
                      </th>
                      <td class="px-6 py-4">React Developer</td>
                      <td class="px-6 py-4">
                        <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                          Online
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          type="button"
                          //data-modal-target="editUserModal"
                         // data-modal-show="editUserModal"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </a>
                        <button class="font-medium text-red-600 dark:text-red-500 hover:underline ml-4" onClick={()=>setShowModal(true)}>
                            Delete
                        </button>
                      </td>
                    </tr>
                   ))}
                  </tbody>
                </table>
              {showModal && 
                <div
                //   id="editUserModal"
                  class=" fixed top-0 left-0 right-0 z-50 items-center justify-center mx-auto w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div class="relative w-full max-w-2xl mx-auto max-h-full">
                    <form
                      action="#"
                      class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Edit user
                        </h3>
                        <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          //data-modal-hide="editUserModal"
                          onClick={()=>setShowModal(false)}
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div class="p-6 space-y-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="first-name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Bonnie"
                              required=""
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="last-name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Green"
                              required=""
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="email"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="example@company.com"
                              required=""
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="phone-number"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Phone Number
                            </label>
                            <input
                              type="number"
                              name="phone-number"
                              id="phone-number"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="e.g. +(12)3456 789"
                              required=""
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="department"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Department
                            </label>
                            <input
                              type="text"
                              name="department"
                              id="department"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Development"
                              required=""
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="company"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Company
                            </label>
                            <input
                              type="number"
                              name="company"
                              id="company"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="123456"
                              required=""
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="current-password"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Current Password
                            </label>
                            <input
                              type="password"
                              name="current-password"
                              id="current-password"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="••••••••"
                              required=""
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="new-password"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              New Password
                            </label>
                            <input
                              type="password"
                              name="new-password"
                              id="new-password"
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="••••••••"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          type="submit"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Save all
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                }
              </div>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
