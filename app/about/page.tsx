import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-700 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-4xl w-full">
        <div className="flex justify-center mb-6">
          {/* Profile Image */}
          <Image
            src="/a.jpg" // Replace with your image path
            alt="Student profile picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-teal-600"
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Aneeq</h2>
          <p className="text-xl text-gray-600 mb-6">
            Computer Science Student | Aspiring Data Scientist | Technology Enthusiast
          </p>

          {/* About Section */}
          <div className="text-left text-gray-700 space-y-4">
            <p>
              Hello, Im Aneeq, a Computer Science student currently pursuing my degree at ABC University. I have a strong passion for learning new technologies and solving real-world problems with code. Im always exploring new fields, and currently, I am diving deep into **Data Science** and **Machine Learning**.
            </p>
            <p>
              During my academic journey, Ive worked on multiple projects ranging from **web development** to **data analysis**. I am particularly interested in using data to gain insights and make informed decisions, and I aim to specialize in **Data Science** and **Artificial Intelligence**.
            </p>
            <p>
              My goal is to bridge the gap between theory and practice by working on real-world applications that leverage technology for social impact. I am constantly striving to improve my coding skills and explore new domains within the tech industry.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-8 text-left text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600">Skills & Expertise</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Data Science (Python, Pandas, NumPy)</li>
              <li>Machine Learning (Scikit-learn, TensorFlow, Keras)</li>
              <li>Web Development (React, Node.js, Express)</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>Data Visualization (Matplotlib, Seaborn)</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Problem Solving and Algorithm Design</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="mt-8 text-left text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600">Education</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">ABC University</h4>
                <p className="text-gray-600">B.S. in Computer Science | 2021 - Present</p>
                <p className="text-gray-600">Currently working on projects in **Machine Learning**, **Data Structures**, and **Web Development**.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">XYZ High School</h4>
                <p className="text-gray-600">High School Diploma | 2018 - 2021</p>
                <p className="text-gray-600">Graduated with a strong focus on Mathematics, Physics, and Computer Science.</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-8 text-left text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600">Projects</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Machine Learning Model for Predicting Housing Prices</h4>
                <p className="text-gray-600">Developed a machine learning model using **Linear Regression** and **Random Forest** algorithms to predict housing prices based on various features like location, size, and number of rooms.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Personal Portfolio Website</h4>
                <p className="text-gray-600">Built a personal portfolio using **React.js** and **Tailwind CSS** to showcase my projects, achievements, and skills. Focused on creating a responsive, interactive user experience.</p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-8 text-left text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600">Achievements</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Winner of the **ABC University Hackathon 2023** for best machine learning project.</li>
              <li>Completed the **Google Data Analytics Professional Certificate** on Coursera.</li>
              <li>Finalist in the **XYZ National Coding Competition** 2022.</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-teal-600">Get in Touch</h3>
            <p className="text-gray-700 mt-4">
              Feel free to reach out if you want to discuss tech, AI, or any exciting projects! Im always open to collaboration and new opportunities.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="#"
                className="text-white bg-teal-600 px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                Email Me
              </a>
              <a
                href="#"
                className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;


