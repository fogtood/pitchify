import Searchbox from "@/components/searchbox";
import StartupCard from "@/components/startup-card";

const STARTUP = [
  {
    _id: 1,
    createdAt: Date.now(),
    viewsCount: 60,
    author: {
      author_id: 1,
      author_name: "fogtood",
      author_img: "/user.png",
    },
    title: "We Robots",
    description:
      "A mobile app that helps users track and reduce their carbo and and test tets test test test",
    imgUrl:
      "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg",
    category: "Tech",
  },
];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

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
          {STARTUP.map((startup) => (
            <StartupCard key={startup._id} startup={startup} />
          ))}
        </div>
      </section>
    </>
  );
}
