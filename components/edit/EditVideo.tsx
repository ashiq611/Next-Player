import React from 'react';
import Form from '../edit/Form';
import { useRouter } from 'next/router';
import { useGetVideoQuery } from '@/redux/features/api/apiSlice';
import Error from '../ui/Error';

const EditVideo = () => {
  // get url id
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = router.query.id as string | undefined;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, isError, isSuccess } = useGetVideoQuery(id, {
    skip: !id,
  });

  let content = null;

  if (isLoading) {
    content = <div>Loading.....</div>;
  }

  if (!isLoading && isError) {
    content = <Error message="There is a error" />;
  }

  if (!isLoading && !isError && !isSuccess) {
    content = <Error message="No videos found" />;
  }

  if (!isLoading && !isError && isSuccess) {
    content = <Form video={data} />;
  }
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Edit video
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fillup the form to edit video
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default EditVideo;