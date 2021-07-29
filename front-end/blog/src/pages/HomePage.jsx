import React from 'react';
import PropTypes from 'prop-types';
import BlogsList from '../components/Blog/BlogsList';

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        <div>
            <BlogsList/>
        </div>
    );
}

export default HomePage;

