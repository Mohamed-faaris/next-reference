## Dynamic Routes and Params Example

This project demonstrates how to use dynamic route parameters in Next.js using the App Router.

### Example: Dynamic URL Page

The file `app/dynamicUrlSSR/[url]/page.tsx` creates a dynamic route. The `[url]` part of the folder name tells Next.js to treat anything in that segment of the URL as a parameter.

#### Code Example

```tsx
// app/dynamicUrlSSR/[url]/page.tsx
export default async function ProductPage({ params }) {
  const { url } = params;
  return (
    <div>
      <div>
        <h1>Dynamic URL</h1>
        <h1>{url}</h1>
      </div>
    </div>
  );
}
```

#### How to Use

- Visit `/dynamicUrlSSR/hello` in your browser. The page will display `hello`.
- Visit `/dynamicUrlSSR/anything-you-want` and it will display `anything-you-want`.

#### How it Works

- The folder name `[url]` makes the route dynamic.
- The `params` object is provided by Next.js and contains all dynamic segments.
- You can access the value with `const { url } = params;`.

#### More Info

- You can add more dynamic segments by nesting folders, e.g. `[category]/[id]/page.tsx`.
- See the [Next.js Dynamic Routes documentation](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) for more details.

## Dynamic URL Handling Examples

This project demonstrates several ways to handle dynamic URLs in Next.js:

### 1. Client-side Dynamic Route

`app/dynamicUrl/[url]/page.tsx`

```tsx
export default function DynamicUrlPage({ params }) {
  const { url } = params;
  return (
    <div>
      <h1>Dynamic URL (Client)</h1>
      <div>{url}</div>
    </div>
  );
}
```

- Access via `/dynamicUrl/anything` to see `anything` rendered.

### 2. Server-side Rendering (SSR) Dynamic Route

`app/dynamicUrlSSR/[url]/page.tsx`

```tsx
export default async function ProductPage({ params }) {
  const { url } = params;
  return (
    <div>
      <h1>Dynamic URL (SSR)</h1>
      <div>{url}</div>
    </div>
  );
}
```

- Access via `/dynamicUrlSSR/anything` to see `anything` rendered, using an async server component.

### 3. API Route Returning JSON

`app/api/dynamicUrl/[url]/route.ts`

```ts
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { url } = params;
  return NextResponse.json({ url });
}
```

- Fetch `/api/dynamicUrl/anything` to get `{ "url": "anything" }` as JSON.

### 4. Using Search Params

To access query/search parameters:

```tsx
// Example: app/dynamicUrlSSR/[url]/page.tsx
import { useSearchParams } from "next/navigation";

export default function Page({ params }) {
  const searchParams = useSearchParams();
  const foo = searchParams.get("foo");
  return (
    <div>
      <div>URL param: {params.url}</div>
      <div>Search param foo: {foo}</div>
    </div>
  );
}
```

- Visit `/dynamicUrlSSR/anything?foo=bar` to see `foo: bar`.
