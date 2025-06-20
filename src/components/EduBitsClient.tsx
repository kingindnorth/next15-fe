'use client';

import React, { useState } from 'react';

interface EduBit {
  id: number;
  title: string;
  youtubeUrl: string;
  thumbnail?: { url: string };
  isStory: boolean;
}

interface EduBitsClientProps {
  eduBits: EduBit[];
}

export default function EduBitsClient({ eduBits }: EduBitsClientProps) {
  const [activeStoryId, setActiveStoryId] = useState<number | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const stories = eduBits.filter(bit => bit.isStory);
  const fullVideos = eduBits.filter(bit => !bit.isStory);
  const activeStory = stories.find(story => story.id === activeStoryId);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Edu Bits</h1>
        <p className="text-lg text-gray-600">Bite-sized and full-length educational videos to boost your knowledge!</p>
      </section>

      {/* Stories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Stories</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {stories.map(story => (
            <div
              key={story.id}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer group"
              onClick={() => setActiveStoryId(story.id)}
            >
              <div className="relative w-20 h-20 rounded-full border-4 border-gradient-to-tr from-pink-500 to-yellow-400 overflow-hidden mb-2 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <img
                  src={
                    story.thumbnail?.url ||
                    `https://img.youtube.com/vi/${getYoutubeId(story.youtubeUrl)}/hqdefault.jpg`
                  }
                  alt={story.title}
                  className="object-cover w-full h-full"
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-center font-medium">{story.title}</span>
            </div>
          ))}
        </div>
        {/* Story Modal Popup */}
        {activeStory && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setActiveStoryId(null)}>
            <div className="relative w-full max-w-md mx-auto" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-white text-2xl z-10"
                onClick={() => setActiveStoryId(null)}
              >
                &times;
              </button>
              <div className="rounded-xl overflow-hidden shadow-lg bg-black">
                <iframe
                  width="350"
                  height="600"
                  src={`https://www.youtube.com/embed/${getYoutubeId(activeStory.youtubeUrl)}?autoplay=1&mute=1&controls=0`}
                  title={activeStory.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-[350px] h-[600px]"
                />
              </div>
              <div className="text-center text-white mt-2 font-semibold">{activeStory.title}</div>
            </div>
          </div>
        )}
      </section>

      {/* Full Length Videos Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Full Length Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullVideos.map(video => (
            <div
              key={video.id}
              className="cursor-pointer border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group bg-white"
              onClick={() => setActiveVideoId(video.id)}
            >
              {activeVideoId === video.id ? (
                <div className="w-full h-56">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYoutubeId(video.youtubeUrl)}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="relative w-full h-56">
                  <img
                    src={
                      video.thumbnail?.url ||
                      `https://img.youtube.com/vi/${getYoutubeId(video.youtubeUrl)}/hqdefault.jpg`
                    }
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-16 h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Helper to extract YouTube video ID from URL
function getYoutubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : '';
}