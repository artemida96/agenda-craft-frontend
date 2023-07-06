import { Container,Row,Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return (
    <div className="min-h-screen grid place-content-center bg-gradient-to-r from-red-500">
    <form className="bg-red-100 shadow-md rounded-lg px-8 pb-6">
      <div className="mb-4 mt-8 p-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <div className="mb-6 mt-10 px-8 pb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Password
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between px-8">
        <button className="bg-yellow-200 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-yellow-300" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2023 Artemis Chatziroufa. All rights reserved.
    </p>
  </div>
    );
  }
export default LoginForm;