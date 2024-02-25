import React from "react";
import Video from "./Video";
import { useGetVideosQuery } from "@/redux/features/api/apiSlice";
import VideoLoader from "../ui/loading/VideoLoader";
import Error from "../ui/Error";

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

const Videos = () => {
  const { data, isLoading, isError } = useGetVideosQuery("");

  let content = null;

  if (isLoading) {
    content = (
      <>
        {" "}
        <VideoLoader /> <VideoLoader /> <VideoLoader /> <VideoLoader />{" "}
      </>
    );
  }

  if(!isLoading && isError){
    content = <Error message="There was an error"/>
  }

  if(!isLoading && !isError && data?.length === 0){
    content = <Error message="No videos found" />;
  }

  if(!isLoading && !isError && data?.length > 0){
    content = data?.map((video: Video) => (
      <Video key={video.id} video={video} />
    ));
  }


  // console.log(data);

  return content;
};

export default Videos;
