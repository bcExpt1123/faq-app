import { getFaqs } from "@/lib/data";

export default async function Home () {

  const faqs = await getFaqs();

  return (
    <section className="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
      <div
        className="container flex flex-col justify-center p-4 mx-auto md:p-8"
      >
        <h2
          className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl"
        >
          Frequently Asked Questions
        </h2>
        <div
          className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700"
        >
          {faqs.map((faq) => (
            <details key={faq.id}>
              <summary
                className="py-2 outline-none cursor-pointer focus:underline"
              >
                {faq.attributes.question}
              </summary>
              <div
                className="px-4 pb-4"
                dangerouslySetInnerHTML={{ __html: faq.attributes.answer }}
              >
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

  );
}
