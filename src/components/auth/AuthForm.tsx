'use client';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import InputField from "./InputField";
import { RegisterData } from "@/types/auth";
import axiosPublic from "@/lib/axiosPublic";
import { useRouter } from "next/navigation";

interface Props {
    type: "login" | "register";
}

export default function AuthForm({ type }: Props) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterData>();

    const onSubmit = async (data: RegisterData) => {
        try {
            const endpoint = type === "login" ? "/api/auth/login" : "/api/auth/register";
            const res = await axiosPublic.post(endpoint, data);
            alert(`${type === "login" ? "Logged in" : "Registered"} successfully`);
            console.log(res.data);
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            localStorage.setItem("expiresIn", res.data.expiresIn);
            router.push(type === "login" ? "/" : "/login")
        } catch (error) {
            alert("Something went wrong");
            console.error(error);
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md bg-white font-roboto shadow-xl p-10 rounded-2xl space-y-6"
        >
            <h2 className="text-3xl font-bold text-center text-[#008080] flex items-center justify-center gap-2">
                <FaUniversity /> {type === "login" ? "Student Login" : "Student Registration"}
            </h2>

            {type === "register" && (
                <InputField
                    label="Full Name"
                    placeholder="John Doe"
                    {...register("username", { required: "Name is required" })}
                    error={errors.username?.message}
                />
            )}

            <InputField
                label="Email"
                placeholder="student@university.edu"
                type="email"
                {...register("email", { required: "Email is required" })}
                error={errors.email?.message}
            />

            <InputField
                label="Password"
                placeholder="******"
                type="password"
                {...register("password", { required: "Password is required" })}
                error={errors.password?.message}
            />

            <button
                type="submit"
                className="w-full bg-[#008080] text-white hover:bg-[#006666] buttons font-semibold text-lg"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Please wait..." : type === "login" ? "Login" : "Register"}
            </button>

            <p className="text-center text-sm">
                {type === "login" ? (
                    <>New student? <a href="/auth/register" className="text-[#008080] hover:underline">Register</a></>
                ) : (
                    <>Already have an account? <a href="/auth/login" className="text-[#008080] hover:underline">Login</a></>
                )}
            </p>
        </motion.form>

    );
}
