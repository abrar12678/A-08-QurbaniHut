"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignInPage() {

        const onSubmit = async (e) => {
                e.preventDefault();

                const email = e.target.email.value;
                const password = e.target.password.value;

                console.log({ email, password })

                const { data: res, error } = await authClient.signIn.email({
                        email,
                        password,
                        callbackURL: '/',
                })

                console.log({ res, error })

                if (error) {
                        alert(error.message)
                }
                else {
                        alert('Sign in successful!')
                }
        };

        return (
                <form onSubmit={onSubmit} className="fieldset mx-auto my-5 bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Sign In</legend>

                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required />

                        <button type="submit" className="btn btn-neutral mt-4">Sign In</button>
                </form>
        );
}