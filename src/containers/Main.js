import React from 'react';
import { useEffect, useState } from 'react';
import StoryTitle from '../components/StoryTitle';
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WriteStory from './WriteStory';

function Main() {

    const history = useHistory();

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/stories`)
        .then(resp => resp.json())
        .then(tales => setStories(tales))
    }, [history]);

    // map through stories to create a StoryTitle for each
    const renderStories = () => {
        return (
            <div className="storyScroll">
                {/* <button onClick={routeToNew}>Be Part of the Story</button> */}
                <br/>
                {stories.map(story => <StoryTitle key={story.id} story={story}/>)}
            </div>
        )
    }
    
    return (
        <Container >
            <Row>
                <Col>
                    <h2>Read Finished Stories</h2>
                    {/* fetches most recently finished stories */}
                    {/* try to batch the fetches later */}
                    {renderStories()}
                </Col>
                <Col>
                    <WriteStory />
                </Col>
            </Row>
            
        </Container> 
    );
}

export default Main;