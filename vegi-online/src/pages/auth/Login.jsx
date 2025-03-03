
import { FaGoogle } from 'react-icons/fa';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Register/Sign in</h2>
          <p className="mt-2 text-sm text-gray-500">Your information is well protected</p>
        </div>

        {/* Input Section */}
        <div>
          <label htmlFor="email-phone" className="block text-base text-black">
            Email/phone number
          </label>
          <input
            id="email-phone"
            type="text"
            placeholder="Email/phone number"
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-3 placeholder-gray-400"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-md hover:bg-tertiary">
          Continue
        </button>

        {/* OR Separator */}
        <p className="text-sm text-black uppercase text-center my-4">OR</p>

        {/* Continue With Google Button */}
        <button className="w-full flex items-center justify-center bg-gray-200 text-black py-3 px-4 rounded-md hover:bg-gray-300">
          <FaGoogle className="mr-2" />
          Continue With Google
        </button>

        {/* Footer Disclaimer */}
        <p className="mt-6 text-sm text-gray-500 text-center">
          By continuing, you confirm that you re an adult and you ve read and accepted our Membership Agreement and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default Login;