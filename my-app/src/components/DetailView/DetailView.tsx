import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from "react-router-dom"

import "./DetailView.css"




const DetailView = (props:any) =>{
    const [Media, setMedia] = useState<any>()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${props.location.state.searchType}/${props.location.state.id}`, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDgzZWEyZTE5YzAxOWYwNTEyZjM3NjRhYTcyMjgwOSIsInN1YiI6IjVmMWI2ZTI2NjZhN2MzMDAzOWZjMWRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aS25SGXG5goAR8ftzb-txKA0lGDAX1zrHAXjjsoUv2g'
            })
        })
            .then(response => response.json())
            .then(response => {
                setMedia(response)
            })
            .catch((e) => console.log(e)
            );

    }, [props.location.state.id, props.location.state.searchType]);
    console.log(props)
    if(Media){
        return (
            <div className="detail">
                <Card>
                    <Link to={{
                            pathname: `/`,
                        }}>
                            <Button variant="primary">Back</Button>
                    </Link>
                    <Card.Img variant="top" src={props.location.state.BaseUrl + "original" + Media.backdrop_path} />
                    <Card.Body>


                        <Card.Title>{Media.name}{Media.title}</Card.Title>
                        <Card.Text>
                            {Media.overview}
                        </Card.Text>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Status:</td>
                                <td>{Media.status}</td>
                                </tr>
                                <tr>
                                <td>Average Rating:</td>
                                <td>{Media.vote_average}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <blockquote>
                            {Media.tagline}
                        </blockquote>
                    </Card.Body>
                    
                    <Button target="_blank" href={"https://www.imdb.com/title/"+Media.imdb_id} variant="primary">View on IMDB</Button>
                </Card>
            </div>
        )
    }else{
        return(
            <div className="detail">
                <Card>
                    <Spinner animation="border" role="status">
                        <span className="sr-only" >Loading...</span>
                    </Spinner>
                </Card>
            </div>
            
        )
    }
}


export default DetailView