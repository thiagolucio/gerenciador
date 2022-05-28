import React from 'react';
import { useLocation } from 'react-router-dom';
import Message from '../components/Message/Message';


function Projects() {
     const location = useLocation();

     let message = ''
     if (location.state) {
        message = location.state.message;
    }

    return (
        <div className='col-full p-16px'>
            {message && <Message type='success' msg={message} />}
        </div>
    );
}

export default Projects;