/* eslint-disable @next/next/no-img-element */
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useToast } from '@chakra-ui/react'
import { Header } from "../../components";
import { useRouter } from "next/router";

const AuthPage = () => {
  const router = useRouter()
  const toast = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get data from the form.
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      remember: e.target.remember.value,
    };
    console.dir(data)
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    // API endpoint where we send form data.
    const endpoint = '/api/auth/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const res = await fetch(endpoint, options)
    const r = await res.json()
    if (res.ok) {
      toast({
        title: 'Message Alert!',
        description: r.message,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
      router.push("/")
    }

    if (!res.ok) {
      toast({
        title: 'Message Alert!',
        description: r.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position:"top",
        onCloseComplete: () => router.reload()
      })
    }
  };

  return (
    <>
      <Header title="Auth Page" description="เข้าสู่ระบบ" />
      <div className="grid items-center justify-center h-screen px-4 py-12 mt-8 place-items-center sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="w-auto h-12 mx-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="emp_code" className="sr-only">
                  Employee Code
                </label>
                <input
                  id="emp_code"
                  name="username"
                  type="text"
                  autoComplete="Employee Code"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Employee Code"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
