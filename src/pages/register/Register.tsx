import RegisterForm from "features/authentication/components/RegisterForm";

const Register = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #8e9eab, #eef2f3 )",
      }}
      className="min-h-screen grid place-content-center"
    >
      <RegisterForm />
    </div>
  );
};
export default Register;
