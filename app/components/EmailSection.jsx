"use client";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";

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
          <Link href="https://github.com/Marcel-Wil">
            <FaGithub className="text-3xl text-[#ADB7BE] hover:text-white cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/marceli-wilczynski-1360b2259/">
            <FaLinkedin className="text-3xl text-[#ADB7BE] hover:text-white cursor-pointer" />
          </Link>
          <a href="mailto:wilczynskimarceli@gmail.com">
            <MdOutlineMail className="text-3xl text-[#ADB7BE] hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default EmailSection;
