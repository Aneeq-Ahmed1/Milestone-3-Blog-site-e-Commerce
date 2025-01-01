"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const BlogPost = () => {
  const params = useParams();
  const id = params?.id;

  const blogPosts: Record<
    number,
    { title: string; content: string; date: string; image?: string }
  > = {
    1: {
      title: "Understanding Artificial Intelligence",
      content:
        "Artificial Intelligence (AI) is revolutionizing the education sector by transforming how we learn, teach, and manage educational processes. AI refers to machines designed to perform tasks that require human intelligence, such as learning, problem-solving, and decision-making.In education, AI personalizes learning by adapting to individual student needs, helping them learn at their own pace. It automates administrative tasks like grading and scheduling, freeing up teachers' time for teaching. AI also provides real-time feedback, helping students improve continuously. Predictive analytics allow educators to spot struggling students and offer targeted support.While AI holds immense potential, challenges like data privacy and ensuring equality need attention. Overall, AI is shaping a more personalized, efficient, and accessible educational experience, making learning more engaging and outcomes better.",
      date: "30 December 2024",
      image: "/understanding.jpg",
    },
    2: {
      title: "The Role of AI in Education",
      content:
        "AI in education offers tools that can help students grasp complex concepts, learn at their own pace, and receive tailored learning experiences. Machine learning models are applied to predict student performance and recommend resources for improvement, enhancing the overall teaching process.In addition to personalized learning, AI-powered systems provide instant feedback, allowing students to progress without waiting for a teacher’s input. These systems can also identify learning gaps, ensuring that no student is left behind. For educators, AI reduces administrative burdens by automating tasks like grading and tracking student progress. This enables them to devote more time to interactive teaching, fostering a more engaging classroom environment.As AI continues to evolve, it promises to make education more efficient, accessible, and adaptable, benefiting both students and educators alike.",
      date: "30 December 2024",
      image: "/role.jpg",
    },
    3: {
      title: "Why Learn Python for Data Science?",
      content:
        "Python is a widely used programming language in the field of data science and education. With libraries such as Pandas, Matplotlib, and SciPy, it is essential for performing data analysis, data visualization, and machine learning tasks. It is also beginner-friendly, making it an excellent choice for students starting their data science journey.Python’s simplicity and readability allow new learners to quickly grasp its concepts, enabling them to focus more on problem-solving rather than complex syntax. Furthermore, Python has a large, supportive community, offering extensive resources, tutorials, and forums to help learners overcome challenges.As data science continues to grow, Python’s versatility and efficiency in handling large datasets and performing complex calculations make it the go-to language for aspiring data scientists. Whether you’re analyzing data, building models, or visualizing insights, Python provides the tools and flexibility needed to succeed in this field.",
      date: "30 December 2024",
      image: "/python.jpg",
    },
    4: {
      title: "Introduction to Machine Learning for Educators",
      content:
        "Machine learning (ML) can be an invaluable tool for educators. By automating grading, generating personalized learning materials, and predicting student performance, ML can free up teachers to focus on creating more engaging lessons and interacting directly with students.Moreover, ML enables the creation of adaptive learning systems that cater to each student's unique needs. These systems can assess individual strengths and weaknesses, offering tailored resources to help students improve. Predictive analytics also help identify students at risk of falling behind, allowing teachers to intervene early and provide targeted support.As ML continues to advance, its potential to enhance the educational experience becomes clearer, offering a smarter, more efficient approach to teaching and learning.",
      date: "30 December 2024",
      image: "/machine.jpg",
    },
    5: {
      title: "What is E-Learning and How Does It Work?",
      content:
        "E-learning has become a cornerstone of modern education, especially with the rise of remote learning. It utilizes digital platforms to deliver educational content, track student progress, and facilitate collaboration. E-learning allows students to learn at their own pace, making education more flexible and accessible.Through online courses, virtual classrooms, and multimedia tools, e-learning offers a diverse range of educational experiences. Students can engage with interactive lessons, watch instructional videos, take quizzes, and participate in discussions—all from anywhere with an internet connection. E-learning platforms often include analytics to monitor student progress, providing valuable insights for both learners and instructors.By removing the barriers of traditional classroom settings, e-learning promotes lifelong learning and enables individuals to access quality education regardless of location or schedule. As technology continues to advance, e-learning will only become more integral to the future of education, offering new opportunities for personalized and self-directed learning.",
      date: "30 December 2024",
      image: "/e-learning.jpg",
    },
    6: {
      title: "Educational Benefits of Augmented Reality (AR)",
      content:
        "Augmented Reality (AR) provides immersive learning experiences that allow students to visualize complex concepts in a more engaging and interactive way. By integrating AR into education, students can experience subjects like science, history, and mathematics in a 3D environment, enhancing their understanding.AR helps bridge the gap between theoretical knowledge and real-world application by allowing students to interact with digital objects in a physical space. For example, students can explore the inner workings of a cell, walk through historical events, or solve math problems in a visual and interactive way. This hands-on approach makes learning more memorable and helps deepen comprehension.Moreover, AR fosters collaboration, as students can work together to explore AR-based activities, strengthening teamwork and communication skills. As AR technology advances, its potential to transform traditional education grows, making learning more dynamic, engaging, and accessible for all students.",
      date: "30 December 2024",
      image: "/ar-edu.png",
    },
  };

  const post = blogPosts[Number(id) as keyof typeof blogPosts];

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [newName, setNewName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const addComment = () => {
    if (newName.trim() && newComment.trim()) {
      setComments([...comments, { name: newName, comment: newComment }]);
      setNewName("");
      setNewComment("");
    }
  };

  if (!post) {
    return <p className="text-center text-xl text-red-500">Blog post not found.</p>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto bg-gradient-to-b from-indigo-100 via-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-6 max-w-3xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-68 object-cover rounded-md mb-6"
          />
        )}
        <p className="text-lg text-gray-700 mb-4">{post.content}</p>
        <p className="text-sm text-gray-500">Published on {post.date}</p>
      </div>

      <div className="bg-white shadow-lg w-full max-w-3xl mx-auto mt-8 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md text-gray-800"
              >
                <p className="font-semibold">{comment.name}:</p>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment"
            className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <button
            onClick={addComment}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

