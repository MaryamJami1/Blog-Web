'use client'
import React from "react";
import BlogContent from "../components/BlogContent";

export default function Relax() {
  const blogs = [
    {
        title: "Quiet Retreat in the Swiss Alps",
        subtitle: "Recharge your soul in the tranquil Swiss Alps",
        content: `The Swiss Alps arent just for skiing theyre also an ideal destination for those seeking peace and solitude. With its snow-capped mountains, alpine meadows, and crystal-clear lakes, the Swiss Alps offer a serene atmosphere thats perfect for relaxation. Whether you're enjoying a quiet walk along a mountain trail or unwinding in a cozy chalet, the natural beauty of this region will help you relax and reconnect with nature.`,
        image: "/images/towel.jpg", 
        author: { name: "Olivia Carter", avatar: "/images/admin.png" },
        date: "November 30, 2024",
        readTime: "5 min read",
        category: "Relaxation",
        stats: { views: 250, likes: 60 },
      },
  
    {
      title: "Chilling on the Beaches of Maldives",
      subtitle: "Experience the ultimate relaxation on Maldives' white sand beaches",
      content: `The Maldives is the epitome of relaxation. Known for its overwater bungalows and pristine, white sandy beaches, its a destination that promises ultimate tranquility. In this blog, we explore the best beach resorts and activities that will help you unwind from snorkeling with vibrant marine life to enjoying a spa day by the sea. The calm turquoise waters and breathtaking sunsets provide a serene backdrop to a relaxing vacation that you'll never forget.`,
      image: "/images/sun.jpg", 
      author: { name: "James Anderson", avatar: "/images/admin.png" },
      date: "December 20, 2024",
      readTime: "7 min read",
      category: "Relaxation",
      stats: { views: 200, likes: 50 },
    },
    {
        title: "A Tranquil Escape in Balis Ubud",
        subtitle: "Finding peace in Bali's serene jungle retreats",
        content: `Bali is known for its vibrant culture, beautiful beaches, and stunning temples, but if you're looking for a peaceful escape, Ubud is the perfect place. Surrounded by lush greenery, rice terraces, and tranquil rivers, Ubud offers a variety of relaxation experiences, from yoga retreats to traditional spa treatments. Whether youre looking to meditate in a hidden temple or simply enjoy the peace and quiet of the jungle, Ubud has something to offer everyone seeking a calm and peaceful getaway.`,
        image: "/images/beach.jpg", 
        author: { name: "Sophia Lee", avatar: "/images/admin.png" },
        date: "January 12, 2025",
        readTime: "6 min read",
        category: "Relaxation",
        stats: { views: 120, likes: 35 },
      },
   
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {blogs.map((blog, index) => (
        <BlogContent
          key={index}
          title={blog.title}
          subtitle={blog.subtitle}
          content={blog.content}
          image={blog.image}
          author={blog.author}
          date={blog.date}
          readTime={blog.readTime}
          category={blog.category}
          stats={blog.stats}
        />
      ))}
    </div>
  );
}
