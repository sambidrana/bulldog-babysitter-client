import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-28">
      <SignIn
        appearance={{
          elements: {
            socialButtonsBlockButton: 'hidden',  // hides all social buttons
            dividerRow: 'hidden',      // hides the "or" divider between social buttons and email sign-in
            footer: 'hidden', // hides the footer if needed

          },
        }}
        // path="/sign-in"
        // routing="path"
        // signUpUrl="/sign-up"
      />
    </div>
  );
}
