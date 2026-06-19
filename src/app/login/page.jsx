import AuthShowcase from '@/components/Auth/AuthShowCase'
import LoginForm from '@/components/Auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300">
      <div className="grid min-h-screen lg:grid-cols-2">
        <AuthShowcase />

        <div className="flex items-center justify-center p-6 lg:p-12">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}