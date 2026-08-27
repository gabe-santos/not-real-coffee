import { notFound } from 'next/navigation';

import { getProduct, getProductRecommendations } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import ColdBrewCanDetails from 'components/product/cold-brew-can-details';

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const product = await getProduct((await params).handle);

  if (!product) return notFound();
  console.log(product);
  const isColdBrewCan = product.tags.includes('cold_brew_can');

  return (
    <>
      <div className="mt-2xl flex w-full max-w-screen flex-col gap-lg px-lg md:flex-row">
        <div className="w-full basis-full overflow-hidden rounded-3xl md:h-[968px]">
          <Suspense
            fallback={
              <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
            }
          >
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width={2000}
              height={2000}
              className="h-full w-full object-cover"
            />
          </Suspense>
        </div>

        {isColdBrewCan && <ColdBrewCanDetails coldBrewCan={product} />}
      </div>
      {/* <RelatedProducts id={product.id} /> */}
      <section className="h-screen"></section>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
