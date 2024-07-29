import React from 'react';
import { Link } from 'react-router-dom';
import imagePath from '../assets/home-hero-2.JPG'; // Import the image

// Example services offered by Eve with longer descriptions
const services = [
  {
    title: 'Personal Coaching',
    description: 'Experience transformative growth through our personalized coaching sessions. We focus on setting achievable goals, overcoming personal barriers, and fostering a mindset that drives success. Whether you seek to improve your career, relationships, or personal development, our one-on-one coaching provides tailored strategies and unwavering support.',
    imageUrl: imagePath,
    cta: 'Learn More',
  },
  {
    title: 'Group Workshops',
    description: 'Participate in dynamic group workshops designed to enhance interpersonal skills, foster teamwork, and stimulate personal growth. Our workshops cover a range of topics including communication, leadership, and conflict resolution. These interactive sessions offer valuable insights and practical exercises in a collaborative environment.',
    imageUrl: imagePath,
    cta: 'Join a Workshop',
  },
  {
    title: 'Online Courses',
    description: 'Access a variety of online courses that provide flexibility and convenience for your learning needs. Our courses are crafted to cover essential aspects of personal and professional development, including time management, productivity, and emotional intelligence. Enjoy comprehensive content that you can engage with at your own pace.',
    imageUrl: imagePath,
    cta: 'Explore Courses',
  },
  {
    title: 'Corporate Training',
    description: 'Elevate your organization with our tailored corporate training programs. We offer specialized training to improve employee skills, enhance team dynamics, and create a positive work culture. Our programs are designed to address specific organizational needs, from leadership development to strategic planning.',
    imageUrl: imagePath,
    cta: 'Contact Us',
  },
];

function Servicespage() {
  return (
    <section className="px-4 py-8 mx-auto max-w-screen-xl">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center bg-white ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <img
              className={`object-cover w-full h-96 md:h-auto md:w-1/2 ${
                index % 2 === 0 ? '' : ''
              }`}
              src={service.imageUrl}
              alt={service.title}
            />
            <div className="flex flex-col justify-between p-4 md:w-1/2 md:pl-8 md:pr-4 leading-normal space-y-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-left">
                {service.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-400 text-center md:text-left">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <Link to="/booking">
            <button
              id="S-buttons"
              className="p-3 sm:p-4 text-white border-4 duration-300"
            >
              {service.cta}
            </button>
          </Link>
        </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicespage;
