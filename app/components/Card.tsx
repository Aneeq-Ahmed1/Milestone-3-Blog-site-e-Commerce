"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Make sure to import the Image component from Next.js

const blogPosts = [
  {
    id: 1,
    title: "Understanding Artificial Intelligence",
    content:
      "Artificial Intelligence (AI) is revolutionizing the education sector by enhancing personalized learning experiences, automating administrative tasks, and providing real-time feedback to students. AI can help in creating adaptive learning tools that cater to individual needs, enabling better educational outcomes.",
    date: "30 December 2024",
    image: "/understanding.jpg",
  },
  {
    id: 2,
    title: "The Role of AI in Education",
    content:
      "AI in education offers tools that can help students grasp complex concepts, learn at their own pace, and receive tailored learning experiences. Machine learning models are applied to predict student performance and recommend resources for improvement, enhancing the overall teaching process.",
    date: "30 December 2024",
    image: "/role.jpg",
  },
  {
    id: 3,
    title: "Why Learn Python for Data Science?",
    content:
      "Python is a widely used programming language in the field of data science and education. With libraries such as Pandas, Matplotlib, and SciPy, it is essential for performing data analysis, data visualization, and machine learning tasks. It is also beginner-friendly, making it an excellent choice for students starting their data science journey.",
    date: "30 December 2024",
    image: "/python.jpg",
  },
  {
    id: 4,
    title: "Introduction to Machine Learning for Educators",
    content:
      "Machine learning (ML) can be an invaluable tool for educators. By automating grading, generating personalized learning materials, and predicting student performance, ML can free up teachers to focus on creating more engaging lessons and interacting directly with students.",
    date: "30 December 2024",
    image: "/machine.jpg",
  },
  {
    id: 5,
    title: "What is E-Learning and How Does It Work?",
    content:
      "E-learning has become a cornerstone of modern education, especially with the rise of remote learning. It utilizes digital platforms to deliver educational content, track student progress, and facilitate collaboration. E-learning allows students to learn at their own pace, making education more flexible and accessible.",
    date: "30 December 2024",
    image: "/e-learning.jpg",  
  },
  {
    id: 6,
    title: "Educational Benefits of Augmented Reality (AR)",
    content:
      "Augmented Reality (AR) provides immersive learning experiences that allow students to visualize complex concepts in a more engaging and interactive way. By integrating AR into education, students can experience subjects like science, history, and mathematics in a 3D environment, enhancing their understanding.",
    date: "30 December 2024",
    image: "/ar-edu.png",
  },
];

const Card = () => {
  const router = useRouter();

  const handleReadMore = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="bg-blue-50 md:px-10 px-4 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Latest Educational Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400} // Adjust width
                  height={250} // Adjust height
                  className="w-full h-74 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 hover:underline transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm hover:text-blue-600 hover:underline transition-colors duration-200">
                  {post.content}
                </p>
                <p className="text-blue-500 text-xs font-medium mt-4">
                  Published on {post.date}
                </p>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="mt-4 inline-block px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm transition-all transform hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
