'use client'
import React from "react";
import BlogContent from "../components/BlogContent";

export default function Eat() {
  const blogs = [
    {
      title: "The Best Street Food in Bangkok",
      subtitle: "A culinary adventure in Bangkok's street markets",
      content: `Bangkok is a food lovers paradise, especially when it comes to street food. From savory Pad Thai to crispy spring rolls, the street food in Bangkok is an experience you can’t miss. The bustling markets like Chatuchak and Yaowarat (Chinatown) offer an endless array of mouthwatering dishes that are sure to tantalize your taste buds. Whether you're enjoying a hot bowl of Tom Yum soup or grabbing a quick bite of mango sticky rice, Bangkok’s street food scene is vibrant and delicious.`,
      image: "/images/people.jpg", 
      author: { name: "Emily Brown", avatar: "/images/admin.png" },
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Food",
      stats: { views: 180, likes: 40 },
    },
    {
      title: "Exploring Italian Juice in Rome",
      subtitle: "A deep dive into the heart of Italy's Juice culture",
      content: `Italy is known for its world-renowned Juice, and there's no better place to experience it than in Rome. From traditional dishes like Cacio e Pepe to decadent Carbonara, Roman Juice is rich in flavor and history. In this blog, I explore the best Juice spots in Rome, where you can savor authentic Italian dishes made from the freshest ingredients. If you ever find yourself in Rome, make sure to stop by one of these iconic trattorias for an unforgettable Juice experience.`,
      image: "/images/juice.jpg", 
      author: { name: "Luca Rossi", avatar: "/images/admin.png" },
      date: "December 15, 2024",
      readTime: "6 min read",
      category: "Food",
      stats: { views: 250, likes: 60 },
    },
    {
      title: "The Ultimate Guide to Sandwich in Japan",
      subtitle: "Sandwich culture and where to find the best in Japan",
      content: `Japan is the birthplace of Sandwich, and it is an integral part of Japanese cuisine and culture. From Sandwich bars in Tokyo to traditional Kaiseki restaurants in Kyoto, Japan offers a variety of Sandwich experiences. This blog takes you on a culinary journey through Japan's Sandwich culture, highlighting the best places to eat Sandwich, the different types of Sandwich you should try, and how to appreciate Sandwich beyond just its taste. If you're a Sandwich lover, this is the ultimate guide to experiencing Sandwich like a local.`,
      image: "/images/sandwich.jpg", 
      author: { name: "Satoshi Tanaka", avatar: "/images/admin.png" },
      date: "November 25, 2024",
      readTime: "7 min read",
      category: "Food",
      stats: { views: 350, likes: 80 },
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
