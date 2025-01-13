'use client'

import { useState } from 'react'
import { Heart, MessageCircle } from 'lucide-react'

interface ReelProps {
  videoUrl: string
  likes?: number
  comments?: number
}

function Reel({ videoUrl, likes = 0, comments = 0 }: ReelProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg aspect-[9/16]">
      <video
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
        playsInline
        src={videoUrl}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-blue/80 to-transparent">
        <div className="flex gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-white"
          >
            <Heart
              className={`w-6 h-6 transition-colors ${
                isLiked ? 'fill-light-pink stroke-light-pink' : 'fill-none stroke-white'
              }`}
            />
            <span className="text-sm font-abhaya">{likeCount}</span>
          </button>
          <button className="flex items-center gap-2 text-white">
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm font-abhaya">{comments}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const reels = [
  {
    videoUrl: 'Gallery/r1.mp4',
    likes: 1234,
    comments: 89
  },
  {
    videoUrl: 'Gallery/r2.mp4',
    likes: 856,
    comments: 43
  },
  {
    videoUrl: 'Gallery/r3.mp4',
    likes: 2341,
    comments: 156
  },
  {
    videoUrl: 'Gallery/r4.mp4',
    likes: 967,
    comments: 72
  },
  {
    videoUrl: 'Gallery/r5.mp4',
    likes: 1567,
    comments: 94
  }
]

export default function JoinUsInstagram() {
  return (
    <section className="bg-white h-screen overflow-y-auto py-16 pb-8 md:min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 font-abhaya text-primary-blue">
        Join us
        <span className="block text-2xl md:text-3xl text-primary-gold mt-2">Discover our world</span>
      </h2>
      <div className="relative w-full overflow-x-scroll no-scrollbar">
        <div className="flex gap-4 md:gap-6 pb-8 px-4 min-w-min mx-auto">
          {reels.map((reel, index) => (
            <div 
              key={index} 
              className={`w-[240px] flex-shrink-0 ${index % 2 === 1 ? 'translate-y-8' : ''}`}
            >
              <Reel {...reel} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://www.instagram.com/rajrasajaipur/reels/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary-blue text-white rounded-full shadow-lg hover:bg-primary-gold transition-colors duration-300 z-30"
        >
          Load More
        </a>
      </div>
    </section>
  )
}

