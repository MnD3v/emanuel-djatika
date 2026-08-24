import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble, Download, Mail } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="card sticky top-10 flex flex-col items-center p-8 w-full max-w-[380px] mx-auto text-center gap-6">
      {/* Avatar */}
      <div className="relative w-64 h-64 rounded-3xl overflow-hidden mb-2">
        <Image
          src="/emanuel.jpeg"
          alt="Emanuel Djatika"
          fill
          className="object-cover"
        />
      </div>

      {/* Logo / Name & Role */}
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-4xl font-extrabold tracking-tight">Emanuel</h2>
        <span className="text-sm font-semibold text-primary tracking-widest uppercase mt-2">
          Développeur Full Stack
        </span>
      </div>

      {/* Contact Metadata */}
      <div className="flex flex-col gap-1 text-sm text-zinc-400">
        <a href="mailto:em.djatika@gmail.com" className="hover:text-primary transition-colors underline underline-offset-4">
          em.djatika@gmail.com
        </a>
        <p>Based in Togo (+228)</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 w-full">
        <Link href="https://www.linkedin.com/in/emanuel-djatika-283390276/" target="_blank" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white/5 hover:text-primary transition-all">
          <Linkedin className="w-4 h-4" />
        </Link>
        <Link href="https://github.com/em-djatika" target="_blank" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white/5 hover:text-primary transition-all">
          <Github className="w-4 h-4" />
        </Link>
        <Link href="https://web.facebook.com/emanuel.djatika.7?locale=fr_FR" target="_blank" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white/5 hover:text-primary transition-all">
          <span className="w-4 h-4 flex items-center justify-center font-bold">f</span>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex justify-center mt-2 flex-col gap-3">
        {/* Contact Me Button */}
        <Link
          href="#contact"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-zinc-950 font-bold rounded-xl hover:bg-primary/90 transition-all"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </Link>

        {/* CV Button */}
        <a
          href="#resume"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-xl hover:bg-white/5 transition-all text-sm font-semibold"
        >
          <Download className="w-4 h-4" />
          Mon CV
        </a>
      </div>
    </div>
  );
}
