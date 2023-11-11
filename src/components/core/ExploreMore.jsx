import React, { useState } from "react";
import { HomePageExplore } from "../../data/homepage-explore";
import HighlightText from "./HomePage/HighlightText";
import CourseCard from "./CourseCard";
const tabsName = [
  "Free",
  "New To Coding ",
  "Most Poupular ",
  "Skill Paths",
  "Career Paths",
];
const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div>
      <div className="text-4xl font-semibold text-center">
        Unlock The
        <HighlightText text={"Power Of Code"} />
      </div>

      <p
        className="text-center text-richblack-300 text-sm mt-3   text-[16px] 
    px-2 py-2 "
      >
        Learn to Build Anything you Imagine
      </p>

      <div className=" flex flex-row rounded-full bg-richblack-800   border-richblack-100 ">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[20px] flex flex-row w-[70%] items-center gap-2 
                    ${
                      currentTab === element
                        ? "bg-richblack-900  text-richblack-5 "
                        : "text-richblack-200  "
                    } rounded-full transition-all duration-200 cursor-pointer
                    hover:bg-richblack-900 hover:text-richblack-5 px-5 py-2 `}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="h-[150px]"></div>

      <div className="relative flex flex-wrap gap-10 justify-between w-full mt-5 -ml-5  ">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
