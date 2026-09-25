
import { useState } from "react"

const LoginDesktopComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [staySignedIn, setStaySignedIn] = useState(false)

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="relative hidden w-[60%] flex-col justify-between overflow-hidden bg-[#233144] p-16 lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <svg className="h-5 w-5" viewBox="0 0 16 20" fill="none">
              <path
                d="M8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">AccessGuard</span>
        </div>

        <div className="max-w-[512px]">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
            Securing the next generation of infrastructure.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#d5e3fc] opacity-80">
            AccessGuard provides granular permission controls and real-time audit logs for
            enterprise security teams worldwide.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center justify-between text-xs font-medium tracking-wide text-white/50">
            <p>© 2024 AccessGuard Inc.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/80">Privacy</a>
              <a href="#" className="hover:text-white/80">Compliance</a>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-[368px]">
          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-[#0d1c2e]">Sign in to AccessGuard</h1>
            <p className="mt-2 text-base text-[#434655]">Enter your credentials to access your dashboard.</p>
          </header>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-[#0d1c2e]">
                Work Email
              </label>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737682]"
                  viewBox="0 0 16.7 13.3"
                  fill="currentColor"
                >
                  <path d="M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H15C15.4583 0 15.8507 0.163194 16.1771 0.489583C16.5035 0.815972 16.6667 1.20833 16.6667 1.66667V11.6667C16.6667 12.125 16.5035 12.5174 16.1771 12.8438C15.8507 13.1701 15.4583 13.3333 15 13.3333H1.66667ZM8.33333 7.5L15 3.33333V1.66667L1.66667 1.66667V3.33333L8.33333 7.5ZM1.66667 11.6667H15V3.33333L8.33333 7.5L1.66667 3.33333V11.6667Z" />
                </svg>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-[#c3c6d7] py-3.5 pl-12 pr-4 text-base text-gray-500 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-[#0d1c2e]">
                  Password
                </label>
                <a href="#" className="text-xs font-medium text-[#004ac6] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737682]"
                  viewBox="0 0 13.3 17.5"
                  fill="currentColor"
                >
                  <path d="M1.66667 17.5C1.20833 17.5 0.815972 17.3368 0.489583 17.0104C0.163194 16.684 0 16.2917 0 15.8333V7.5C0 7.04167 0.163194 6.64931 0.489583 6.32292C0.815972 5.99653 1.20833 5.83333 1.66667 5.83333H2.5V4.16667C2.5 3.01389 2.90625 2.03125 3.71875 1.21875C4.53125 0.40625 5.51389 0 6.66667 0C7.81944 0 8.80208 0.40625 9.61458 1.21875C10.4271 2.03125 10.8333 3.01389 10.8333 4.16667V5.83333H11.6667C12.125 5.83333 12.5174 5.99653 12.8438 6.32292C13.1701 6.64931 13.3333 7.04167 13.3333 7.5V15.8333C13.3333 16.2917 13.1701 16.684 12.8438 17.0104C12.5174 17.3368 12.125 17.5 11.6667 17.5H1.66667ZM4.16667 5.83333H9.16667V4.16667C9.16667 3.47222 8.92361 2.88194 8.4375 2.39583C7.95139 1.90972 7.36111 1.66667 6.66667 1.66667C5.97222 1.66667 5.38194 1.90972 4.89583 2.39583C4.40972 2.88194 4.16667 3.47222 4.16667 4.16667V5.83333Z" />
                </svg>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-[#c3c6d7] py-3.5 pl-12 pr-12 text-base text-gray-500 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737682] hover:text-[#0d1c2e]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg className="h-4 w-4" viewBox="0 0 18.3 12.5" fill="currentColor">
                    <path d="M9.16667 10C10.2083 10 11.0938 9.63542 11.8229 8.90625C12.5521 8.17708 12.9167 7.29167 12.9167 6.25C12.9167 5.20833 12.5521 4.32292 11.8229 3.59375C11.0938 2.86458 10.2083 2.5 9.16667 2.5C8.125 2.5 7.23958 2.86458 6.51042 3.59375C5.78125 4.32292 5.41667 5.20833 5.41667 6.25C5.41667 7.29167 5.78125 8.17708 6.51042 8.90625C7.23958 9.63542 8.125 10 9.16667 10ZM9.16667 12.5C7.13889 12.5 5.29167 11.934 3.625 10.8021C1.95833 9.67014 0.75 8.15278 0 6.25C0.75 4.34722 1.95833 2.82986 3.625 1.69792C5.29167 0.565972 7.13889 0 9.16667 0C11.1944 0 13.0417 0.565972 14.7083 1.69792C16.375 2.82986 17.5833 4.34722 18.3333 6.25C17.5833 8.15278 16.375 9.67014 14.7083 10.8021C13.0417 11.934 11.1944 12.5 9.16667 12.5ZM9.16667 10.8333C10.7361 10.8333 12.1771 10.4201 13.4896 9.59375C14.8021 8.76736 15.8056 7.65278 16.5 6.25C15.8056 4.84722 14.8021 3.73264 13.4896 2.90625C12.1771 2.07986 10.7361 1.66667 9.16667 1.66667C7.59722 1.66667 6.15625 2.07986 4.84375 2.90625C3.53125 3.73264 2.52778 4.84722 1.83333 6.25C2.52778 7.65278 3.53125 8.76736 4.84375 9.59375C6.15625 10.4201 7.59722 10.8333 9.16667 10.8333Z" />
                  </svg>
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-2 text-sm text-[#434655]">
              <input
                type="checkbox"
                checked={staySignedIn}
                onChange={(e) => setStaySignedIn(e.target.checked)}
                className="h-4 w-4 rounded border-[#c3c6d7] accent-blue-600"
              />
              Stay signed in for 30 days
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3.5 text-sm font-semibold text-[#eeefff] shadow-sm transition hover:bg-blue-700"
            >
              Sign in
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                <path d="M9.13125 6.75L0 6.75L0 5.25L9.13125 5.25L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z" />
              </svg>
            </button>
          </form>

          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#c3c6d7]" />
            <span className="relative bg-white px-4 text-xs font-medium text-[#434655]">Or continue with</span>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              className="flex h-[46px] flex-1 items-center justify-center gap-2 rounded-lg border border-[#c3c6d7] text-sm font-semibold text-[#0d1c2e] transition hover:bg-gray-50"
            >
              <svg className="h-4 w-4" viewBox="0 0 48 48" fill="none">
                <path d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 19.8c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8 7.8 3.5 7.8 7.8-3.5 7.8-7.8 7.8z" fill="#4285F4"/>
                <path d="M35.7 12.3c-1.5-1.5-2.7-3.3-3.3-5.1h-5.4v9.3l5.4 4.8c1.8-1.5 3.3-2.7 4.8-4.2 0-.6 0-1.2 0-1.8-.6-1.2-.9-1.8-1.5-3z" fill="#34A853"/>
                <path d="M32.1 29.4c1.5-1.5 2.7-3.3 3.3-5.1H24v-6.3h13.2c.3 0 .6.3.6.6 0 1.8-.3 3.6-.9 5.4-1.2 2.7-3.3 5.1-6 6.6l1.2-1.2z" fill="#FBBC05"/>
                <path d="M24 36.3c2.4 0 4.8-.9 6.6-2.4l-4.2-3.3c-1.8.9-3.9 1.5-6 1.5-3.9 0-7.2-2.7-8.4-6.3H5.7c-1.2 3.6-.3 7.5 2.7 10.2 3 3 7.2 4.5 11.4 4.5 1.8 0 3.3-.3 4.2-.9z" fill="#EA4335"/>
                <path d="M5.7 24.3c-.3 0-.6-.3-.6-.6v-1.5c0-.3.3-.6.6-.6h12.9v4.8H5.7z" fill="#4285F4"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex h-[46px] flex-1 items-center justify-center gap-2 rounded-lg border border-[#c3c6d7] text-sm font-semibold text-[#0d1c2e] transition hover:bg-gray-50"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.38.81 1.11.81 2.24v3.32c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-[#434655]">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-[#004ac6] hover:underline">Request access</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default LoginDesktopComponent
