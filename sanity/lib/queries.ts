import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type=="startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _createdAt,
  author->{
    _id,
    name, 
    "avatar": image.asset->url,
    bio
  },
  "imgUrl": image.asset->url,
  views,
  description,
  category,
  pitch
}`)
