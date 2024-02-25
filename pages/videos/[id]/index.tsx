import Error from "@/components/ui/Error";
import PlayerLoader from "@/components/ui/loading/PlayerLoader";
import RelatedVideoLoader from "@/components/ui/loading/RelatedVideoLoader";
import Description from "@/components/video/Description";
import Player from "@/components/video/Player";
import RelatedVideos from "@/components/video/related/RelatedVideos";
import { useGetVideoQuery } from "@/redux/features/api/apiSlice";
import { useRouter } from "next/router";

// import React from 'react';

const Index = () => {
  // get url id
  const router = useRouter();
  const id = router.query.id as string | undefined;

  const { data, isLoading, isError } = useGetVideoQuery(id, {
    skip: !id,
  });

  let content = null;

  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <Error message="No videos found" />;
  }

  if (!isLoading && !isError && data?.id) {
    content = (
      <>
        <Player link={data?.link} title={data?.title} />
        <Description video={data} />{" "}
      </>
    );
  }

  console.log(router.query.id);
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          {data?.id ? (
            <RelatedVideos id={data?.id} title={data?.title} />
          ) : isLoading ? (
            <>
              {" "}
              <RelatedVideoLoader /> <RelatedVideoLoader />{" "}
              <RelatedVideoLoader />{" "}
            </>
          ) : (
            <Error message="Error" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;
