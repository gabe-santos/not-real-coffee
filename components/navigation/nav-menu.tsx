'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'components/ui/button';
import arrowDown from 'public/arrow-down.svg';
import arrowUp from 'public/arrow-up.svg';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { NavMenuItem } from './navbar';

export default function NavMenu({ options }: { options: NavMenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // const handleSelect = (option) => {
  //   setIsOpen(false);
  // };

  return (
    <>
      {/* Blurred background overlay */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-30 bg-glass" />
      </Transition>

      {/* Menu button and content container */}
      <Menu as="div" className="relative z-50">
        {/* Menu button */}
        <MenuButton
          as={Button}
          onClick={handleToggle}
          variant="glass"
          className={`relative z-50 pill transition-all duration-300 ${isOpen ? 'invert' : ''}`}
        >
          Menu
          {isOpen ? (
            <Image src={arrowDown} alt="arrow down" className="h-sm w-sm" />
          ) : (
            <Image src={arrowUp} alt="arrow up" className="h-sm w-sm" />
          )}
        </MenuButton>

        {/* Menu content */}
        <MenuItems
          className={`fixed inset-x-0 top-0 z-45 flex h-screen w-screen flex-col items-center transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <ul className="flex w-full max-w-screen flex-col items-start justify-start px-sm pt-xl text-4xl leading-none">
            {options.map((o: NavMenuItem, i: number) => {
              return (
                <MenuItem key={i}>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={o.route}
                    className="hover:opacity-50"
                  >
                    {o.title}
                  </Link>
                </MenuItem>
              );
            })}
          </ul>
          {/*   <ul className="flex h-fit w-full max-w-screen flex-col justify-start px-xs pt-20 text-4xl"> */}
          {/*     {options.map((o, index) => ( */}
          {/*       <Link */}
          {/*         key={index} */}
          {/*         className="overflow-hidden leading-none" */}
          {/*         onClick={() => setIsOpen(!false)} */}
          {/*         href={o.route} */}
          {/*       > */}
          {/*         <span className="text-zinc-950 hover:opacity-50">{o.title}</span> */}
          {/*       </Link> */}
          {/*     ))} */}
          {/*   </ul> */}
        </MenuItems>
      </Menu>
    </>
  );
}
