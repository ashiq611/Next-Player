import React from "react";
import RelatedVideo from "./RelatedVideo";
import { useGetRelatedVideosQuery } from "@/redux/features/api/apiSlice";
import RelatedVideoLoader from "@/components/ui/loading/RelatedVideoLoader";
import Error from "@/components/ui/Error";
type props = {
  id: number;
  title: string;
};

interface Video {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
}
const RelatedVideos = ({ id, title }: props) => {
  const { data, isLoading, isError, isSuccess } = useGetRelatedVideosQuery({
    id,
    title,
  });
  let content = null;
  if (isLoading) {
    content = (
      <>
        {" "}
        <RelatedVideoLoader /> <RelatedVideoLoader /> <RelatedVideoLoader />{" "}
      </>
    );
  }

  if(isError){
    content = <Error message="There was an error" />
  }

  if (isSuccess){
    content = (
      <>
        {data?.map((video : Video) => (
          <RelatedVideo key={video.id} {...video} />
        ))}
      </>
    )
  }
    return (
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {content}
      </div>
    );
};

export default RelatedVideos;
