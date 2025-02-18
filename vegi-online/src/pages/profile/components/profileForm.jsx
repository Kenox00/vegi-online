function ProfileForm() {
  return (
    <div className="max-w-2xl w-full space-y-8">
      {/* Edit Profile Section */}
      <section className="space-y-4">
        <h2 className="text-secondary font-medium text-lg">Edit Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full inputField"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full inputField"
            />
          </div>
        </div>
      </section>

      {/* Password Change Section */}
      <section className="space-y-4">
        <h2 className="text-secondary font-medium text-lg">Password Changes</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                placeholder="Current Password"
                className="w-full inputField"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="newPassword">New Password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="New Password"
                className="w-full inputField"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm New Password"
              className="w-full inputField"
            />
          </div>
        </div>
      </section>

      {/* Actions */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 md:gap-8 pt-4">
        <button className="text-gray-600 font-medium hover:text-gray-800">
          Cancel
        </button>
        <button className="w-full md:w-32 bg-secondary hover:bg-secondary/90 inputField">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileForm;