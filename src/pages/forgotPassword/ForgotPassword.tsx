import ForgotPasswordForm from "features/authentication/components/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #8e9eab, #eef2f3 )",
      }}
      className="min-h-screen grid place-content-center"
    >
      <ForgotPasswordForm />
    </div>
  );
};
export default ForgotPassword;
