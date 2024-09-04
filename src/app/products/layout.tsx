import { ReactNode } from 'react';

export default async function Layout({
  children
}: {
  children: ReactNode
}) {
  const response = await fetch('http://localhost:3001/products', {
    next: {
      revalidate: 10,
    }
  });
  const products = await response.json();
  console.log({ products });
  return <>{children}</>;
}
