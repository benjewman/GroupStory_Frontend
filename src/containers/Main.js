import React from 'react';
import { useEffect, useState } from 'react';

function Main() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(tales => setStories(tales))
    }, []);

    // function to return a small blurb (first 15 chars) from the first chapter of the story passed in
    const storyBlurb = story => story.chapters[0].content.slice(0, 15);

    // map through stories to create an h3 for each title and a blurb of its content
    const renderStories = () => {
        console.log(stories)
        return (
            <React.Fragment>
                {/* style below so the title is bigger and underlined */}
                {stories.map(story => <h3 key={story.id}>{story.title} - "{storyBlurb(story)}..."</h3>)}
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