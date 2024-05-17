import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Carousel className={styles.projects}>
        {projects.map((project, id) => (
          <Carousel.Item key={id}>
            <ProjectCard project={project} />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
