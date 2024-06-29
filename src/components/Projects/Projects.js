import React,{ useContext, useState} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";

import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

const filterCategories = ['AI/ML', 'Data', 'Software'];

function Projects() {

    const { theme } = useContext(ThemeContext);
    const [projects, setProjects] = useState(projectsData);
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredProjects = selectedFilter === 'All'
        ? projects
        : projects.filter(project => project.tag.includes(selectedFilter));
    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
        filterButton: {
            color: theme.tertiary,
            backgroundColor: theme.primary50,
            fontSize: '20px',
            padding: '0.5rem 1rem',
            margin: '0.2rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary
            },
            "&:active":{
                color: theme.secondary,
                backgroundColor: theme.primary
            }
        },
        activeButton: {
            color: theme.secondary,
            backgroundColor: theme.primary
        }
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--filter">
                        {filterCategories.map(filter => (
                            <button
                                key={filter}
                                className={`${classes.filterButton} ${selectedFilter === filter ? classes.activeButton : ''}`}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                        <button
                            className={`${classes.filterButton} ${selectedFilter === 'All' ? classes.activeButton : ''}`}
                            onClick={() => handleFilterClick('All')}
                        >
                            All
                        </button>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {filteredProjects.map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 

                        {/* {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
