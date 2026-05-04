"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
        const router = useRouter()

        

        const onSubmit = async (e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const image = e.target.image.value;
                const email = e.target.email.value;
                const password = e.target.password.value;

                console.log({ name, email, password, image });

                const { data: res, error } = await authClient.signUp.email({
                        name,
                        email,
                        password,
                        image,
                });

                console.log({ res, error });

                if (error) {
                        alert(error.message);
                } else {
                        alert('Sign up successful!');
                }

                if (!error) {
                        router.push('/');
                }
        };

        return (
                <form onSubmit={onSubmit} className="fieldset mx-auto my-5 bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Sign Up</legend>

                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" required />

                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />

                        <label className="label">Image URL</label>
                        <input type="text" name="image" className="input" placeholder="Image URL" />

                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required />

                        <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                </form>
        );
}