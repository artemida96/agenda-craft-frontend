
const Login = () => {
  return (
    <div className="min-h-screen grid place-content-center bg-gradient-to-r from-red-500">
    <form className="bg-red-100 px-8 pb-6">
      <div className="mb-4 mt-8 p-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input className="w-full py-2 px-3" id="username" type="text" placeholder="Username"/>
      </div>
      <div className="mb-6 mt-10 px-8 pb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Password
        </label>
        <input className="border border-red-500 w-full py-2 px-3 " id="password" type="password" placeholder="******************"/>
        <p className="text-red-500 italic">Please choose a password.</p>
      </div>
      <div className=" flex flex-col px-8 pb-6">
        <button className="btn-primary text-white py-2 px-4 mb-2 " type="button">
          Sign In
        </button>
        <a className="text-center" href="#">
          Forgot Password?
        </a>
      </div>
      <div className="flex justify-around	">
          <p className="text-sm">
          Don't have an account?
          </p>
        <button className="brd-primary outline-none focus:outline-none px-4 " type="button">
          Register
        </button>
    </div>
    </form>
    <p className="text-center ">
      &copy;2023 Artemis Chatziroufa. All rights reserved.
    </p>
  </div>
    );
  }
export default Login;