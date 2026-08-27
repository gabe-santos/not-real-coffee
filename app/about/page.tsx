import Image, { StaticImageData } from 'next/image';
import steven from 'public/images/steven.jpg';
import gabe from 'public/images/gabe.jpg';
import running from 'public/images/running-group.jpg';

export default function About() {
  return (
    <div className="mt-3xl mb-3xl flex w-full max-w-5xl justify-center px-sm">
      <section className="flex h-screen w-full flex-col items-center gap-lg">
        <div className="flex w-full flex-col justify-evenly gap-md md:flex-row">
          <PersonCard src={steven} name="Steven Yamane" title="Founder & CEO" />
          <PersonCard src={gabe} name="Gabe Santos" title="Director of Coffee" />
        </div>
        <div className="max-w-5xl rounded-3xl border border-black p-md">
          <h3 className="w-full text-left font-semibold uppercase">Our Story</h3>
          <p className="text-lg leading-tight md:text-xl">
            NOT REAL* is not real. It is not a real coffee company. This is a design and development
            project for Gabe Santos. The product and website were designed and built by Gabe. NOT
            REAL* Coffee does not exist... for now.
          </p>
        </div>
      </section>
    </div>
  );
}

const PersonCard = ({
  src,
  name,
  title
}: {
  src: StaticImageData;
  name: string;
  title: string;
}) => {
  return (
    <div className="relative aspect-[3/4] max-w-[300px] overflow-hidden rounded-3xl">
      <Image src={src} alt="person" className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-xs left-xs w-fit rounded-3xl bg-glass px-sm py-3xs leading-none">
        <p className="text-md font-medium">{name}</p>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};
