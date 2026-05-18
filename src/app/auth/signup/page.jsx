"use client";

import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";


const SignUpPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12">

            <div className="w-full max-w-lg bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl p-8 sm:p-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-green-900 to-green-300 bg-clip-text text-transparent">
                        Create Account 
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                    Join us to explore premium cars
                    </p>
                </div>

                <Form className="w-full max-w-96">
                    <Fieldset>
                        

                        <FieldGroup>

                            {/* Name */}
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }
                                    return null;
                                }}
                            >
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

                            {/* Image */}
                            <TextField
                                isRequired
                                className="w-full"
                                validate={(value) => {
                                    if (!value || value.length < 10) {
                                        return "Please enter a valid Image URL";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="mb-1 text-sm font-medium text-gray-700">
                                    Profile Image URL
                                </Label>
                                <Input
                                    name="image"
                                    type="url"
                                    placeholder="Enter Image Link"
                                    className="bg-gray-50 border-gray-200 text-gray-800 h-12 rounded-xl"
                                />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>

                            {/* Password */}
                            <TextField className="w-full" name="password">
                                <Label className="mb-1 text-sm font-medium text-gray-700">
                                    Password
                                </Label>
                                <div className="relative w-full">
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Enter Your Password"
                                        className="w-full bg-gray-50 border-gray-200 text-gray-800 h-12 rounded-xl"
                                    />
                                </div>
                            </TextField>

                        </FieldGroup>

                        {/* Button */}
                        <div className="w-full mt-4">
                            <Button
                                className="w-full h-12 bg-gradient-to-r from-green-900 to-green-400 text-white font-bold rounded-xl shadow-md hover:opacity-90 transition"
                                type="submit"
                            >
                                Sign Up
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center my-5">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="mx-4 text-gray-400 text-sm font-medium">or</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        {/* Google */}
                        <div className="w-full flex flex-col gap-5">
                            <Button
                                className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold text-gray-700 hover:bg-gray-100 transition"
                            >
                                <FcGoogle className="size-5" />
                                Continue with Google
                            </Button>

                            {/* Login */}
                            <div className="text-center text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link
                                    href="/auth/signin"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    Signin
                                </Link>
                            </div>
                        </div>

                    </Fieldset>
                </Form>

            </div>
        </div>
    )
}

export default SignUpPage;