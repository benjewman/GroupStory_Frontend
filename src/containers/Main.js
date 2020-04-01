import React from 'react';
import { useEffect, useState } from 'react';
import StoryTitle from '../components/StoryTitle';
// import { useHistory } from "react-router-dom";

function Main() {

    // const history = useHistory();
    const fetchLocation = 'stories';
    const [stories, setStories] = useState([]);

    // const routeToNew = () => history.push('/new');

    useEffect(() => {
        fetch(`http://localhost:3000/${fetchLocation}`)
        .then(resp => resp.json())
        .then(tales => setStories(tales))
    }, [fetchLocation]);

    // map through stories to create a StoryTitle for each
    const renderStories = () => {
        console.log(stories)
        return (
            <React.Fragment>
                {/* <button onClick={routeToNew}>Be Part of the Story</button> */}
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