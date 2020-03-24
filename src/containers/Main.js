import React from 'react';
import { useEffect, useState } from 'react';
import StoryTitle from '../components/StoryTitle';

function Main() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(tales => setStories(tales))
    }, []);

    // map through stories to create a StoryTitle for each
    const renderStories = () => {
        console.log(stories)
        return (
            <React.Fragment>
                {stories.map(story => <StoryTitle key={story.id} story={story}/>)}
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