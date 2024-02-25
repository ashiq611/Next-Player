import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import deleteImage from "../../assets/delete.svg";
import editImage from "../../assets/edit.svg";
import { useDeleteVideoMutation } from '@/redux/features/api/apiSlice';
import { useRouter } from 'next/router';
import Error from '../ui/Error';

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

const Description = ({ video }: { video: VideoType }) => {
  const {title, date, id, description} = video;
  const router = useRouter();

  const [deleteVideo, {isSuccess, isLoading, isError}] = useDeleteVideoMutation();

  const handleDelete = () => {
    deleteVideo(id);
    
  }

  useEffect(() => {
    if(isSuccess){
      router.push("/"); 
    }
  },[isSuccess, router])
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b gap-4">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        <div className="flex gap-6 w-full justify-end">
          <div className="flex gap-1 px-5 py-2 bg-indigo-600 rounded-md ">
            <div className="shrink-0">
              <Link href={`/videos/edit/${id}`}>
                <Image className="w-5 block" src={editImage} alt="Edit" />
              </Link>
            </div>
            <Link href={`/videos/edit/${id}`}>
              <span className="text-sm leading-[1.7142857] cursor-pointer text-white ">
                Edit
              </span>
            </Link>
          </div>
          <div
            className="flex gap-1 cursor-pointer px-5 py-2 bg-red-600 rounded-md"
            onClick={handleDelete}
          >
            <div className="shrink-0">
              <Image className="w-5 block" src={deleteImage} alt="Delete" />
            </div>
            <div className="text-sm leading-[1.7142857]text-white font-bold cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
      {!isLoading && isError && <Error message="There is an error" />}
    </div>
  );
};

export default Description;