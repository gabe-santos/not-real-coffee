'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

export default function NavMenu({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linkRefs = useRef([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
  };

  // Set initial state of menuRef
  // useGSAP(() => {
  //   if (menuRef.current) {
  //     gsap.set(menuRef.current, { opacity: 0 });
  //   }
  //   // if (linkRefs.current.length) {
  //   //   gsap.set(linkRefs.current, { y: 100, opacity: 0 });
  //   // }
  // });
  //
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //
  //   document.addEventListener('mousedown', handleClickOutside);
  //
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  //
  // useGSAP(
  //   () => {
  //     if (isOpen) {
  //       gsap.to(menuRef.current, {
  //         duration: 0.4,
  //         // y: '0%',
  //         opacity: '100%',
  //         display: 'flex',
  //         ease: 'power3.in',
  //         onComplete: () => {
  //           gsap.fromTo(
  //             linkRefs.current,
  //             { y: '-100%', opacity: 0 },
  //             { y: 0, opacity: 1, duration: 0.2, stagger: 0.1 }
  //           );
  //         }
  //       });
  //     } else {
  //       gsap.to(linkRefs.current, {
  //         y: '-100%',
  //         opacity: 0,
  //         stagger: 0.1,
  //         onStart: () => {
  //           gsap.to(menuRef.current, {
  //             x: '-100%',
  //             duration: 0.4,
  //             ease: 'power3.in'
  //           });
  //         }
  //       });
  //     }
  //   },
  //   { dependencies: [isOpen] }
  // );

  return (
    <div className="relative">
      <button
        className="bg-glass text-lg transition-all duration-300 pill hover:bg-black hover:text-white"
        onClick={handleToggle}
      >
        Menu
      </button>
      <div
        ref={menuRef}
        className={`fixed inset-x-0 top-2xl z-50 flex h-screen w-screen flex-col items-center bg-glass transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <ul className="flex h-fit w-full max-w-screen flex-col justify-start px-xs text-6xl">
          {options.map((o, index) => (
            <Link
              ref={(el) => (linkRefs.current[index] = el)}
              key={index}
              className="overflow-hidden leading-none"
              onClick={() => handleSelect(o)}
              href={o.route}
            >
              <span className="text-zinc-950 hover:opacity-50">{o.title}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
