import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="text-center">
      <h1>about page</h1>
      <div className="flex justify-center space-x-8">
        <Link href="/about/history">History</Link>
        <Link href="/about/mission">Mission</Link>
      </div>
    </div>
  );
};

export default AboutPage;
