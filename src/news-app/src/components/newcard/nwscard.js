
import './newscard.css'
import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';

function NewsCard(props) {
    return (
        <div class="news-card">
            <MDBCard alignment='center'>
                <MDBCardHeader>{props.Author}</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>{props.Title}</MDBCardTitle>
                    <MDBCardText>{props.Description}</MDBCardText>
                    <MDBBtn href={props.Link}>Visitar</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>{props.PublishDate}</MDBCardFooter>
            </MDBCard>
        </div>
    );
}

export default NewsCard;