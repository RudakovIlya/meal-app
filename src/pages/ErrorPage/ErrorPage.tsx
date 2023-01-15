import React from 'react';
import ReportProblemSharpIcon from '@mui/icons-material/ReportProblemSharp';
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const ErrorPage = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div style={{margin: '0 auto', textAlign: 'center'}}>
            <IconButton onClick={goBack} color={'inherit'} title={'GO BACK'} disableRipple draggable={false}>
                <ReportProblemSharpIcon sx={{minHeight: '60vh', width: '60vw'}}/>
            </IconButton>
        </div>
    );
};

export default ErrorPage;