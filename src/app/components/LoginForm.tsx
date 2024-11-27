"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link component from Next.js
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/utils/cn";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [accountSID, setAccountSID] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [myTwilioPhoneNumber, setMyTwilioPhoneNumber] = useState("");
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [url, setUrl] = useState("");

  // // Construct the URL whenever any of the dependencies change
  // useEffect(() => {
  //   console.log(accountSID);
    
  //   const constructedUrl = `http://localhost:8501/TWILIO_ACCOUNT_SID=${accountSID}&TWILIO_AUTH_TOKEN=${authToken}&TWILIO_PHONE_NUMBER=${myTwilioPhoneNumber}&TO_PHONE_NUMBER=${emergencyNumber}&CNN_MODEL_PATH=${"C%3A%5CUsers%5Charsh%5COneDrive%5CDesktop%5Cgardient%20ml%5Cfire%20and%20smoke%5Cnew_model.h5&"}&CUSTOM_MODEL_PATH=${"C%3A%5CUsers%5Charsh%5COneDrive%5CDesktop%5Cgardient%20ml%5Cfire%20and%20smoke%5CInceptionV3_FireDetection.h5&"}&MOBILENET_MODEL_PATH=${"C%3A%5CUsers%5Charsh%5COneDrive%5CDesktop%5Cgardient%20ml%5Cfire%20and%20smoke%5CmobileNetv2-model.h5"}`;
  //   setUrl(constructedUrl);
  //   console.log(url);
    
  // }, [accountSID, authToken, myTwilioPhoneNumber, emergencyNumber]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const loginDetails = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    setLoading(true); // Show loading state
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("http://localhost:1000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();

      // Extract and save user-specific data to state
      setAccountSID(data.user.accountSID || "");
      setAuthToken(data.user.authToken || "");
      setMyTwilioPhoneNumber(data.user.myTwilioPhoneNumber || "");
      setEmergencyNumber(data.user.emergencyNumber || "");

      const constructedUrl = `http://localhost:8501/TWILIO_ACCOUNT_SID=${accountSID}&TWILIO_AUTH_TOKEN=${authToken}&TWILIO_PHONE_NUMBER=${myTwilioPhoneNumber}&TO_PHONE_NUMBER=${emergencyNumber}&CNN_MODEL_PATH=${"C%3A%5CUsers%5Charsh%5COneDrive%5CDesktop%5Cgardient%20ml%5Cfire%20and%20smoke%5Cnew_model.h5&"}&CUSTOM_MODEL_PATH=${"C%3A%5CUsers%5Charsh%5COneDrive%5CDesktop%5Cgardient%20ml%5Cfire%20and%20smoke%5CInceptionV3_FireDetection.h5&"}&MOBILENET_MODEL_PATH=${"C%3A%5CUsers%5Charsh%5COneDrive%5CDesktop%5Cgardient%20ml%5Cfire%20and%20smoke%5CmobileNetv2-model.h5"}`;
    setUrl(constructedUrl);

    console.log(url);
    

      console.log("Login successful:", data);
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome Back to Fire Smoke Detection
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Log in to continue!
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log in →"}
          </button>
        </form>

        {/* Lower Section */}
        <div className="mt-6 text-center">
          <p className="text-neutral-600 text-sm dark:text-neutral-300">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Sign up
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
