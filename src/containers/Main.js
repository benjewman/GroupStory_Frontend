import React from 'react';
import { useEffect, useState } from 'react';

function Main() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(tales => {
            console.log(tales);
            // save stories in state
            setStories(tales)
            // tales.forEach(story => setStories(...stories, story));
        })
    }, []);

    const renderStories = () => {
        console.log(stories)
        return (
            <React.Fragment>
                <h3>Hi</h3>
                {stories.map(story => {
                    return <h3>"{story.title}"</h3>
                })}
            </React.Fragment>
        )
    }
    
    return (
        <div>
            <h2>Main Page</h2>
            {/* fetches most recently finished stories */}
            {/* try to batch the fetches later */}
            {renderStories()}
        </div>
    );
}

export default Main;