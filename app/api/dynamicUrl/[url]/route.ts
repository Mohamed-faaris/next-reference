import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ url: string }>;
  }
) {
  const { url } = await params;
  const searchParams = req.nextUrl.searchParams;
  const searchParam = searchParams.get("param");
  return Response.json({
    message: `Received URL param: ${url} and search param: ${searchParam}`,
  });
}

export async function POST(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ url: string }>
  }
) {
  const { url } = await params;
  const body = await req.json();
  return Response.json({
    message: `Received URL param: ${url} and body: ${JSON.stringify(body)}`,
  });
}
