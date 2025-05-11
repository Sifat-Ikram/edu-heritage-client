import AuthForm from "@/components/auth/AuthForm";
import Head from "next/head";

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>University {`Login`}</title>
            </Head>
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side - Image/Branding */}
                <div className="hidden md:flex md:w-1/2 bg-[#008080] text-white flex-col items-center justify-center p-10">
                    <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
                    <h2 className="text-3xl font-semibold mb-2">University Portal</h2>
                    <p className="text-center max-w-md">
                        Access your dashboard, register for courses, and stay up to date with the latest campus news.
                    </p>
                    {/* <Image
                        src="/university-illustration.svg" // Replace with actual image path
                        alt="University"
                        className="w-2/3 mt-10"
                    /> */}
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 py-16 px-8">
                    <AuthForm type="login" /> {/* or "register" */}
                </div>
            </div>
        </>
    );
}
