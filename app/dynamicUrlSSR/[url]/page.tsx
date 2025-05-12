// app/product/[id]/page.tsx

interface ProductPageProps {
  params: { url: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      Product ID from path: <strong>{params.url}</strong>
    </div>
  );
}
