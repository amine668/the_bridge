"use client";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Edit from "@/components/CRUD/edit";
import Add from "@/components/CRUD/add";
const page = () => {
  const [courses, setCourses] = useState([]);
  const [valid, setValid] = useState(false);
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
  }, [valid]);

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8800/course/${id}`);
      setValid(!valid);
    } catch (err) {
      console.log(err);
    }
  };
  const handleValid = () => {
    setValid(!valid);
  };

  return (
    <div className=" w-screen h-screen flex justify-center overflow-x-hidden ">
      <div className="max-w-[1240px] w-full h-fit  flex flex-col gap-20 p-8 pt-14 ">
        <div className=" w-full flex justify-between">
          <h2 className="font-extrabold text-3xl">
            Courses displayed on the landing page{" "}
          </h2>
          <Add handleValid={handleValid} />
        </div>
        <div className="flex flex-col gap-2 ">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex justify-between items-end relative bg-white p-4 rounded-2xl "
            >
              <div className="flex gap-8">
                <img
                  src={course.cover}
                  width={500}
                  height={500}
                  alt="Picture of the course"
                  className="border w-64 h-40 bg-slate-300 rounded-lg"
                />

                <div>
                  {" "}
                  <h3 className="font-semibold text-xl capitalize">
                    {course.title}
                  </h3>
                  <p className="font-medium ">{course.price} $</p>
                </div>
              </div>
              <div className=" flex  gap-2">
                <button
                  onClick={() => handleDelete(course.id)}
                  className="h-fit font-medium border-stone-500 w-24 hover:bg-stone-900 hover:text-slate-50 border-2 py-1 px-5 rounded-3xl"
                >
                  Delete
                </button>
                <Edit currentCourse={course} handleValid={handleValid} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
