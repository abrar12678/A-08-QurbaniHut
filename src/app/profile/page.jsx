"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiUser, BiEnvelope, BiCalendar, BiEdit, BiLogOut } from "react-icons/bi";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if (!user) {
    redirect("/signin");
  }

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const initials = user?.name
    ?.split(" ")
    .map((n) => n?.[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Profile Card */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Cover / Header */}
          <div className="relative h-40 w-full" style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)" }}>
            <div className="absolute inset-0 bg-black/10" />
            {/* Floating Avatar */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
              <div className="rounded-full border-4 border-white shadow-lg overflow-hidden h-28 w-28 bg-gray-100">
                <Avatar className="h-28 w-28">
                  <Avatar.Image
                    alt={user?.name || "User"}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                    className="h-28 w-28 object-cover"
                  />
                  <Avatar.Fallback className="h-28 w-28 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white text-3xl font-bold">
                    {initials}
                  </Avatar.Fallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">{user?.name || "User"}</h2>
            <p className="mt-2 text-sm text-gray-500">{user?.email || "No email"}</p>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-gray-50 px-4 py-5 border border-gray-100">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Role</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">Member</p>
              </div>
              <div className="rounded-2xl bg-gray-50 px-4 py-5 border border-gray-100">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Status</p>
                <p className="mt-2 text-sm font-semibold text-green-600">Active</p>
              </div>
              <div className="rounded-2xl bg-gray-50 px-4 py-5 border border-gray-100">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Plan</p>
                <p className="mt-2 text-sm font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Premium</p>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-8 space-y-4 text-left">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">Account Details</h3>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 border border-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white">
                  <BiUser className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Full Name</p>
                  <p className="text-sm font-medium text-gray-900">{user?.name || "Not set"}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 border border-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#EC4899] to-[#F59E0B] text-white">
                  <BiEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-medium text-gray-900">{user?.email || "Not set"}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 border border-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] text-white">
                  <BiCalendar className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Member Since</p>
                  <p className="text-sm font-medium text-gray-900">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => {
                  const modal = document.getElementById("update-modal");
                  if (modal) modal.showModal();
                }}
                className="flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-95"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
              >
                <BiEdit className="text-lg" />
                Edit Profile
              </button>

              <button
                onClick={handleSignOut}
                className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-3 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 hover:border-red-300"
              >
                <BiLogOut className="text-lg" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Profile Modal */}
      <dialog id="update-modal" className="modal">
        <div className="modal-box rounded-3xl border border-gray-200 shadow-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-400 hover:text-gray-700">
              ✕
            </button>
          </form>
          <h3 className="text-xl font-bold text-gray-900">Edit Profile</h3>
          <p className="mt-1 text-sm text-gray-500">Update your profile information</p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const image = e.target.image.value;

              try {
                await authClient.updateUser({ name, image });
                document.getElementById("update-modal").close();
              } catch (err) {
                alert(err?.message || "Failed to update profile");
              }
            }}
            className="mt-6 space-y-5"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.name || ""}
                placeholder="Enter your name"
                className="input input-bordered w-full rounded-xl border-gray-200 bg-gray-50 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                name="image"
                defaultValue={user?.image || ""}
                placeholder="https://example.com/your-image.jpg"
                className="input input-bordered w-full rounded-xl border-gray-200 bg-gray-50 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => document.getElementById("update-modal").close()}
                className="btn flex-1 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn flex-1 rounded-xl text-white border-0 shadow-sm hover:brightness-95"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ProfilePage;
