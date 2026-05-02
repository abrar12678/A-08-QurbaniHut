"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
    const router = useRouter();

    const onsubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        if (!error) {
            router.push("/");
        }
    };
    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border justify-center mx-auto align-center my-5 p-4">
              <legend className="fieldset-legend">Sign Up</legend>

                <label className="label">Name</label>
                <input required type="text" name="name" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input required type="email" name="email" className="input" placeholder="Email" />

                <label className="label">Image Url</label>
                <input required type="text" name="image" className="input" placeholder="Image Url" />


                <label className="label">Password</label>
                <input required type="password" name="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Sign Up</button>
            </fieldset>
    )
}