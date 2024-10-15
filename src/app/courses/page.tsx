'use client'
import Link from "next/link"
import { HoverEffect } from "@/app/components/ui/card-hover-effect"
import Footer from "../components/Footer";

function AllCourses() {

    const coursesOffered = [
        {
          title: 'Introduction to Programming',
          description: 'Learn the basics of programming using Python, covering essential concepts and techniques.',
          slug: 'introduction-to-programming',
          isFeatured: true,
        },
        {
          title: 'Data Structures and Algorithms',
          description: 'Master data structures and algorithms to solve complex computational problems efficiently.',
          slug: 'data-structures-and-algorithms',
          isFeatured: true,
        },
        {
          title: 'Web Development with React',
          description: 'Build modern web applications using React.js and learn component-based architecture.',
          slug: 'web-development-with-react',
          isFeatured: true,
        },
        {
          title: 'Database Management Systems',
          description: 'Understand relational databases, SQL, and database design principles.',
          slug: 'database-management-systems',
          isFeatured: true,
        },
        {
          title: 'Machine Learning Fundamentals',
          description: 'Get started with machine learning algorithms and techniques for data analysis.',
          slug: 'machine-learning-fundamentals',
          isFeatured: true,
        },
        {
          title: 'Cybersecurity Basics',
          description: 'Learn essential cybersecurity practices to secure systems and data.',
          slug: 'cybersecurity-basics',
          isFeatured: true,
        },
      ];
      

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 pt-6">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">ALL COURSES</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={coursesOffered.map(course => (
            {
              title: course.title,
              description: course.description,
              link: '/'
            }
          ))}
          />
        </div>

        
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default AllCourses