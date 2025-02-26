import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import View from "@/components/view";

export const expiremental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const startup = await client.fetch(STARTUP_BY_ID_QUERY, {
    id,
  });

  const md = markdownit();
  const parsedContent = md.render(startup?.pitch || "");

  if (!startup) return notFound();

  return (
    <>
      <section className="pink_container !min-w-[230px]">
        <p className="tag">{formatDate(startup?._createdAt)}</p>
        <h1 className="heading">{startup.title}</h1>
        <p className="sub-heading !max-w-5xl">{startup.description}</p>
      </section>

      <section className="section_container">
        <Image
          src={startup?.imgUrl}
          height={500}
          width={500}
          alt="thumbnail"
          className="h-auto w-full rounded-xl object-cover object-center"
        />

        <div className="mx-auto mt-10 max-w-4xl space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Link
                href={`/user/${startup?.author._id}`}
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src={startup?.author.avatar || "/user.png"}
                  width={64}
                  height={64}
                  alt="avatar"
                  className="h-14 w-14 rounded-full object-cover drop-shadow-lg"
                />
              </Link>
              <div>
                <p className="text-lg font-bold">{startup?.author.name}</p>
                <p className="text-sm font-medium">
                  @{startup?.author.username}
                </p>
              </div>
            </div>
            <p className="rounded-3xl bg-[#FFE8F0] px-6 py-2 font-medium capitalize">
              {startup?.category}
            </p>
          </div>
          <h2 className="text-3xl font-bold">Pitch details</h2>
          {parsedContent ? (
            <article
              className="prose prose-lg max-w-4xl break-all font-work-sans"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p>No details provided</p>
          )}
        </div>
        <hr className="mx-auto my-10 max-w-4xl border-dotted bg-zinc-400" />

        {/* Editor selected startups */}

        <Suspense
          fallback={
            <Skeleton className="fixed bottom-3 right-3 h-10 w-24 rounded-lg bg-zinc-400" />
          }
        >
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
