import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";

const AllCourse = () => {

    const [ courses, setCourses ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/courses");
                setCourses(response.data);
            }
            catch (err){
                setError("There was an error fetching the courses.");
            }
            finally {
                setLoading(false);
            }
        }
        fetchCourses();
    }, []);


    return (
        <div>
            <h1>
                All Courses
            </h1>
            <p>
                List of Courses are as follows:-
            </p>
            {
                courses.length > 0 ? courses.map((item) => <Course course = {item} />) : "No Courses"
            }
        </div>
    );
}

export default AllCourse;