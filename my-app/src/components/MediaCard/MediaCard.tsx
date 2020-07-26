import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import './MediaCard.css';


interface IMediaCardProps {
    // Name: string | undefined;
    // Title: string | undefined;
    // Synopsis: string | undefined;
    Element:any;
    BaseURL: (string |undefined );
    SearchType: (string | undefined);

}

const MediaCard = (props: IMediaCardProps) => {
    return (

            <Card  style={{display:"inline-block"}}>
                <Card.Img variant="top" src={props.BaseURL + "original" + props.Element.backdrop_path} />
                <Card.Body>
                    <Card.Title>{props.Element.name}{props.Element.title}</Card.Title>
                    <Card.Text>
                        
                        {props.Element.overview}
                        
                    </Card.Text>
                    <Link to={{
                        pathname: `/detail/${props.Element.id}`,
                        state:{
                            id: props.Element.id,
                            searchType: props.SearchType,
                            BaseUrl: props.BaseURL
                        }
                    }}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
            </Card>

            
    )
}

export default MediaCard
