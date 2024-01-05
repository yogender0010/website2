import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
    <a
        href={socialsData.github}
        target='_blank'
        rel='noreferrer'
    >
        <img
            src="data:image/png;base64,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"
            alt='GitHub'
            className='landing--social'
            style={{ width: '30px', height: '30px', objectFit: 'cover' }}
        />
    </a>
)}

<a
    href="https://www.researchgate.net/profile/Yogender-Yadav"
    target='_blank'
    rel='noreferrer'
>
 
</a>


                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
