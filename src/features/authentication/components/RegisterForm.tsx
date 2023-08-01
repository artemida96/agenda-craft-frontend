import DateSelect from "components/shared/datePicker/DateSelect";
import EyeIcon from "components/shared/icons/EyeIcon";
import EyeSlashIcon from "components/shared/icons/EyeSlashIcon";
import { register } from "features/authentication/domain/services/Authentication";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: new Date(),
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as { [key: string]: string });

  const onRegister = async (e: any) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.userName,
        password: formData.password,
        email: formData.email,
        birthDate: formData.birthDate,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error making Axios request:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!formData.userName) {
      errors.userame = "Username is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form
      className="bg-red-100 px-8 py-6 pb-6 flex flex-col"
      onSubmit={onRegister}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          className="w-full py-2 px-6"
          id="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {formErrors.firstName && (
          <span className="text-red-500 text-sm">{formErrors.firstName}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          className="w-full py-2 px-6"
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {formErrors.lastName && (
          <span className="text-red-500 text-sm">{formErrors.lastName}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="w-full py-2 px-6"
          id="userName"
          type="text"
          placeholder="username"
          value={formData.userName}
          onChange={handleInputChange}
        />
        {formErrors.userName && (
          <span className="text-red-500 text-sm">{formErrors.userName}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Your email
        </label>
        <input
          className="w-full py-2 px-6"
          id="email"
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <span className="text-red-500 text-sm">{formErrors.email}</span>
        )}
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <div className="relative">
          <input
            className="border border-red-500 w-full py-2 px-6"
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeIcon width={24} color="none" height={24} />
            ) : (
              <EyeSlashIcon width={24} height={24} color="none" />
            )}
          </button>
        </div>
        {formErrors.password && (
          <span className="text-red-500 text-sm">{formErrors.password}</span>
        )}
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Confirm Password
        </label>
        <input
          className="border border-red-500 w-full py-2 px-6"
          id="confirmPassword"
          type="password"
          placeholder="******************"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {formErrors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {formErrors.confirmPassword}
          </span>
        )}
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select birthday
        </label>
        <DateSelect
          selectedDate={formData.birthDate}
          onDateSelect={(date: Date) =>
            setFormData({ ...formData, birthDate: date })
          }
        />
      </div>
      <div className="flex flex-col mt-4 self-center">
        <button className="btn-primary text-white py-2 px-4 mb-2" type="submit">
          Create an account
        </button>

        <a className="text-center" href="/login">
          Login
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
