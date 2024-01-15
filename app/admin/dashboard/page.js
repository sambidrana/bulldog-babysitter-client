// "use client"
// import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default async function AdminDashboard() {
  const user = await currentUser();
  console.log(user.publicMetadata.role === "admin");
  if (user.publicMetadata.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <div>
        <div>For Dates customization</div>
        <div>For Time customization</div>
        <div>For Booking limit</div>
      </div>
    </>
  );
}
