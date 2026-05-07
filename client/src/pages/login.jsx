import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    // Google OAuth will go here later
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            PlannerAI
          </h1>
          <p className="text-sm text-gray-500">
            Your personal schedule assistant
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#16161a] border border-[#222228] rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Sign in to access your planner
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-medium py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-200"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Free forever · No credit card required
        </p>

      </div>
    </div>
  )
}

export default Login