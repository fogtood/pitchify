import { client } from "@/sanity/lib/client";
import Ping from "./ping";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { formatNumber } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id }: { id: string }) => {
  const { views } = await client
    .withConfig({
      useCdn: false,
    })
    .fetch(STARTUP_BY_ID_QUERY, { id });

  writeClient
    .patch(id)
    .setIfMissing({ views: 0 })
    .inc({ views: 1 })
    .commit()
    .catch((err) => console.error("Failed to update views:", err));

  return (
    <div className="fixed bottom-3 right-3 mt-5 flex items-center justify-end">
      <div className="absolute -right-2 -top-2">
        <Ping />
      </div>

      <p className="rounded-lg bg-[#FFE8F0] px-4 py-2 text-[16px] font-medium capitalize">
        <span className="font-black">{formatNumber(views)}</span>
      </p>
    </div>
  );
};

export default View;
