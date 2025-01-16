import { itunesProxy } from "@/api/itunes-proxy";
import { MediaListAlert, MediaListTable } from "./client";

export const MediaList = async ({
  queryString
}: { queryString?: string }) => {
  let data = null
  let error = null
  if (queryString) {
    data = await itunesProxy(queryString);
    if (data instanceof Error) {
      error = data;
    }
  }

  return (
    <div className="w-full mt-4">
      {error && <MediaListAlert message={error.message} />}
      {data && (
        <MediaListTable data={data?.results || []} />
      )}
    </div>
  );
};
