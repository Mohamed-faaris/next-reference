

export default async function ProductPage({ params }) {
  const { url } = params;

  return (
      <div className="flex flex-col items-center justify-center min-h-screen p-24">
        <div>
          <h1 className="text-2xl">Dynamic URL</h1>
          <h1 className="text-black bg-white p-1 ">{url}</h1>
        </div>
      </div>
  );
}


