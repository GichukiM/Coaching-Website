import React, { useState, useEffect } from 'react';
import imagePath from '../assets/home-hero-2.JPG';

function KnowEve() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8`}>
        {isMobile ? (
          <>
            {/* Image */}
            <div className="space-y-8">
              <div>
                <img src={imagePath} alt="Eve" className="w-full h-auto" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Eve</h2>
                <p className="text-gray-700 mb-4">
                  Eve Muchiri is a renowned coach and motivational speaker with a rich background in personal development and empowerment. Her career spans over a decade, during which she has transformed countless lives through her insightful coaching techniques and empathetic approach.
                </p>
                <p className="text-gray-700 mb-4">
                  Eve’s methodology is built on a foundation of deep psychological principles combined with practical, actionable strategies. She specializes in helping individuals unlock their full potential, gain clarity on their life goals, and overcome personal obstacles.
                </p>
                <p className="text-gray-700 mb-4">
                  With a focus on fostering self-awareness and building resilience, Eve empowers her clients to take control of their personal and professional lives. Her coaching style emphasizes both immediate improvements and long-term growth, ensuring that individuals are equipped to handle future challenges with confidence.
                </p>
                <p className="text-gray-700">
                  Through her guidance, clients gain valuable insights into their strengths and areas for improvement. This process not only enhances their self-belief but also provides them with the tools needed to achieve lasting positive change. Eve’s impact is profound, making a significant difference in the lives of those she coaches.
                </p>
              </div>

              {/* Second Image */}
              <div>
                <img src={imagePath} alt="Eve" className="w-full h-auto" />
              </div>

              {/* Second Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Eve Can Help You</h2>
                <p className="text-gray-700 mb-4">
                  Working with Eve Muchiri offers a transformative experience for anyone seeking personal growth and self-actualization. Her coaching approach is meticulously designed to help individuals identify and overcome their limiting beliefs and behavioral patterns.
                </p>
                <p className="text-gray-700 mb-4">
                  Through personalized sessions, Eve provides the tools and strategies necessary to achieve both short-term and long-term goals. One of the core aspects of Eve’s coaching is her ability to tailor her methods to suit the unique needs of each client.
                </p>
                <p className="text-gray-700 mb-4">
                  This individualized attention ensures that clients receive the support and guidance they need to make meaningful progress. Eve’s focus on building self-awareness and resilience empowers clients to navigate life’s challenges with newfound confidence and clarity.
                </p>
                <p className="text-gray-700 mb-4">
                  Additionally, Eve’s holistic approach addresses various facets of personal development, including emotional well-being, goal setting, and strategic planning. Her sessions are not just about immediate fixes but are aimed at fostering sustainable growth and self-improvement.
                </p>
                <p className="text-gray-700">
                  By working with Eve, clients gain a deeper understanding of their personal strengths and areas for development. This insight, coupled with actionable advice and ongoing support, helps them to stay motivated and focused on their journey toward self-actualization.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* First Column - Content */}
            <div className="space-y-8">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Eve</h2>
                <p className="text-gray-700 mb-4">
                  Eve Muchiri is a renowned coach and motivational speaker with a rich background in personal development and empowerment. Her career spans over a decade, during which she has transformed countless lives through her insightful coaching techniques and empathetic approach.
                </p>
                <p className="text-gray-700 mb-4">
                  Eve’s methodology is built on a foundation of deep psychological principles combined with practical, actionable strategies. She specializes in helping individuals unlock their full potential, gain clarity on their life goals, and overcome personal obstacles.
                </p>
                <p className="text-gray-700 mb-4">
                  With a focus on fostering self-awareness and building resilience, Eve empowers her clients to take control of their personal and professional lives. Her coaching style emphasizes both immediate improvements and long-term growth, ensuring that individuals are equipped to handle future challenges with confidence.
                </p>
                <p className="text-gray-700">
                  Through her guidance, clients gain valuable insights into their strengths and areas for improvement. This process not only enhances their self-belief but also provides them with the tools needed to achieve lasting positive change. Eve’s impact is profound, making a significant difference in the lives of those she coaches.
                </p>
              </div>

              {/* First Column - Image */}
              <div>
                <img src={imagePath} alt="Eve" className="w-full h-auto" />
              </div>
            </div>

            {/* Second Column - Content */}
            <div className="space-y-8">

                {/* Second Image */}
              <div>
                <img src={imagePath} alt="Eve" className="w-full h-auto" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Eve Can Help You</h2>
                <p className="text-gray-700 mb-4">
                  Working with Eve Muchiri offers a transformative experience for anyone seeking personal growth and self-actualization. Her coaching approach is meticulously designed to help individuals identify and overcome their limiting beliefs and behavioral patterns.
                </p>
                <p className="text-gray-700 mb-4">
                  Through personalized sessions, Eve provides the tools and strategies necessary to achieve both short-term and long-term goals. One of the core aspects of Eve’s coaching is her ability to tailor her methods to suit the unique needs of each client.
                </p>
                <p className="text-gray-700 mb-4">
                  This individualized attention ensures that clients receive the support and guidance they need to make meaningful progress. Eve’s focus on building self-awareness and resilience empowers clients to navigate life’s challenges with newfound confidence and clarity.
                </p>
                <p className="text-gray-700 mb-4">
                  Additionally, Eve’s holistic approach addresses various facets of personal development, including emotional well-being, goal setting, and strategic planning. Her sessions are not just about immediate fixes but are aimed at fostering sustainable growth and self-improvement.
                </p>
                <p className="text-gray-700">
                  By working with Eve, clients gain a deeper understanding of their personal strengths and areas for development. This insight, coupled with actionable advice and ongoing support, helps them to stay motivated and focused on their journey toward self-actualization.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default KnowEve;
