import { getPage } from 'lib/shopify';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const page = await getPage((await params).page);

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <p>{page.body as string}</p>
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
