import { AppSearch } from "@/components/search";
import { MediaList } from "@/components/media-list";
import qs from "qs";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";

const HomePage = async ({ searchParams }: {
  searchParams?: Promise<Record<string, unknown>>;
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-center text-xl mb-6">Welcome to Itunes Search</h1>
      <AppSearch />
      <Suspense fallback={<Spinner className="mt-16" />}>
        <MediaList queryString={qs.stringify(await searchParams)} />
      </Suspense>
    </div>
  );
};

export default HomePage;
