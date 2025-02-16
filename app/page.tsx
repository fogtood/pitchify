import Searchbox from "@/components/searchbox";
import StartupCard, { StartupTypeCard } from "@/components/startup-card";
import { sanityFetch } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

  const { data: STARTUPS } = await sanityFetch({
    query: STARTUPS_QUERY,
  });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <Searchbox query={query} />
      </section>

      <section className="section-container mx-auto max-w-7xl px-6 py-10">
        <p className="text-[30px] font-semibold text-black">
          {query ? `Search results for "${query}" ` : "All Startups"}
        </p>
        <div className="my-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {STARTUPS.map((startup: StartupTypeCard) => (
            <StartupCard key={startup._id} startup={startup} />
          ))}
        </div>
      </section>
    </>
  );
}
