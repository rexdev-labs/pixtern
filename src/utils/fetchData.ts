import { notFound } from "next/navigation";

import type { Global } from "@/types/api/global";
import type { ApiResponse } from "@/types/api/response/apiResponse";

export async function fetchData<T>(
  input: URL | RequestInfo,
  init?: RequestInit
): Promise<ApiResponse<T>> {
  const res = await fetch(input, init);

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);

  return res.json();
}

export async function fetchGlobalData() {
  return await fetchData<Global>(
    `${process.env.NEXT_PUBLIC_API_URL}/global`,
    {
      next: { revalidate: 60 },
    }
  );
}