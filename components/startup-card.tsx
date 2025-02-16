import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

export default function StartupCard({ startup }: { startup: StartupTypeCard }) {
  const {
    _createdAt,
    views,
    author,
    title,
    description,
    imgUrl,
    category,
    _id,
  } = startup;

  return (
    <div className="startup-card group">
      <div className="flex items-center justify-between">
        <p className="rounded-full text-[16px] font-medium">
          {formatDate(_createdAt)}
        </p>
        <div className="flex items-center gap-2">
          <Eye className="stroke-default-pink" />
          <span className="font-medium">{views}</span>
        </div>
      </div>
      <div className="my-5 flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <Link href={`/user/${author?._id}`} className="font-medium">
            {author?.name}
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-2xl font-bold">{title}</p>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={author?.avatar || "/user.png"}
              alt="user"
              width={48}
              height={48}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="line-clamp-2 text-base font-normal text-[#333333]">
          {description}
        </p>
      </Link>
      <div className="my-4">
        <Image
          src={imgUrl || "/hero-bg.png"}
          width={300}
          height={300}
          alt="startup-image"
          priority
          className="h-[164px] w-full rounded-[10px] object-cover"
        />
      </div>
      <div className="flex items-center justify-between">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="font-medium capitalize">{category}</p>
        </Link>
        <Button className="rounded-3xl" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </div>
  );
}
