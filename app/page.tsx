import Marquee from 'components/ui/marquee';
import Image from 'next/image';
import hero from 'public/images/hero.png';
import running from 'public/images/running.jpg';
import coffeeSip from 'public/images/coffee-sip.jpg';
import boxer from 'public/images/boxer-2.jpg';
import React from 'react';

export const metadata = {
  title: 'NOT REAL* Coffee',
  description: "Not Real Coffee. It simply doesn't exist"
};

export default async function HomePage() {
  return (
    <div className="flex h-full w-full max-w-screen flex-col gap-sm px-sm">
      <div id="top" className="relative mt-3xl w-full max-w-screen overflow-hidden rounded-3xl">
        <Image src={hero} alt="medium image" className="h-full w-full object-cover" />
      </div>
      <Marquee speed={2} className="flex w-full rounded-3xl bg-black text-3xl text-white">
        This coffee doesn't exist * It's NOT REAL *
      </Marquee>

      <section className="flex h-screen items-center rounded-3xl border border-black p-md text-lg leading-tight md:text-2xl">
        <div className="">
          NOT REAL* Coffee is not a brand--it's an <span className="italic">idea</span>. A concept.
          A figment of your imagination. It's the whisper of caffeine in a world of shouting
          stimulants. We don't sell coffee; we cultivate existential awakening. Each non-existent
          sip questions reality, blurring the lines between dreams and wakefulness. NOT REAL*
          Coffee—taste the paradox, embrace the void, and redefine your morning ritual.
        </div>
      </section>

      <TwoColumnSection>
        <div className="h-full w-full overflow-hidden rounded-3xl">
          <Image src={running} alt="running" className="h-full w-full object-cover" />
        </div>
        <div className="flex h-full w-full flex-col justify-start rounded-3xl">
          <div className="flex flex-col gap-xl rounded-3xl bg-black p-md text-white">
            <h2 className="text-lg leading-none font-semibold text-pretty uppercase md:text-xl">
              The Void of Perfect Brew
            </h2>
            <p className="leading-tight md:text-xl">
              You've just stumbled upon the event horizon of caffeine consciousness. NOT REAL Coffee
              isn't just a brand—it's an abstract concept, a quantum superposition of flavor and
              fantasy.
            </p>
            <p className="text-lg leading-normal">
              The perfect coffee brand doesn't exist.
              <br />
              It's <span className="font-medium underline">NOT REAL</span>*.
            </p>
          </div>
        </div>
      </TwoColumnSection>
      <section className="h-1/2"></section>

      <section className="h-screen">
        <div className="flex h-full max-h-screen w-full justify-center overflow-hidden rounded-3xl">
          <Image src={coffeeSip} alt="coffee sip" className="h-full w-full object-cover" />
        </div>
      </section>
      <TwoColumnSection>
        <div className="flex w-full flex-col rounded-3xl border border-black p-md text-xl">
          <p> Coffee for closers.</p>
          <p> For dreamers.</p>
          <p> For go-getters and winners.</p>
        </div>
        <div className="h-full w-full overflow-hidden rounded-3xl">
          <Image src={boxer} alt="boxer" className="h-full w-full object-cover" />
        </div>
      </TwoColumnSection>
    </div>
  );
}

const TwoColumnSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-screen w-full flex-col items-start justify-center gap-sm py-sm md:flex-row">
      {children}
    </section>
  );
};
