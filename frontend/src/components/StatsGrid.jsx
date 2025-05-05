import React, { useState } from 'react';
import StatsCard from './StatsCard';

const StatsGrid = ({ classesCount }) => {
  const [statsData] = useState([
    {
      title: "Total Classes",
      subtitle: "Your Classes",
      value: classesCount.toString(),
      iconClass: "BookOpenText",
      percentChange: 12.5 
    },
    {
      title: "Average Rating",
      subtitle: "Student Feedback",
      value: "4.8", 
      iconClass: "Star",
      percentChange: 2.1 
    },
    {
      title: "Sentiment Analysis",
      subtitle: "Overall Sentiment",
      value: "87%",
      iconClass: "Drama",
      percentChange: -3.2 
    },
  ]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-4 w-4 rounded-full bg-cyan-400"></div>
        <h2 className="text-white text-xl font-bold">Performance Metrics</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            subtitle={stat.subtitle}
            value={stat.value}
            iconClass={stat.iconClass}
            percentChange={stat.percentChange}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
