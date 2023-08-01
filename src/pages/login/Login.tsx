import LoginForm from "features/authentication/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen grid place-content-center bg-gradient-to-r from-red-500">
      <LoginForm />
      <p className="text-center ">
        &copy;2023 Artemis Chatziroufa. All rights reserved.
      </p>
    </div>
  );
};
export default Login;
