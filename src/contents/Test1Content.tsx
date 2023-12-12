import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../utils/firebase.util";
import { IUser } from "../__types__";
import Body from "../components/Body";

const Test1Content: React.FC = () => {
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null);
  const handleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) throw Error("Can not log in with Google!");
      const { email, displayName, photoURL } = res.user;
      setLoggedUser({ email, displayName, avatar: photoURL });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Body>
      <div className="w-full p-4 inline-flex justify-around">
        <div className="w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-7xl text-white">
            <p>Explore and Earn</p>
            <p className="inline-flex items-center space-x-2">
              <span>on</span>
              <img
                className="w-40"
                src="logo-whiteout.png"
                alt="logo-whiteout"
              />
            </p>
          </h1>
          <div className="px-2 py-1 bg-white rounded-full inline-flex justify-between">
            <input className="w-[75%] rounded-full" />
            <button
              type="button"
              className="w-1/4 px-4 py-1 rounded-full bg-[#F5B4BB]"
            >
              Sign Up
            </button>
          </div>
          <div className="inline-flex justify-between items-center">
            {!loggedUser ? (
              <button
                type="button"
                className="w-[45%] px-4 py-2 rounded-full bg-[#7BB8F1] text-white font-semibold"
                onClick={handleLogin}
              >
                Login
              </button>
            ) : (
              <div className="text-sm text-center">
                <div className="inline-flex justify-center items-center space-x-2">
                  <img
                    className="w-10 h-10"
                    src={loggedUser.avatar}
                    alt="gg-avatar"
                  />
                  <div className="flex flex-col">
                    <p>{loggedUser.email}</p>
                    <button
                      type="button"
                      className="underline self-end text-blue-200"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            )}
            <button
              type="button"
              className="w-[45%] px-4 py-2 rounded-full bg-white font-semibold"
            >
              Launch App
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="bg-white px-16 py-8 rounded-lg">
            <img src="logo.png" className="w-24 object-cover" alt="logo" />
          </div>
        </div>
      </div>
      <div className="w-full px-8 py-16">
        <div className="p-8 border border-white rounded-lg bg-[#FFFFFF] opacity-50 grid grid-cols-3">
          <div className="text-center">
            <h2 className="mb-4 font-normal text-4xl">$1.80B</h2>
            <p className="text-xs">30 Day Volume</p>
          </div>
          <div className="text-center">
            <h2 className="mb-4 font-normal text-4xl">$0.84B</h2>
            <p className="text-xs">Managed on testX.fi</p>
          </div>
          <div className="text-center">
            <h2 className="mb-4 font-normal text-4xl">$21.43M</h2>
            <p className="text-xs">Total Collateral Automated</p>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Test1Content;
