import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import StarRating from './StarRating'
import { createReview } from '../custom_modules/createReview'
import ReviewAlert from './ReviewAlert'


const ReviewForm = (props) => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [overallRating, setOverallRating] = useState()
    const [ambience, setAmbience] = useState()
    const [beverageRating, setBeverageRating] = useState()
    const [serviceRating, setServiceRating] = useState()
    const [reviewResponse, setReviewResponse] = useState()
    const reviewData = {
        title,
        description,
        "overall_rating": overallRating,
        "ambience_description": ambience,
        "beverage_rating": beverageRating,
        "service_rating": serviceRating,
        "location_id": props.coffeeShop.id,
        "user_id": props.user.id
    }
    const handleClick = (e) => {
        e.preventDefault()
        createReview(reviewData).then((res) => {
            setReviewResponse(res)
        }).then(() => {
            props.setReviewAlertVariant(reviewResponse.status === 201 ? "success" : "danger")
            props.setRenderModal(false)
        })
    }

    return (
        <>
            <Form>
                <Form.Group onChange={(e)=>{setTitle(e.target.value)}} className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                
                <Form.Group onChange={(e)=>{setDescription(e.target.value)}} className="mb-3">
                    <Form.Label>Description</Form.Label>  
                    <Form.Control as="textarea" placeholder="Tell us about your experience!" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" onChange={(e)=>{setAmbience(e.target.value)}}>
                            <Form.Label>Ambience</Form.Label>
                            <Form.Select>
                                <option value="">How was the atmosphere?</option>
                                <option value="quiet">Quiet</option>
                                <option value="study-friendly">Study-friendly</option>
                                <option value="loud">Loud/Party atmosphere</option>
                                <option value="crowded">Crowded</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>
                    <Col style={{marginTop: "2em"}}>
                        <Form.Group>
                            <Form.Label>Overall Rating: </Form.Label>
                            <StarRating setter={setOverallRating} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{marginBottom: "2em"}}>
                    <Col style={{marginTop: "2em"}}>
                        <Form.Group>
                            <Form.Label>Beverage Rating: </Form.Label>
                            <StarRating setter={setBeverageRating}  />
                        </Form.Group>
                    </Col>
                    <Col style={{marginTop: "2em"}}>
                        <Form.Group>
                            <Form.Label>Service Rating: </Form.Label>
                            <StarRating setter={setServiceRating} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button  
                    style={{
                        float: "right",
                    }} 
                    variant="outline-dark" 
                    type="button"
                    onClick={()=> {props.setRenderModal(false)}}
                >
                    Cancel
                </Button>
                <Button  
                    style={{
                        float: "right",
                        marginRight: ".5em"    
                    }} 
                    variant="dark" 
                    type="button"
                    onClick={(e) => {handleClick(e)}}
                >
                    Submit
                </Button>
                {reviewResponse && console.log(reviewResponse.status)}
            </Form>
            {/* {
                reviewResponse && ( <ReviewAlert 
                    variant={reviewResponse.status === 201 ? "success" : "danger"}
                />
            )} */}
        </>
    )

}

export default ReviewForm