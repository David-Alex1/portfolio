import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white flex-col flex gap-y-2 ">
      <p className="mt-10 text-2xl mb-5">
        hi, I am David Alex 
      </p>
      <p>
        this is my <a className="underline underline-offset-4  hover:text-white/65 transition duration-200"  target="_blank" rel="noopener noreferrer" href="/resume.pdf" >resume</a>
      </p>
      <p>
        if you want to learn more about me, click <Link className="underline underline-offset-4  hover:text-white/65 transition duration-200" href="/about" >here </Link>
      </p>
      <p>
        if you would like to see my projects, click <Link className="underline underline-offset-4  hover:text-white/65 transition duration-200" href="/projects" >here </Link>
      </p>
    </div>
  );
}
