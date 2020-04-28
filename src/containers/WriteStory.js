import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function WriteStory() {
    const history = useHistory();
    // create state variable for the unfinished story or the new story
    // set this variable from the fetch
    const [story, setStory] = useState({});
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    let contentWithStoryId = {content: content, story_id: story.id, email: email}

    useEffect(() => {

        fetch('http://localhost:3000/last')
        .then(resp => resp.json())
        .then(storyData => {
            setStory(storyData);
        })

        // add a legitimate array dependency that won't create a loop
    }, [history])

    const renderPrompt = () => {
        // if there is a previous chapter, show it, or tell the reader they're starting the story
        if (story.chapters && story.chapters.length > 0) {
            return <p>Previous chapter: {story.chapters[story.chapters.length - 1].content}</p>
        } else {
            return <p>Start the first chapter of this story...</p>
        }
    }

    const handleChange = event => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        } else {
            setContent(event.target.value);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let fetchObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contentWithStoryId)
        }

        fetch('http://localhost:3000/chapters', fetchObj)
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            } else {
                console.log(data);
                // history.push('/');
                window.location.reload();
            }
        })


    }
    
    return (
        <React.Fragment>
            <h2>Contribute to a Story in Progress</h2>
            <br/>
            <div className="borderClass">
                <h3 className="workingTitle">{story.title}</h3>
                {renderPrompt()}

                {/* Create a form for user to write a chapter */}
                {/* Then post fetch that chapter */}

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicChapter">
                        <Form.Label>Chapter</Form.Label>
                        <Form.Control name="chapter" as="textarea" rows="8" value={content} onChange={handleChange} placeholder="Start writing your chapter..."/>
                        <Form.Text>between 250-500 characters</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" type="email" value={email} placeholder="Enter email" onChange={handleChange}/>
                        <Form.Text className="text-muted">We'll email you when the story's finished.</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
            

        </React.Fragment>
    );
}

export default WriteStory;


// <form onSubmit={handleSubmit}>
//                 Your chapter (no less than 250 characters and no more than 500 characters): 
//                 <br/>
//                 <textarea name="content" value={content} onChange={handleChange}/>
//                 <br/>
//                 Your email address (we'll email you when the story is finished):
//                 <br/>
//                 <input type="text" name="email" value={email} onChange={handleChange} />
//                 <br/>
//                 <input type="submit" value="Submit"/>
//             </form>