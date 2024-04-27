"use client";

import { sendMail } from "@/utility/email";
import { ChangeEvent, useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setIsSent("success");
      } else {
        setIsSent("error");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        // eslint-disable-next-line
        console.warn("Aborted sending mail");
      } else {
        // eslint-disable-next-line
        console.error("[Error]: Unable to send mail");
      }
    }
    setIsLoading(false);
  };

  return (
    <section className="py-auto">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact me
            </h1>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              I'd love to talk about any new opportunities or projects.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Fill in the form
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hs-about-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Details
                  </label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ff5a60] text-white hover:bg-[#ff4b4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff5a60] transition-colors duration-200 dark:bg-teal-700 dark:hover:bg-teal-600 dark:focus:ring-teal-500"
                >
                  Send message
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V2.5"
                      ></path>
                    </svg>
                  ) : null}
                </button>
              </div>
              {isSent === "success" && (
                <p className="mt-4 text-green-500 dark:text-green-400">
                  Message sent successfully
                </p>
              )}
              {isSent === "error" && (
                <p className="mt-4 text-red-500 dark:text-red-400">
                  Failed to send message
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
