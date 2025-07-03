import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-1 mb-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] min-h-[80vh] pt-12 md:pt-16 pb-10 md:pb-16">
      {/* items container */}

      <div className="grid place-items-center justify-content items-center gap-6 md:gap-10 3xl:mt-16">
        <div className="lg:hidden">
          <SignIn
            appearance={{
              elements: {
                socialButtonsBlockButton: "hidden", // hides all social buttons
                dividerRow: "hidden", // hides the "or" divider between social buttons and email sign-in
                footer: "hidden", // hides the footer if needed
              },
            }}
            // path="/sign-in"
            // routing="path"
            // signUpUrl="/sign-up"
          />
        </div>

        {/* Notice */}
        <div className="bg-yellow-50 rounded-xl shadow-sm grid lg:flex lg:gap-24 lg:items-center lg:justify-center m-2 lg:p-10 ">
          <div className="font-serif m-4 md:text-lg text-gray-600 tacking-wide xl:max-w-[650px] ">
            <div className="mb-2 w-full items-center">
              <Image
                src={"/signin/border-frenchie.png"}
                alt="Border Frenchie"
                width={150}
                height={150}
              />
            </div>
            <h2 className="text-xl font-semibold mb-6 border-b-2 w-fit ">
              Hello and welcome!
            </h2>

            <p className="mb-2">
              We&apos;re so glad you&apos;re here! Please note that in order to access our
              booking system, you&apos;ll need to be signed up with us first.
            </p>
            <p className="mb-2">
              However, sign-ups are only accepted when we have availability. If
              you&apos;re not currently registered, we kindly ask that you visit
              our <strong><a href="/contact" className="animate-pulse text-[#849a48]"> Contact </a></strong> page to submit an enquiry — or feel
              free to give us a call using the number provided.
            </p>
            <p>
              We&apos;ll be happy to let you know if we have a spot available
              for your pup. Thanks for your understanding!
            </p>
          </div>

          <div className="hidden lg:block md:scale-105 3xl:scale-110 ">
            <SignIn
              appearance={{
                elements: {
                  socialButtonsBlockButton: "hidden", // hides all social buttons
                  dividerRow: "hidden", // hides the "or" divider between social buttons and email sign-in
                  footer: "hidden", // hides the footer if needed
                },
              }}
              // path="/sign-in"
              // routing="path"
              // signUpUrl="/sign-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
