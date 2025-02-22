import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Form from "next/form";
import SearchFormReset from "./search-form-reset";

export default function Searchbox({ query }: { query?: string }) {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form mt-8 flex min-h-[80px] w-full max-w-3xl items-center gap-5 rounded-[80px] border-4 border-black bg-white px-5 font-bold"
    >
      <Input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="flex-1 border-none bg-transparent !text-[24px] !placeholder-[#333333] shadow-none !outline-none placeholder:font-semibold focus:!ring-0"
      />
      <div className="flex items-center gap-2">
        {query && <SearchFormReset />}
        <Button
          type="submit"
          size={"icon"}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black"
        >
          <Search className="!size-6" />
        </Button>
      </div>
    </Form>
  );
}
