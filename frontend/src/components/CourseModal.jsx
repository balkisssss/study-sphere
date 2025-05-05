import { useEffect } from "react";
import { Card, CardHeader, CardBody, Button, ScrollShadow } from "@heroui/react";
import { BookOpen } from "lucide-react";

export default function CourseModal({ isOpen, onClose, course, modalClassName }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !course) return null;

  const syllabus = [
    "Introduction to Quantum Potato Farming",
    "Spud-Based Algorithms",
    "Growing Potatoes in Zero Gravity",
    "Advanced Potato Quantum States",
    "Potato Entanglement Theory"
  ];

  const courseTags = ["Physics", "Agriculture"];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm mt-12">
      <Card
        className={`relative p-6 border-2 border-[#004493] w-[400px] h-[500px] shadow-[0_0_20px_#004493] bg-[#04091C] ${modalClassName} max-sm:w-[80vw] max-sm:h-[80vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <CardHeader className="pb-4 pt-2 px-4 flex-col items-start">
            <h3 className="text-2xl font-bold text-[#A6E1FA] mb-2">{course.title}</h3>
            <div className="flex gap-2 mb-4">
              {courseTags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-[#A6E1FA] border border-[#004493] rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardHeader>

          <ScrollShadow className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#004493] scrollbar-track-[#04091C] hover:scrollbar-thumb-[#1F9BA6]">
            <CardBody className="py-4 px-4 text-white">
              <h4 className="text-lg font-semibold text-[#A6E1FA] mb-2">Description</h4>
              <div className="pr-4">
                <p className="text-white text-sm">
                  Learn the basics of quantum potato farming and spud-based algorithms in this fun and engaging course. 
                  {course.description || "This course covers fundamental concepts and advanced techniques in the field."}
                </p>
              </div>
            </CardBody>

            <CardBody className="py-4 px-4 text-white">
              <h4 className="text-lg font-semibold text-[#A6E1FA] mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-[#A6E1FA]" />
                Syllabus
              </h4>
              <div className="pr-4">
                <ul className="list-disc list-inside text-white text-sm">
                  {syllabus.map((topic, index) => (
                    <li key={index} className="mb-1">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </ScrollShadow>

          <div className="flex justify-center mt-4 gap-4 pt-2">
            <Button
              color="primary"
              variant="solid"
              className="w-1/2 text-white bg-[#1F9BA6] border-[#1F9BA6] hover:shadow-md transition-shadow duration-200 text-sm"
            >
              Join Course
            </Button>
            <Button
              color="primary"
              variant="solid"
              className="w-1/2 text-white bg-[#1F9BA6] border-[#1F9BA6] hover:shadow-md transition-shadow duration-200 text-sm"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
