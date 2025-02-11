import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { StartupTypes } from "@/app/page";

export default function StartupCard({ startup }: { startup: StartupTypes }) {
  const {
    createdAt,
    viewsCount,
    author: { avatar, name, _id: authorId },
    title,
    description,
    imgURL,
    category,
    _id,
  } = startup;

  return (
    <div className="startup-card group">
      <div className="flex items-center justify-between">
        <p className="rounded-full text-[16px] font-medium">
          {formatDate(createdAt)}
        </p>
        <div className="flex items-center gap-2">
          <Eye className="stroke-default-pink" />
          <span className="font-medium">{viewsCount}</span>
        </div>
      </div>
      <div className="my-4 flex items-center justify-between">
        <div className="flex flex-col">
          <Link href={`/user/${authorId}`} className="flex-1 font-medium">
            {name}
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-2xl font-bold">{title}</p>
          </Link>
        </div>

        <div className="relative h-12 w-12">
          <Link href={`/user/${authorId}`}>
            <Image src={avatar} alt="user" fill className="object-cover" />
          </Link>
        </div>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="line-clamp-2 text-base font-normal text-[#333333]">
          {description}
        </p>
      </Link>
      <div className="my-4">
        <Image
          src={imgURL}
          width={300}
          height={300}
          alt="startup-image"
          className="h-[164px] w-full rounded-[10px] object-cover"
        />
      </div>
      <div className="flex items-center justify-between">
        <Link href={`/?query=${category}`}>
          <p className="font-medium">{category}</p>
        </Link>
        <Link href={`/startup/${_id}`}>
          <Button className="rounded-3xl">Details</Button>
        </Link>
      </div>
    </div>
  );
}
