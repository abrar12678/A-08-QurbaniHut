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

                console.log({name, email, password, image})

                const { data, error } = await authClient.signUp.email({
                        name,
                        email,
                        password,
                        image,
                })


                console.log({ data, error })

                if (!error) {
                        router.push('/')
                }

                
        };

        return (
                <fieldset onSubmit={onSubmit} className="fieldset mx-auto my-5 bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Sign Up</legend>

                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />

                        <label className="label">Image URL</label>
                        <input type="text" name="image" className="input" placeholder="Image URL" />

                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
        );
}