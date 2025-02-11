import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function StartupCard({ startup }) {
  const {
    createdAt,
    viewsCount,
    author: { author_img, author_name, author_id },
    title,
    description,
    imgUrl,
    category,
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
          <Link href={`/user/${author_id}`} className="flex-1 font-medium">
            {author_name}
          </Link>
          <p className="text-2xl font-bold">{title}</p>
        </div>

        <div className="relative h-12 w-12">
          <Image src={author_img} alt="user" fill className="object-cover" />
        </div>
      </div>
      <p className="line-clamp-2 text-base font-normal text-[#333333]">
        {description}
      </p>
      <div className="my-4">
        <Image
          src={imgUrl}
          width={300}
          height={300}
          alt="startup-image"
          className="h-[164px] w-full rounded-[10px] object-cover"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-medium">{category}</p>
        <Button className="rounded-3xl">Details</Button>
      </div>
    </div>
  );
}
