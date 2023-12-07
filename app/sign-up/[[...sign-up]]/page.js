import { SignUp } from "@clerk/nextjs";

export default function Page() {
  console.log(SignUp)
  return (
    <div className="flex items-center justify-center mt-28">
      <SignUp  />
    </div>
  );
}
