import { notFound } from "next/navigation";
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
