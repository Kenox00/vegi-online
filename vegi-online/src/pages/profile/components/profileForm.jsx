function ProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-secondary font-medium text-lg">Edit Your Profile</h1>
      
      {/* Name Fields */}
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="inputFull">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="inputField"
            />
          </div>
          <div className="inputFull">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="inputField"
            />
          </div>
        </div>
      </div>
      
      {/* Password Change Fields */}
      <h1 className="text-secondary font-medium text-lg">Password Changes</h1>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="inputFull">
            <label htmlFor="currentPassword" className="text-sm">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              className="inputField"
            />
          </div>
          <div className="inputFull">
            <label htmlFor="newPassword" className="text-sm">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="inputField"
            />
          </div>
        </div>
        <div className="inputFull mt-5">
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            className="inputField"
          />
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex flex-col md:flex-row justify-end gap-12 items-center">
        <p className="font-medium cursor-pointer">Cancel</p>
        <button className="bg-secondary text-white py-4 px-3 h-12 flex justify-center items-center w-full md:w-1/4 text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileForm;
