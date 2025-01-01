export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  stats: {
    views: number;
    comments: number;
    likes: number;
  };
  content: string;
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "mexico-diary-day-1",
    title: "The Mexico Diary, Day 1: Oaxaca",
    subtitle: "Summarize your post in a few short, punchy sentences to entice readers.",
    image: "/images/blog1.jpg",
    author: {
      name: "Admin",
      avatar: "/images/admin.png",
    },
    date: "Mar 26, 2023",
    readTime: "1 min read",
    stats: {
      views: 0,
      comments: 0,
      likes: 2,
    },
    content: "Welcome to your blog post. Use this space to connect with your readers..."
  },
  {
    id: "japan-adventure",
    title: "A Week in Tokyo: Urban Adventures",
    subtitle: "Exploring Tokyo's vibrant streets, temples, and technology hubs.",
    image: "/images/blog3.jpg",
    author: {
      name: "Travel Guide",
      avatar: "/images/admin.png",
    },
    date: "Apr 15, 2023",
    readTime: "3 min read",
    stats: {
      views: 124,
      comments: 5,
      likes: 18,
    },
    content: "Welcome to your blog post. Use this space to connect with your readers..."
  },
  {
    id: "italian-cuisine",
    title: "Discovering Italian Cuisine in Florence",
    subtitle: "A gastronomic journey through Tuscany's authentic recipes.",
    image: "/images/blog3 (2).jpg",
    author: {
      name: "Food Explorer",
      avatar: "/images/admin.png",
    },
    date: "May 3, 2023",
    readTime: "2 min read",
    stats: {
      views: 89,
      comments: 3,
      likes: 12,
    },
    content: "Welcome to your blog post. Use this space to connect with your readers..."
  },
];
