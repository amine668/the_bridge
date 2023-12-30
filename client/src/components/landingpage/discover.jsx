"use client";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const discover = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await Axios.get("http://localhost:8800/courses");
        setCourses([...res.data].reverse());
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div className="screen h-screen flex justify-center items-center bg-stone-50">
      <div className=" w-[85%] h-full flex flex-col pt-20 p-16">
        {/*title and button    */}
        <div className="flex justify-between ">
          <div className=" text-5xl text-center font-bold">
            Discover Our Courses
          </div>
          <div className="cursor-pointer text-xl bg-[#AF2F64] py-3 px-12 font-semibold text-white rounded-full">
            View More
          </div>
        </div>

        {/*courses    */}
        <div className="w-full  h-full flex items-center">
          <div className="grid grid-cols-3 w-full  gap-4 gap-y-12 ">
            {courses.map((course) => (
              <div className="w-full max-w-[450px] flex flex-col gap-4">
                <div className="w-full h-[200px] bg-stone-400 ">
                  <img
                    src={course.cover}
                    width={500}
                    height={500}
                    alt="Picture of the course"
                    className="border h-full w-full bg-slate-300 "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold ">{course.title}</div>
                  <div className="text-xl font-bold text-[#AF2F64]">
                    {course.price} Dt/ month
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default discover;
