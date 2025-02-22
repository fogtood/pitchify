"use client";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const SearchFormReset = () => {
  const resetForm = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Button
      type="reset"
      size={"icon"}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-black"
      onClick={resetForm}
    >
      <Link href={"/"}>
        <X className="!size-6" />
      </Link>
    </Button>
  );
};

export default SearchFormReset;
