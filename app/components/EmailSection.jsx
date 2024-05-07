"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const EmailSection = () => {
  const [is24HoursPassed, setIs24HoursPassed] = useState(true); //state to check if 24 hours have passed since last submission

  useEffect(() => {
    setIs24HoursPassed(checkIf24HoursPassed());
  }, []);

  const checkIf24HoursPassed = () => {
    if (typeof window !== "undefined") {
      const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");
      if (lastSubmissionTime === null) return true; //if no submission has been made yet, allow submission
      // Get the current time
      const currentTime = new Date().getTime();
      // Check if 24 hours have passed since the last submission
      if (
        lastSubmissionTime &&
        currentTime - lastSubmissionTime < 24 * 60 * 60 * 1000
      ) {
        return false;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the last submission time from localStorage
    const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");

    // Get the current time
    const currentTime = new Date().getTime();

    if (lastSubmissionTime !== null) {
      // Check if 24 hours have passed since the last submission
      if (
        lastSubmissionTime &&
        currentTime - lastSubmissionTime < 24 * 60 * 60 * 1000
      ) {
        alert("You can only send mail once a day.");
        return;
      }
    }

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      // Store the current time in localStorage
      localStorage.setItem("lastSubmissionTime", currentTime.toString());
      setIs24HoursPassed(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Marcel-aka-Satum">
            <FaGithub className="text-3xl text-[#ADB7BE] hover:text-white cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/marceli-wilczynski-1360b2259/">
            <FaLinkedin className="text-3xl text-[#ADB7BE] hover:text-white cursor-pointer" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          {is24HoursPassed ? (
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-black font-medium py-2.5 px-5 rounded-full w-full"
              disabled
            >
              Send Message
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-red-600  text-black font-medium py-2.5 px-5 rounded-full w-full"
              disabled
            >
              You already sent a message today, if u want a direct response
              please contact me through my personal LinkedIn/e-mail{" :)"}.
            </button>
          )}

          {!is24HoursPassed && (
            <p className="text-green-500 text-sm mt-2">
              Email sent succesfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
