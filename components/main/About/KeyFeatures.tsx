import React from 'react';

interface FeatureBlockProps {
  title: string;
  content: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, content }) => (
  <blockquote className='border-l-4 border-teal-500 pl-6 transition-all duration-300 hover:border-blue-800 hover:pl-8'>
    <h3 className='text-2xl font-semibold mb-3 text-teal-200 transition-colors duration-300 hover:text-teal-100'>{title}</h3>
    <p className='text-lg leading-relaxed'>{content}</p>
  </blockquote>
)

const KeyFeatures: React.FC = () => {
  return (
    <div className='text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-950 flex flex-col sm:my-1 mx-auto rounded-lg p-8 shadow-md'>
      <section className='mb-12'>
        <h2 className='text-4xl font-bold mb-6 text-teal-500 dark:text-teal-300 transition-colors duration-300 hover:text-teal-900'>Overview</h2>
        <h3 className='text-2xl font-semibold mb-4 text-teal-200 dark:text-teal-100'>What is Squig?</h3>
        <p className='text-lg leading-relaxed'>
          Squig stands out by offering more choices in coding simplicity and efficiency exploration. In a world where traditional complexity often reigns supreme, Squig emerges as a distinctive player, providing alternative paths to coding without compromising power.
        </p>
      </section>

      <section>
        <h2 className='text-4xl font-bold mb-8 text-teal-500 dark:text-teal-300 transition-colors duration-300 hover:text-teal-900'>Key Features</h2>
        <div className='space-y-8'>
          <FeatureBlock 
            title="Expanded Options in Simplicity"
            content="Squig isn't just about minimalism; it's about giving developers additional avenues to explore simplicity, allowing for a coding experience tailored to individual preferences."
          />
          <FeatureBlock 
            title="Versatility with a Twist"
            content="While Squig might not claim superiority over traditional programming languages, it stands as an alternative, offering different possibilities. Explore the uncharted territories of coding with Squig's distinctive approach."
          />
        </div>
      </section>
    </div>
  )
}

export default KeyFeatures;
