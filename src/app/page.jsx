import Card from "@/app/ui/home/cards";

export default async function Page() {
  return (
  <section className="max-w-[1440] p-4 gap-4 mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
    <Card/>
  </section>
  );
}
