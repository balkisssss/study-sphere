import React from 'react';
import { Card } from '@heroui/react';
import { BookOpenText, GraduationCap, Drama, Star, BarChart3 } from 'lucide-react';

const StatsCard = ({ title, subtitle, value, iconClass, percentChange = null }) => {
  
  const isPositive = percentChange ? percentChange > 0 : true;
  const percentColor = isPositive ? 'text-green-400' : 'text-red-400';
  const percentValue = percentChange ? (isPositive ? `+${percentChange}%` : `${percentChange}%`) : null;
  
  const getIcon = (iconClass) => {
    switch (iconClass) {
      case "BookOpenText":
        return <BookOpenText className="w-8 h-8 text-cyan-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-8 h-8 text-cyan-400" />;
      case "Drama":
        return <Drama className="w-8 h-8 text-cyan-400" />;
      case "Star":
        return <Star className="w-8 h-8 text-cyan-400" />;
      case "BarChart":
        return <BarChart3 className="w-8 h-8 text-cyan-400" />;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-navy-900 border border-navy-800 rounded-lg p-6 flex flex-col h-full transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-400 text-md font-medium">{title}</h3>
          <p className="text-white text-4xl font-bold mt-2">{value}</p>
        </div>
        <div className="bg-navy-800 p-3 rounded-lg">
          {getIcon(iconClass)}
        </div>
      </div>
      
      {percentChange !== null && (
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-sm font-medium ${percentColor}`}>{percentValue}</span>
          </div>
          
          <div className="w-full bg-navy-800 h-1 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${isPositive ? 'bg-green-400' : 'bg-red-400'}`}
              style={{ 
                width: `${Math.min(Math.abs(percentChange) * 3, 100)}%`,
                marginLeft: isPositive ? '0' : 'auto',
                marginRight: isPositive ? 'auto' : '0'
              }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default StatsCard;
