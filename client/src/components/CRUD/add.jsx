import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";
import { useState } from "react";
import Axios from "axios";

const add = ({ handleValid }) => {
  const [course, setCourse] = useState({
    title: "",
    price: null,
    cover: "",
  });
  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    try {
      await Axios.post("http://localhost:8800/courses", course);
    } catch (err) {
      console.log(err);
    }
    handleValid();
    console.log("Course Added Successfully");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className=" bg-sky-400 py-2 cursor-pointer text-white hover:shadow-lg rounded-lg px-6 flex justify-center font-semibold hover:bg-sky-400 items-center text-xl">
          add course
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Adding new Course</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="font-bold text-stone-600">Course Name</h1>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="border-2 border-gray-300 p-2 rounded-lg w-full my-2"
                />
              </div>
              <div>
                <h1 className="font-bold text-stone-600">Price</h1>
                <input
                  name="price"
                  onChange={handleChange}
                  type="text"
                  className="border-2 border-gray-300 p-2 rounded-lg w-full my-2"
                />{" "}
              </div>
              <div>
                <h1 className="font-bold text-stone-600">Cover Link</h1>
                <input
                  name="cover"
                  onChange={handleChange}
                  type="text"
                  className="border-2 border-gray-300 p-2 rounded-lg w-full my-2"
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default add;
