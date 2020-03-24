import React from 'react';
import { useEffect, useState } from 'react';

function Main() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(tales => setStories(tales))
    }, []);

    const renderStories = () => {
        console.log(stories)
        return (
            <React.Fragment>
                {stories.map(story => <h3 key={story.id} >"{story.title}"</h3>)}
            </React.Fragment>
        )
    }
    
    return (
        <div>
            <h2>Stories</h2>
            {/* fetches most recently finished stories */}
            {/* try to batch the fetches later */}
            {renderStories()}
        </div>
    );
}

export default Main;