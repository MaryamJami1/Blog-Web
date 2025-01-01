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
    content: `
    Day 1 of our Mexico adventure! We arrived in Oaxaca, a city full of history, vibrant culture, and mouthwatering food. 
    The streets are lined with colonial buildings, bustling markets, and colorful art, and the air is filled with the scent of street tacos. 
    Today, we explored the city center, visited the Zócalo (main square), and took in the stunning views of the surrounding mountains. 
    Oaxaca charm lies not only in its history but also in its food, and we cant wait to share our culinary experiences throughout this trip. Stay tuned for more!
    `  },
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
    content: `
    Tokyo is a city that never sleeps, with its neon lights, cutting-edge technology, and blend of old and new. 
    From the ancient temples of Asakusa to the towering skyscrapers of Shibuya, every corner of Tokyo offers something new and exciting. 
    Our first stop was the iconic Shibuya Crossing, where the sheer volume of people crossing the street at once is a sight to behold. 
    We also visited Akihabara, Tokyo's tech and gaming hub, and explored the serene gardens of the Meiji Shrine. 
    Tokyo has a perfect balance of modernity and tradition, and we can't wait to explore more in the coming days. Follow along for more adventures!
    `  },
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
    content: `
    Florence, the birthplace of the Renaissance, is not just a city of art but also a city of food. 
    Tuscany's cuisine is simple yet full of flavor, using the freshest local ingredients and centuries-old recipes. 
    From rich ribollita (a hearty vegetable soup) to tender bistecca alla fiorentina (Florentine steak), each dish tells the story of this beautiful region. 
    We visited a traditional trattoria, where the chef prepared fresh pasta from scratch, and enjoyed an unforgettable meal paired with a local Chianti wine. 
    Florence offers more than just its art and architecture—its a food lovers paradise that will leave you craving more.
    `  },
];
