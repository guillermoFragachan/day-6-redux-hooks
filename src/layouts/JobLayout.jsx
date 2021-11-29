import { Container, Row, Col, Button } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import JobDetail from "../components/JobDetails";
import React, { useState,useEffect } from "react";
import { useNavigate,useParams, Routes, Route, Link } from 'react-router-dom'




const JobLayout = ({ children }) => {
  const [query, setQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState({ name: "title" });

  const navigate = useNavigate()



  const getQuery = (query) => setQuery(query);
  const getSelectedJob = (selectedJob) => setSelectedJob(selectedJob);

  useEffect(() => {}, [query, selectedJob]);

  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
          <Row>
            <Col xs={12}>
              <SearchBar getQuery={getQuery} />
              {React.cloneElement(children,{getSelectedJob,query})}
            </Col>

            <Button onClick={()=>{
                navigate("favorites")
            }}> go to favorites</Button>
          </Row>
        </Col>
        <Col xs={6}>
          
          <JobDetail job={selectedJob} />
        </Col>
      </Row>
    </Container>
  );
};

export default JobLayout;
