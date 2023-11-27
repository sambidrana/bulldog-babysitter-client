import { SignUp } from "@clerk/nextjs";

export default function Page() {
  console.log(SignUp)
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <SignUp afterSignUpUrl="/boarding"  />
    </div>
  );
}
