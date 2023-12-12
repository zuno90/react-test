import { useEffect, useState } from "react";
import useWallet from "../hooks/useWallet";
import {
  connectAptosWallet,
  disconnectAptosWallet,
} from "../utils/wallet.util";
import { shortText } from "../utils/helper.util";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../stores";
import { loginAction } from "../stores/auth.slice";
import { clean } from "../stores/common.action";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const wallet = useWallet();
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleConnectWallet = async () => {
    const { address } = await connectAptosWallet(wallet);
    dispatch(loginAction({ isAuth: true, address }));
  };

  const handleDisconnectWallet = async () => {
    await disconnectAptosWallet(wallet);
    dispatch(clean());
  };

  // useEffect(() => {
  //   handleConnectWallet();
  // }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.png" className="h-16" alt="Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto rounded-xl px-4 py-2 bg-[#F7BDCC]"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Protocols
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tokens
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Use Cases
              </a>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={
                  !authState.isAuth || !authState.address
                    ? handleConnectWallet
                    : handleDisconnectWallet
                }
              >
                <span className="px-4 py-2 bg-white rounded-full inline-flex items-center space-x-2">
                  {authState.isAuth && authState.address ? (
                    <>
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                        src="petra-logo.jpeg"
                        alt="petra-logo"
                      />
                      <span>{shortText(authState.address)}</span>
                    </>
                  ) : (
                    "Connect Wallet"
                  )}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
