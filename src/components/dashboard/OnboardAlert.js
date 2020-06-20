import React from 'react';
import Link from 'next/link';

const OnboardAlert = () => {
  return (
    // <!-- item card -->
    <div class='md:flex shadow-lg  mx-6 md:mx-auto my-10 max-w-lg md:max-w-2xl h-64'>
      <img
        class='h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6'
        src='https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg'
        alt='bag'
      />
      <div class='w-full md:w-2/3 px-4 py-4 bg-white rounded-lg'>
        <div class='flex items-center'>
          <h2 class='text-xl text-gray-800 font-medium mr-auto'>
            Begin Your Onbording Process
          </h2>
        </div>
        <p class='text-sm text-gray-700 mt-4'>
          Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam
          reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum
          at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam
          tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
        </p>
        <div class='flex items-center justify-end mt-4 top-auto'>
          <Link href='/register/onboard'>
            <button class=' bg-blue-600 text-gray-200 px-2 py-2 rounded-md '>
              Begin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnboardAlert;
