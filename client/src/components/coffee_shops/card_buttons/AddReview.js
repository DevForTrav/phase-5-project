import React, { useState } from 'react'
import { Button, Modal, Container } from 'react-bootstrap'
import {MdOutlineRateReview} from 'react-icons/md'
import ReviewForm from '../../ReviewForm'
import ReviewAlert from '../../ReviewAlert'


const AddReview = ( props ) => {
    const [renderModal, setRenderModal ] = useState(false)
    const [reviewAlertVariant, setReviewAlertVariant ] = useState(null)
    const showReviewForm = () => {
        setRenderModal(true)
    }


    return(
        <>  
            <Button 
                type='radio'
                variant="outline-secondary"
                onClick={showReviewForm}
            >
                    <MdOutlineRateReview  />
            </Button>
            { reviewAlertVariant && <ReviewAlert 
                variant={reviewAlertVariant}
            />}
            {   
                renderModal && (
                <Modal
                    animation='false'
                    variant="dark"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered 
                    show={renderModal}
                    onHide={()=>{setRenderModal(!renderModal)}} 
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {`${props.coffeeShop.coffee_shop.name} Review`}
                        </Modal.Title>
                    </Modal.Header>
                    <Container style={{paddingBottom: "2em"}}>
                        <ReviewForm {...props} setReviewAlertVariant={setReviewAlertVariant} setRenderModal={setRenderModal}/>
                    </Container>

                </Modal>
            )}
        </>
    )
}

export default AddReview