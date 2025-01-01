export interface BlogPost {
  id: string
  title: string
  subtitle: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
  stats: {
    views: number
    comments: number
    likes: number
  }
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "mexico-diary-day-1",
    title: "The Mexico Diary, Day 1: Oaxaca",
    subtitle: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "/images/blog1.jpg",
    author: {
      name: "Admin",
      avatar: "/images/admin.png"
    },
    date: "Mar 26, 2023",
    readTime: "1 min read",
    stats: {
      views: 0,
      comments: 0,
      likes: 2
    },
    content: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that is current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.Writing a blog is a great way to position yourself as an authority in your field and captivate your readers attention. Do you want to improve your sites SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags ( #dream #summer #vacation) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business personality shine through.Choose a great image to feature in your post or add a video for extra engagement.Are you ready to get started?Simply create a new post now. “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you are going for a more editorial style blog Use this space to connect with your readers and potential custome there is a stunning layout for everyone.”Use this space to connect with your readers and potential custome"
    },
  {
    id: "japan-adventure",
    title: "A Week in Tokyo: Urban Adventures",
    subtitle: "Exploring the vibrant streets of Tokyo, from traditional temples to modern technology hubs. Join me on this exciting journey through Japan's capital...",
    image: "/images/blog3.jpg",
    author: {
      name: "Travel Guide",
      avatar: "/images/admin.png"
    },
    date: "Apr 15, 2023",
    readTime: "3 min read",
    stats: {
      views: 124,
      comments: 5,
      likes: 18
    },
    content: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that is current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.Writing a blog is a great way to position yourself as an authority in your field and captivate your readers attention. Do you want to improve your sites SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags ( #dream #summer #vacation) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business personality shine through.Choose a great image to feature in your post or add a video for extra engagement.Are you ready to get started?Simply create a new post now.Use this space to connect with your readers and potential customers “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you are going for a more editorial style blog - there is a stunning layout for everyone.”Use this space to connect with your readers and potential custome"
  },
  {
    id: "italian-cuisine",
    title: "Discovering Italian Cuisine in Florence",
    subtitle: "A gastronomic journey through the heart of Tuscany, featuring authentic recipes, local ingredients, and centuries-old cooking traditions...",
    image: "/images/blog3 (2).jpg",
    author: {
      name: "Food Explorer",
      avatar: "/images/admin.png"
    },
    date: "May 3, 2023",
    readTime: "2 min read",
    stats: {
      views: 89,
      comments: 3,
      likes: 12
    },
    content: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that is current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.Writing a blog is a great way to position yourself as an authority in your field and captivate your readers attention. Do you want to improve your sites SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags ( #dream #summer #vacation) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business personality shine through.Choose a great image to feature in your post or add a video for extra engagement.Are you ready to get started?Simply create a new post now. “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you are going for a more editorial style blog Use this space to connect with your readers and potential custome there is a stunning layout for everyone.”Use this space to connect with your readers and potential customers"
  }
]

