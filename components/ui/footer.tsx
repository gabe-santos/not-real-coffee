import Image from 'next/image';
import Link from 'next/link';
import notRealBig from 'public/NOT REAL.svg';
import arrow from 'public/arrow-up.svg';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-sm rounded-t-3xl bg-black px-md pt-2xl pb-sm text-white">
      {/* Links Section */}
      <div className="grid w-full grid-cols-2 items-start justify-between gap-sm md:grid-cols-4">
        <div className="flex w-full flex-col">
          <h3>Browse</h3>
          <ul className="flex flex-col text-grey">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
          </ul>
        </div>
        <div className="flex w-full flex-col">
          <h3>About</h3>
          <ul className="flex flex-col text-grey">
            <Link href="/contact">Contact</Link>
            <Link href="faqs">FAQs</Link>
          </ul>
        </div>
        <div className="flex w-full flex-col">
          <h3>Socials</h3>
          <ul className="flex flex-col text-grey">
            <Link href="https://www.instagram.com/notreal.coffee">Instagram</Link>
            <Link href="https://www.linkedin.com/in/gabesantoscodes/">LinkedIn</Link>
            <Link href="https://github.com/gabe-santos">Github</Link>
            <Link href="https://gabesantos.dev">Portfolio</Link>
          </ul>
        </div>

        <div className="flex w-full flex-col gap-sm">
          <label className="text-md" htmlFor="email">
            Sign up to stay up to date with news and new releases
          </label>
          <input type="text" className="pill border border-grey bg-glass text-grey" name="email" />
        </div>
      </div>
      <Image className="w-screen" src={notRealBig} alt="not real big logo" />
      <div className="flex w-full justify-between pt-sm text-sm">
        <p className="">
          Made with 🫶🏽 by <Link href="https://gabesantos.dev">Gabe Santos</Link>
        </p>
        <p className="hidden md:block">
          <Link href="#top">Back to top</Link>
        </p>
        <p className="hidden md:block">NOT REAL Coffee ©</p>
      </div>
    </footer>
  );
}
