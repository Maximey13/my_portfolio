import {FaRegFilePdf, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex space-x-4">
      <a
        href="/cv.pdf"
        download
        className="bg-darkNavyBlue text-white p-3 rounded-full hover:bg-vibrantOrange transition"
        title="Download CV">
        <FaRegFilePdf size={20} />
      </a>
      <a
        href="https://github.com/Maximey13"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-darkNavyBlue text-white p-3 rounded-full hover:bg-vibrantOrange transition">
        <FaGithub size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/maxime-you-78484a33b/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-darkNavyBlue text-white p-3 rounded-full hover:bg-vibrantOrange transition">
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://www.instagram.com/maxim_y13/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-darkNavyBlue text-white p-3 rounded-full hover:bg-vibrantOrange transition">
        <FaInstagram size={20} />
      </a>
    </div>
  );
}
