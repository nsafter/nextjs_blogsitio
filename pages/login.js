import Link from "next/link";
import Header from "../components/header";

export default function login() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full px-6 py-5 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <div className="font-bold text-xl mb-6">Log In</div>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border border-gray-300 p-2 w-full"
                type="text"
                id="username"
                //   value={username}
                //   onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-300 p-2 w-full"
                type="password"
                id="password"
                //   value={password}
                //   onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <Link href={"/signup"}>
                <span className="text-sm py-2 underline cursor-pointer">
                  New user!! register
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
