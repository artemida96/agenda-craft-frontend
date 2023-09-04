import React, { useState } from "react";
import DateSelect from "components/shared/datePicker/DateSelect";
import EyeIcon from "components/shared/icons/EyeIcon";
import EyeSlashIcon from "components/shared/icons/EyeSlashIcon";
import { AccountDto } from "dto/AccountDto";
import { Settings } from "../domain/dto/Settings";
import { updateCurrentUser } from "../domain/services/UserService";
import { useUserContext } from "context/UserContext";

interface SettingsFormProps {
  currentUser: AccountDto;
  onSubmit: (settings: Settings) => void;
}

const SettingsForm: React.FC<SettingsFormProps> = ({
  currentUser,
  onSubmit,
}) => {
  const { user, updateUser } = useUserContext();

  const [showPassword, setShowPassword] = useState(false);

  // Initialize formData based on initialSettings
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName || "",
    lastName: currentUser.lastName || "",
    birthDate: currentUser.birthDate || new Date(),
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const onUpdateUserInfo = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    try {
      // Call the onSubmit function passed as a prop
      const updatedUserInfo = await updateCurrentUser({
        ...currentUser,
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        password: formData.newPassword,
      });
      updateUser(updatedUserInfo);
    } catch (error) {
      console.error("Error making Axios request:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {} as {
      password: string;
      newPassword: string;
      newPasswordConfirm: string;
    };

    // Check if newPassword and newPasswordConfirm match
    if (formData.newPassword !== formData.newPasswordConfirm) {
      errors.newPasswordConfirm = "Passwords do not match";
    }

    return errors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form className="bg-gray-400 px-8 pb-6 " onSubmit={onUpdateUserInfo}>
      <div className="flex flex-wrap -mx-4">
        {/* First Name */}
        <div className="w-1/2 px-4 mb-4 relative">
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
        </div>

        {/* Last Name */}
        <div className="w-1/2 px-4 mb-4 relative">
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
        </div>

        {/* Birthday */}
        <div className="w-1/2 px-4 mb-4 relative">
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

        {/* Current Password */}
        <div className="w-1/2 px-4 mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              className={`border border-red-500 w-full py-2 px-6 ${
                formErrors.password ? "border-red-500" : ""
              }`}
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
            <p className="text-red-500 italic">{formErrors.password}</p>
          )}
        </div>

        {/* New Password */}
        <div className="w-1/2 px-4 mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              className={`border border-red-500 w-full py-2 px-6 ${
                formErrors.newPassword ? "border-red-500" : ""
              }`}
              id="newPassword"
              type={showPassword ? "text" : "password"}
              value={formData.newPassword}
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
          {formErrors.newPassword && (
            <p className="text-red-500 italic">{formErrors.newPassword}</p>
          )}
        </div>

        {/* Confirm New Password */}
        <div className="w-1/2 px-4 mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm New Password
          </label>
          <input
            className={`border border-red-500 w-full py-2 px-6 ${
              formErrors.newPasswordConfirm ? "border-red-500" : ""
            }`}
            id="newPasswordConfirm"
            type="password"
            placeholder="******************"
            value={formData.newPasswordConfirm}
            onChange={handleInputChange}
          />
          {formErrors.newPasswordConfirm && (
            <p className="text-red-500 italic">
              {formErrors.newPasswordConfirm}
            </p>
          )}
        </div>
      </div>

      {/* Update Profile button at the end of the form */}
      <div className="flex flex-col">
        <button className="btn-primary text-white py-2 px-4" type="submit">
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
