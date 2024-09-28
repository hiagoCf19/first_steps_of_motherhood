"use client";
import React, { useState } from 'react';
import MiniCardVideo from './mini-card';

export interface Video {
  id: number;
  title: string;
}

const VideosMock: Video[] = [
  { id: 1, title: 'Video 1' },
  { id: 2, title: 'Video 2' },
  { id: 3, title: 'Video 3' },
  { id: 4, title: 'Video 4' },
  { id: 5, title: 'Video 5' },
  { id: 6, title: 'Video 6' },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<number>(1);

  const handleClick = (id: number) => {
    setSelectedVideo(id);
  };

  return (
    <section className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 md:px-[10%] bg-backgroundSecondary/50 p-4 sm:px-0 py-[4%] ">
      <div className=" text-center flex justify-center flex-col items-center gap-4 p-4 sm:hidden ">
        <h3 className='text-3xl font-semibold text-center'> Lorem ipsum dolor sit amet</h3>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dignissimos necessitatibus rem, repellat aperiam tempora laudantium eveniet placeat maxime quod quo sit dicta est aspernatur vero odio voluptate unde! Nobis!</p>
      </div>
      {/* esq */}
      <div className="flex flex-col space-y-4 sm:w-2/4 mb-4 sm:mb-0">
        <div className="w-full h-[40vh] bg-background rounded-lg flex items-center justify-center text-primary text-2xl shadow-lg">
          vídeo selecionado {selectedVideo}
        </div>
        <div className="flex gap-4">
          {VideosMock.slice(0, 2).map((video) => (
            <MiniCardVideo
              key={video.id}
              video={video}
              selectedVideo={selectedVideo}
              onClick={() => handleClick(video.id)}
              className='w-[50%] h-[15vh]'

            />
          ))}
        </div>
      </div>
      {/* dir */}
      <div className=" sm:w-2/4 flex flex-col justify-between">
        <div className=" mt-11 text-center md:flex justify-center flex-col items-center gap-8 hidden sm:block">
          <h3 className='text-3xl font-semibold text-center'> Lorem ipsum dolor sit amet</h3>
          <p className=''>&Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dignissimos necessitatibus rem, repellat aperiam tempora laudantium eveniet placeat maxime quod quo sit dicta est aspernatur vero odio voluptate unde! Nobis!</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {VideosMock.slice(2).map((video) => (
            <MiniCardVideo
              key={video.id}
              video={video}
              selectedVideo={selectedVideo}
              onClick={() => handleClick(video.id)}
              className='h-[15vh]'

            />
          ))}



        </div>
      </div>
    </section>
  );
};

export default Videos;
