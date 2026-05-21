"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";


import { useRouter } from "next/navigation";   // ← Fixed
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUpPage = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    


     const validatePassword = (value) => {
        if (!value) return "Password is required";

        if (value.length < 6) return "Password must be at least 6 characters";

        if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter (A-Z)";

        if (!/[a-z]/.test(value)) return "Must contain at least one lowercase letter (a-z)";

        if (!/[0-9]/.test(value)) return "Must contain at least one number (0-9)";

        return null;
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());




        try {
            setIsLoading(true);

            const signUpResponse = await authClient.signUp.email(
                {
                    email: user.email,
                    password: user.password,
                    name: user.name,
                    image: user.image || undefined,
                },
                {
                    onSuccess: () => {
                        toast.success("Signup successful! Please sign in ");
                        router.push("/auth/signin");
                    },
                }
            );

            console.log("Signup response:", signUpResponse);

        }

        finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12">
            <div className="w-full max-w-lg bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl p-8 sm:p-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-900 to-green-300 bg-clip-text text-transparent">
                        Create Account
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Join us to explore premium cars
                    </p>
                </div>

                <Form onSubmit={onSubmit} className="w-full">
                    <Fieldset>

                        <FieldGroup>

                            {/* Name */}
                            <TextField isRequired name="name">
                                <Label className="text-gray-700">Name</Label>
                                <Input
                                    placeholder="John Doe"
                                    className="bg-gray-50 border-gray-200 text-gray-800 h-12 rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            {/* Email */}
                            <TextField isRequired name="email" type="email">
                                <Label className="text-gray-700">Email</Label>
                                <Input
                                    placeholder="john@example.com"
                                    className="bg-gray-50 border-gray-200 text-gray-800 h-12 rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            {/* Profile Image URL */}
                            <TextField isRequired name="image">
                                <Label className="text-gray-700">Profile Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    className="bg-gray-50 border-gray-200 text-gray-800 h-12 rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            {/* Password */}
                            <TextField
                                isRequired
                                name="password"
                                validate={validatePassword}
                            >
                                <Label className="text-gray-700">Password</Label>

                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter Your Password"
                                        className="bg-gray-50 border-gray-200 text-gray-800 h-12 w-full rounded-xl pr-12"
                                    />

                                    {/* Icon Inside Input Field */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    >

                                        {showPassword ? (
                                            <FaEyeSlash size={20} />
                                        ) : (
                                            <FaEye size={20} />
                                        )}
                                    </button>
                                </div>

                                <FieldError />
                            </TextField>

                        </FieldGroup>

                        {/* Submit Button */}
                        <div className="w-full mt-6">
                            <Button
                                className="w-full h-12 bg-gradient-to-r from-green-900 to-green-400 text-white font-bold rounded-xl shadow-md hover:opacity-90 transition"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating Account..." : "Sign Up"}
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center my-5">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="mx-4 text-gray-400 text-sm font-medium">or</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        {/* Google Sign Up */}
                        <Button
                            onClick={handleGoogleSignIn}
                            className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold text-gray-700 hover:bg-gray-100 transition"
                        >
                            <FcGoogle className="size-5" />
                            Continue with Google
                        </Button>

                        {/* Already have account */}
                        <div className="text-center text-sm text-gray-800 mt-6">
                            Already have an account?{" "}
                            <Link
                                href="/auth/signin"
                                className="font-semibold text-green-600 hover:underline"
                            >
                                Sign in
                            </Link>
                        </div>

                    </Fieldset>
                </Form>

            </div>
        </div>
    );
};

export default SignUpPage;