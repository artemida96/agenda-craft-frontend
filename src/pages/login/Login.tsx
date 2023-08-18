import LoginForm from "features/authentication/components/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #D1913C, #FDFEFE )",
      }}
      className="min-h-screen grid place-content-center  px-8 pb-6"
    >
      <LoginForm />
      <p className="text-center ">
        &copy;2023 Artemis Chatziroufa. All rights reserved.
      </p>
    </div>
  );
};
export default Login;
