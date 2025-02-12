import Searchbox from "@/components/searchbox";
import StartupCard from "@/components/startup-card";

export interface AuthorTypes {
  _id: number;
  name: string;
  avatar: string;
}

export interface StartupTypes {
  _id: number;
  createdAt: string;
  viewsCount: number;
  author: AuthorTypes;
  title: string;
  description: string;
  imgURL: string;
  category: string;
}

const STARTUP: StartupTypes[] = [
  {
    _id: 1,
    createdAt: Date(),
    viewsCount: 60,
    author: {
      _id: 1,
      name: "fogtood",
      avatar: "/user.png",
    },
    title: "We Robots",
    description:
      "A mobile app that helps users track and reduce their carbo and and test tets test test test",
    imgURL:
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
