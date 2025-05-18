import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white flex-col flex gap-y-7 ">
      <p className="mt-10 text-2xl mb-5">Hi, I am David Alex.</p>
      <p>
        You can find my resume{" "}
        <a
          className="underline underline-offset-4  hover:text-white/65 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
          href="/resume.pdf"
        >
          <i>here</i>
        </a>
      </p>
      <p>
        To learn more about me, click{" "}
        <Link
          className="underline underline-offset-4  hover:text-white/65 transition duration-200"
          href="/about"
        >
          <i>here </i>
        </Link>
      </p>
      <p>
        To learn more about my projects, click{" "}
        <Link
          className="underline underline-offset-4 hover:text-white/65 transition duration-200"
          href="/projects"
        >
          <i>here </i>
        </Link>
      </p>
    </div>
  );
}
