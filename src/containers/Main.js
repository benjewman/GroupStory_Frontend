import React from 'react';
import { useEffect, useState } from 'react';
import StoryTitle from '../components/StoryTitle';
import { useHistory } from "react-router-dom";

function Main() {

    const history = useHistory();

    const [stories, setStories] = useState([]);

    const routeToNew = () => history.push('/new');

    useEffect(() => {
        fetch(`http://localhost:3000/stories`)
        .then(resp => resp.json())
        .then(tales => setStories(tales))
    }, [history]);

    // map through stories to create a StoryTitle for each
    const renderStories = () => {
        return (
            <React.Fragment>
                <button onClick={routeToNew}>Be Part of the Story</button>
                <br/>
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