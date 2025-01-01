import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-gray-50 py-16 px-6 md:px-16 font-sans">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Trends in Educational Technology
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 ease-in-out  transform hover:scale-105">
              <Image 
                src="/understanding.jpg" // Replace with the path to your image
                alt="/understanding.jpg" 
                width={500} 
                height={300} 
                className="w-full h-74 object-cover"
                // className="w-[800px] h-[120px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative">
                Understanding Artificial Intelligence
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 text-base mb-4 transition-colors duration-300 group-hover:text-gray-800">
                Artificial Intelligence (AI) is revolutionizing the education sector by transforming how we learn, teach, and manage educational processes. AI refers to machines designed to perform tasks that require human intelligence, such as learning, problem-solving, and decision-making.In education, AI personalizes learning by adapting to individual student needs, helping them learn at their own pace. It automates administrative tasks like grading and scheduling, freeing up teachers time for teaching. AI also provides real-time feedback, helping students improve continuously. Predictive analytics allow educators to spot struggling students and offer targeted support.While AI holds immense potential, challenges like data privacy and ensuring equality need attention. Overall, AI is shaping a more personalized, efficient, and accessible educational experience, making learning more engaging and outcomes better.
                </p>
                <p className="text-blue-600 text-sm font-semibold">30 December 2024</p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Image 
                src="/role.jpg" // Replace with the path to your image
                alt="Role"
                width={500} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative">
                The Role of AI in Education
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 text-base mb-4 transition-colors duration-300 group-hover:text-gray-800">
                AI in education offers tools that can help students grasp complex concepts, learn at their own pace, and receive tailored learning experiences. Machine learning models are applied to predict student performance and recommend resources for improvement, enhancing the overall teaching process.In addition to personalized learning, AI-powered systems provide instant feedback, allowing students to progress without waiting for a teacher’s input. These systems can also identify learning gaps, ensuring that no student is left behind. For educators, AI reduces administrative burdens by automating tasks like grading and tracking student progress. This enables them to devote more time to interactive teaching, fostering a more engaging classroom environment.As AI continues to evolve, it promises to make education more efficient, accessible, and adaptable, benefiting both students and educators alike.
                </p>
                <p className="text-blue-600 text-sm font-semibold">30 December 2024</p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Image 
                src="/python.jpg" // Replace with the path to your image
                alt="python"
                width={500} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative">
                Why Learn Python for Data Science?
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 text-base mb-4 transition-colors duration-300 group-hover:text-gray-800">
                Python is a widely used programming language in the field of data science and education. With libraries such as Pandas, Matplotlib, and SciPy, it is essential for performing data analysis, data visualization, and machine learning tasks. It is also beginner-friendly, making it an excellent choice for students starting their data science journey.Python’s simplicity and readability allow new learners to quickly grasp its concepts, enabling them to focus more on problem-solving rather than complex syntax. Furthermore, Python has a large, supportive community, offering extensive resources, tutorials, and forums to help learners overcome challenges.As data science continues to grow, Python’s versatility and efficiency in handling large datasets and performing complex calculations make it the go-to language for aspiring data scientists. Whether you’re analyzing data, building models, or visualizing insights, Python provides the tools and flexibility needed to succeed in this field.                </p>
                <p className="text-blue-600 text-sm font-semibold">30 December 2024</p>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Image 
                src="/machine.jpg" // Replace with the path to your image
                alt="machine"
                width={500} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative">
                Introduction to Machine Learning for Educators
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 text-base mb-4 transition-colors duration-300 group-hover:text-gray-800">
                Machine learning (ML) can be an invaluable tool for educators. By automating grading, generating personalized learning materials, and predicting student performance, ML can free up teachers to focus on creating more engaging lessons and interacting directly with students.Moreover, ML enables the creation of adaptive learning systems that cater to each students unique needs. These systems can assess individual strengths and weaknesses, offering tailored resources to help students improve. Predictive analytics also help identify students at risk of falling behind, allowing teachers to intervene early and provide targeted support.As ML continues to advance, its potential to enhance the educational experience becomes clearer, offering a smarter, more efficient approach to teaching and learning.                </p>
                <p className="text-blue-600 text-sm font-semibold">30 December 2024</p>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Image 
                src="/e-learning.jpg" // Replace with the path to your image
                alt="e-learning"
                width={500} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative">
                What is E-Learning and How Does It Work?
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 text-base mb-4 transition-colors duration-300 group-hover:text-gray-800">
                E-learning has become a cornerstone of modern education, especially with the rise of remote learning. It utilizes digital platforms to deliver educational content, track student progress, and facilitate collaboration. E-learning allows students to learn at their own pace, making education more flexible and accessible.Through online courses, virtual classrooms, and multimedia tools, e-learning offers a diverse range of educational experiences. Students can engage with interactive lessons, watch instructional videos, take quizzes, and participate in discussions—all from anywhere with an internet connection. E-learning platforms often include analytics to monitor student progress, providing valuable insights for both learners and instructors.By removing the barriers of traditional classroom settings, e-learning promotes lifelong learning and enables individuals to access quality education regardless of location or schedule. As technology continues to advance, e-learning will only become more integral to the future of education, offering new opportunities for personalized and self-directed learning.                </p>
                <p className="text-blue-600 text-sm font-semibold">30 December 2024</p>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Image 
                src="/ar-edu.png" // Replace with the path to your image
                alt="ar-edu"
                width={500} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative">
                Educational Benefits of Augmented Reality (AR)
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 text-base mb-4 transition-colors duration-300 group-hover:text-gray-800">
                Augmented Reality (AR) provides immersive learning experiences that allow students to visualize complex concepts in a more engaging and interactive way. By integrating AR into education, students can experience subjects like science, history, and mathematics in a 3D environment, enhancing their understanding.AR helps bridge the gap between theoretical knowledge and real-world application by allowing students to interact with digital objects in a physical space. For example, students can explore the inner workings of a cell, walk through historical events, or solve math problems in a visual and interactive way. This hands-on approach makes learning more memorable and helps deepen comprehension.Moreover, AR fosters collaboration, as students can work together to explore AR-based activities, strengthening teamwork and communication skills. As AR technology advances, its potential to transform traditional education grows, making learning more dynamic, engaging, and accessible for all students.                </p>
                <p className="text-blue-600 text-sm font-semibold">30 December 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

