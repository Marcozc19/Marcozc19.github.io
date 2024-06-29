import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';

import './Experience.css';

function ExperienceCard({ id, company, jobtitle, startYear, endYear, description }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
            "&:hover": {
                backgroundColor: theme.primary50,
                transform: 'translateY(10px)',
            },
            "&:hover .description": {
                opacity: 1,
                maxHeight: '500px',  // Adjust based on your content
                marginTop: '5px',  // Adds some space between details and description
                transition: 'opacity 0.3s ease-in-out, max-height 0.3s ease-in-out', // Add transition for opacity on hover
            },
            "& .description": {
                opacity: 0,
                maxHeight: 0,
                overflow: 'hidden',
                transition: 'opacity 0s ease-out, max-height 0.1s ease-out', // No delay on max-height
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
                    <div className={`description ${classes.description}`} style={{padding: 0, marginTop: '0.3rem'}}>
                    {description.split('\n').map((line, index) => (
                        <h4 key={index} style={{color: theme.tertiary,  marginTop: '2px', fontWeight: 'normal'}}>{line}</h4>
                    ))}
                    </div>
                </div>

            </div>
        </Fade>
    );
}

export default ExperienceCard;
