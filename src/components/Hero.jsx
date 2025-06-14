import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import bg2 from '../Assets/main-1.png';

const Hero = () => {
  const [headingText, setHeadingText] = useState('');
  const [paragraphText, setParagraphText] = useState('');
  const fullHeading = "Boost Your E-Commerce Sales by 10X";
  const fullParagraph =
    "At Whitecircle Group, we empower online sellers to scale rapidly with data-driven strategies, performance marketing, and expert listing optimization.";

  const headingIndex = useRef(0);
  const paragraphIndex = useRef(0);
  const controls = useAnimation();

  useEffect(() => {
    const typeHeading = () => {
      if (headingIndex.current < fullHeading.length) {
        setHeadingText(fullHeading.slice(0, headingIndex.current + 1));
        headingIndex.current++;
        setTimeout(typeHeading, 50);
      } else {
        setTimeout(typeParagraph, 500);
      }
    };

    const typeParagraph = () => {
      if (paragraphIndex.current < fullParagraph.length) {
        setParagraphText(fullParagraph.slice(0, paragraphIndex.current + 1));
        paragraphIndex.current++;
        setTimeout(typeParagraph, 30);
      }
    };

    typeHeading();
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.6,
      },
    },
  };

  const headingParts = () => {
    const parts = fullHeading.split(' ');
    const highlightStart = parts.indexOf('E-Commerce');
    const highlightEnd = parts.indexOf('10X');
    return parts.map((word, index) => {
      if (index >= highlightStart && index < highlightEnd) {
        return (
          <span
            key={index}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            {word}{' '}
          </span>
        );
      } else if (index === highlightEnd) {
        return (
          <span key={index} className="text-gray-900">
            {word}{' '}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-16 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-ping delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            variants={textVariants}
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6 min-h-[4.5rem] sm:min-h-[5.5rem] lg:min-h-[6.5rem]"
            aria-live="assertive"
          >
            {headingText.length === fullHeading.length
              ? headingParts()
              : headingText}
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 min-h-[5rem] sm:min-h-[6rem]"
            aria-label="Company mission description"
            aria-live="assertive"
          >
            {paragraphText.includes('Whitecircle Group') ? (
              <>
                {paragraphText.split('Whitecircle Group')[0]}
                <span className="font-semibold text-gray-900">
                  Whitecircle Group
                </span>
                {paragraphText.split('Whitecircle Group')[1]}
              </>
            ) : (
              paragraphText
            )}
          </motion.p>

          <motion.a
            href="#contact"
            variants={textVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            role="button"
            aria-label="Book a free growth audit"
          >
            Book Free Growth Audit
          </motion.a>
        </motion.div>

        <motion.div variants={imageVariants} className="flex-1">
          <img
            src={bg2}
            alt="Illustration of e-commerce growth"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
