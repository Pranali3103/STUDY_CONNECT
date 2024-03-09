import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import FreeCourseCard from "./FreecourseCard";

import courseImg01 from "../../assests/web-development.png";
import courseImg02 from "../../assests/kids-learning.png";
import courseImg03 from "../../assests/seo.png";
import courseImg04 from "../../assests/ui-ux.png";

import styles from "./styles.module.css";

const FreeCourse = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Perform necessary actions with the selected file
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };

  const freeCourseData = [
    {
      id: "01",
      title: "Basic Web Development Course",
      imgUrl: courseImg01,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "02",
      title: "Coding for Junior Basic Course",
      imgUrl: courseImg02,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "03",
      title: "Search Engine Optimization - Basic",
      imgUrl: courseImg03,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "04",
      title: "Basic UI/UX Design - Figma",
      imgUrl: courseImg04,
      students: 5.3,
      rating: 1.7,
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses & Notes Upload </h2>
          </Col>
          <Col lg="12" className="text-center mb-3">
            <form onSubmit={handleUpload}>
              <input type="file" onChange={handleFileChange} />
              <button type="submit" className={styles["upload-button"]}>Upload</button>
            </form>
          </Col>
          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
