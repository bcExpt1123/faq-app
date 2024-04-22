import { Faq } from "./definitions";

export async function getFaqs (): Promise<Faq[]> {

  const CF_ACCESS_CLIENT_SECRET = process.env.CF_ACCESS_CLIENT_SECRET ?? "";
  const CF_ACCESS_CLIENT_ID = process.env.CF_ACCESS_CLIENT_ID ?? "";
  const TOKEN = process.env.TOKEN ?? "";

  const res = await fetch("https://cms.primecarers.co.uk/api/question-answers",
    {
      headers: {
        "CF-Access-Client-Secret": CF_ACCESS_CLIENT_SECRET,
        "CF-Access-Client-Id": CF_ACCESS_CLIENT_ID,
        "Authorization": `Bearer ${TOKEN}`,
      },
    });

  if (!res.ok) {
    throw new Error("Failed to fetch faqs");
  }

  const json = await res.json();

  return json.data;
}