import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Award, Globe, Heart } from 'lucide-react';

const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 50000,
      suffix: '+',
      label: 'Happy Customers',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 25,
      suffix: '+',
      label: 'Awards Won',
      description: 'Industry recognition'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 45,
      suffix: '+',
      label: 'Countries',
      description: 'Global presence'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Satisfaction',
      description: 'Customer satisfaction rate'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-blue-600">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and customer satisfaction
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center"
              >
                {stat.icon}
              </motion.div>
              
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    delay={0.5 + index * 0.1}
                  />
                )}
                {stat.suffix}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;