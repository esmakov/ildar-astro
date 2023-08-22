export async function post({ request }) {
  console.log(request);
  const body = await request.json();
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const prerender = false;
