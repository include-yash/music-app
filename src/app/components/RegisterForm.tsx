"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/utils/cn";

export default function SignupFormDemo() {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    accountSID: "",
    authToken: "",
    myTwilioPhoneNumber: "",
    emergencyNumber: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 mt-8 mb-8">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Fire Smoke Detection
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Register here to continue!
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                placeholder="Tyler"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                placeholder="Durden"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="+91637521390"
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <div className="text-slate-950 text-pretty mb-4">
            ALERT: Register into Twilio first to enter the further details.
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="accountSID">Twilio SID</Label>
            <Input
              id="accountSID"
              placeholder="••••••••"
              type="text"
              value={formData.accountSID}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="authToken">Twilio AUTH Token</Label>
            <Input
              id="authToken"
              placeholder="••••••••"
              type="text"
              value={formData.authToken}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="myTwilioPhoneNumber">Twilio Phone Number</Label>
            <Input
              id="myTwilioPhoneNumber"
              placeholder="+612221120"
              type="text"
              value={formData.myTwilioPhoneNumber}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="emergencyNumber">Emergency Number</Label>
            <Input
              id="emergencyNumber"
              placeholder="12345689"
              type="text"
              value={formData.emergencyNumber}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
          </button>
        </form>

        {/* Lower Section */}
        <div className="mt-6 text-center">
          <p className="text-neutral-600 text-sm dark:text-neutral-300">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
