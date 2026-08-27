'use client';

import { Menu, MenuButton, MenuItems } from '@headlessui/react';

import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import type { Cart } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import { Button } from 'components/ui/button';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <Menu as="div" className="relative">
      <MenuButton
        as={Button}
        onClick={toggleCart}
        variant="glass"
        className={`relative pill transition-all duration-300 ${isOpen ? 'invert' : ''}`}
      >
        Cart ({cart?.totalQuantity})
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="my-sm max-h-5/6 w-[400px] rounded-3xl border bg-white p-sm"
      >
        <h1 className="">Cart</h1>
        {!cart || cart.lines.length === 0 ? (
          <p className="flex h-full flex-col items-center justify-center overflow-hidden">
            Your cart is empty
          </p>
        ) : (
          <div className="flex h-full flex-col justify-between">
            <ul className="flex-grow overflow-auto py-4">
              {cart.lines.map((item, i) => {
                const merchandiseSearchParams = {} as MerchandiseSearchParams;

                item.merchandise.selectedOptions.forEach(({ name, value }) => {
                  if (value !== DEFAULT_OPTION) {
                    merchandiseSearchParams[name.toLowerCase()] = value;
                  }
                });

                const merchandiseUrl = createUrl(
                  `/product/${item.merchandise.product.handle}`,
                  new URLSearchParams(merchandiseSearchParams)
                );

                return (
                  <li
                    key={i}
                    className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                  >
                    <div className="relative flex w-full flex-row justify-between px-1 py-4">
                      <div className="relative h-24 w-24 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                        <Image
                          className="h-full w-full object-cover"
                          width={256}
                          height={256}
                          alt={
                            item.merchandise.product.featuredImage.altText ||
                            item.merchandise.product.title
                          }
                          src={item.merchandise.product.featuredImage.url}
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between pl-xs text-base">
                        <div className="flex flex-col">
                          <Link href={merchandiseUrl} className="leading-tight">
                            {item.merchandise.product.title}
                          </Link>
                          {item.merchandise.title !== DEFAULT_OPTION ? (
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                              {item.merchandise.title}
                            </p>
                          ) : null}
                          <Price
                            amount={item.cost.totalAmount.amount}
                            currencyCode={item.cost.totalAmount.currencyCode}
                          />
                        </div>

                        <DeleteItemButton item={item} />
                      </div>
                      <div className="flex flex-col justify-end">
                        <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-black">
                          <EditItemQuantityButton item={item} type="minus" />
                          <p className="flex w-6 items-center text-center">
                            <span className="w-full text-sm">{item.quantity}</span>
                          </p>
                          <EditItemQuantityButton item={item} type="plus" />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="py-3xs text-sm text-neutral-500 dark:text-neutral-400">
              <div className="mb-3 flex items-center justify-between">
                <p>TOTAL</p>
                <Price
                  className="text-right text-base text-black dark:text-white"
                  amount={cart.cost.totalAmount.amount}
                  currencyCode={cart.cost.totalAmount.currencyCode}
                />
              </div>
            </div>
            <Link
              href={cart.checkoutUrl}
              className="flex pill items-center justify-center bg-black text-white hover:invert"
            >
              Checkout
            </Link>
          </div>
        )}
      </MenuItems>
    </Menu>
  );
}
