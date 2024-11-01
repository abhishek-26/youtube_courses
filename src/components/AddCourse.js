import React, { Fragment, useState } from "react";
import axios from "axios";
import { 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button, 
    Container 
} from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {
    // Define state to hold form data
    const [course, setCourse] = useState({
        courseId: "",
        title: "",
        description: ""
    });

    // Handle changes in form inputs
    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/courses", course);
            if (toast) {
                console.log("toast is true");
                console.log(toast);
                toast.success("Course added successfully!", {
                    autoClose: 3000,
                });
            } else {
                console.error("Toast is not defined!");
            }
            setCourse({ courseId: "", title: "", description: "" });
            console.log("Course added successfully:", response.data);
        } catch (error) {
            console.error("There was an error adding the course:", error);
        }
    };

    return (
        <Fragment>
            <ToastContainer />
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input
                        id="courseId"
                        name="courseId"
                        placeholder="Enter here"
                        type="text"
                        value={course.courseId}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="Enter Title"
                        type="text"
                        value={course.title}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        id="description"
                        name="description"
                        type="textarea"
                        style={{ height: 150 }}
                        value={course.description}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" type="submit">Add Course</Button>
                    <Button color="warning" className="ms-3" type="reset" onClick={() => setCourse({ courseId: "", title: "", description: "" })}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;