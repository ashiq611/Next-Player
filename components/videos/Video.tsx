import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import authorImage from "../../assets/author.png";

interface VideoType {
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
const Video = ({ video }: { video: VideoType }) => {
  const {id, title, description, author, date, duration, views, link, thumbnail} = video
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link href={`/videos/${id}`}>
            <Image
              src={thumbnail}
              width={800}
              height={450}
              className="w-full h-auto"
              alt={title}
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Image
            src={authorImage}
            className="rounded-full h-6 w-6 shrink-0"
            alt="Learn with Sumit"
          />

          <div className="flex flex-col">
            <Link href="/videos/1">
              <p className="text-white text-sm font-semibold">
                {title}
              </p>
            </Link>
            <span className="text-gray-400 text-xs hover:text-gray-600">
              Learn with Sumit
            </span>
            <p className="text-gray-400 text-xs">{views} Views {date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;