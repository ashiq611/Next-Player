"use client";
import React, { useState } from "react";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import { useAddVideoMutation } from "@/redux/features/api/apiSlice";
import Success from "../ui/Success";
import Error from "../ui/Error";

const Form = () => {
  const [addVideo, { data: video, isLoading, isSuccess, isError }] = useAddVideoMutation();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState("");
  const [error, setError] = useState("");

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleOnChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleOnChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleOnChangeThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThumbnail(e.target.value);
  };

  const handleOnChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleOnChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value);
  };

  const handleOnChangeViews = (e: React.ChangeEvent<HTMLInputElement>) => {
    setViews(e.target.value);
  };

 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addVideo({
      title,
      author,
      description,
      link,
      thumbnail,
      date,
      duration,
      views,
    });
   

  };

  

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Video Title" value={title} onChange={handleOnChangeTitle} />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Author" value={author} onChange={handleOnChangeAuthor} />
            </div>

            <div className="col-span-6">
              <TextArea title="Description" value={description} onChange={handleOnChangeDescription} />
            </div>

            <div className="col-span-6">
              <TextInput title="YouTube Video link" value={link} onChange={handleOnChangeLink} />
            </div>

            <div className="col-span-6">
              <TextInput title="Thumbnail link" value={thumbnail} onChange={handleOnChangeThumbnail} />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Upload Date" value={date} onChange={handleOnChangeDate} />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video Duration" value={duration} onChange={handleOnChangeDuration} />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video no of views" value={views} onChange={handleOnChangeViews} />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
          disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {
          isSuccess && (
            
            <Success message="Video was added successfully" />
          )
        }
        {
          isError && (
            <Error message="There is a error"/>
          )
        }

      </div>
    </form>
  );
};

export default Form;
