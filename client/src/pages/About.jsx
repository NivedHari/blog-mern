import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">About TypoTales Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Typotales Blog is a dynamic and engaging blogging platform
              designed to provide a seamless experience for both writers and
              readers.
            </p>
            <p>
              With a robust backend powered by Node.js and a responsive frontend
              built using React, Typotales Blog ensures a smooth and efficient
              user experience.
            </p>
            <p>
              The platform includes features such as user authentication, post
              categorization, and real-time commenting, making it an ideal space
              for sharing thoughts and ideas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
