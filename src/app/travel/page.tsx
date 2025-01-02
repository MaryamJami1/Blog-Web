'use client'
import React from "react";
import BlogContent from "../components/BlogContent";

export default function Travel() {
  const blogs = [
    {
      title: "Exploring the Beauty of Paris",
      subtitle: "A beautiful journey through Paris landmarks",
      content: `Paris is known for its beautiful landmarks like the Eiffel Tower, the Louvre Museum, and the Arc de Triomphe. Whether you are taking a walk along the Seine River or sipping coffee at a charming sidewalk café, Paris has an unmistakable charm that makes it a must-visit destination. From the artistic neighborhoods of Montmartre to the luxurious avenues of Champs-Élysées, every corner of Paris has a story to tell. Don’t forget to indulge in delicious French cuisine as you explore this captivating city!`,
      image: "/images/blog1.jpg", // Add the actual path to the image
      author: { name: "John Doe", avatar: "/images/admin.png" },
      date: "January 1, 2025",
      readTime: "5 min read",
      category: "Travel",
      stats: { views: 150, likes: 20 },
    },
    {
      title: "A Trip to the Himalayas",
      subtitle: "A serene adventure in the Himalayan mountains",
      content: `The Himalayas offer a serene environment for hiking and adventure, with breathtaking views and peaceful surroundings. Whether you're hiking through lush green valleys, traversing snow-covered peaks, or simply soaking in the beauty of the Himalayan landscape, this is the perfect destination for adventure seekers and nature lovers alike. The area is rich in culture, and visiting ancient monasteries while enjoying the majestic mountains makes for an unforgettable experience.`,
      image: "/images/blog3.jpg", // Add the actual path to the image
      author: { name: "Jane Smith", avatar: "/images/admin.png" },
      date: "December 20, 2024",
      readTime: "7 min read",
      category: "Adventure",
      stats: { views: 200, likes: 50 },
    },
    {
      title: "Discovering the Beaches of Thailand",
      subtitle: "A tropical paradise in Thailand",
      content: `Thailand beaches are famous for their crystal-clear waters, white sands, and vibrant nightlife. The countrys tropical islands, such as Phuket, Koh Samui, and Koh Phi Phi, offer endless opportunities for adventure and relaxation. Whether you're enjoying a peaceful beach day, snorkeling in colorful coral reefs, or exploring hidden caves, Thailand has it all. For those seeking a more lively experience, the bustling nightlife in places like Patong Beach will keep you entertained all night long.`,
      image: "/images/blog3 (2).jpg",
      author: { name: "Mark Johnson", avatar: "/images/admin.png" },
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Beach",
      stats: { views: 300, likes: 75 },
    }
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
