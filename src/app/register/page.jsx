import AuthShowcase from '@/components/Auth/AuthShowCase'
import RegisterForm from '@/components/auth/RegisterForm'

export default function RegisterPage() {
return ( <div className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300"> <div className="grid min-h-screen lg:grid-cols-2">


    {/* Left Side */}
    <AuthShowcase />

    {/* Right Side */}
    <div className="flex items-center justify-center p-6 lg:p-12">
      <RegisterForm />
    </div>

  </div>
</div>


)
}
