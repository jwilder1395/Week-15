import React from 'react'
import { Button } from 'react-bootstrap';
import { Card, Col, Row } from 'react-bootstrap';

const Recipe = ({recipe, onDelete, onEdit }) => {
    return (
        <Col lg={6} className="mb-1">
            <Card className="h-100">
                <Card.Header className="m-2 p-1"><h4>{recipe.name}</h4></Card.Header>
                <Card.Body>
                    <Row className="d-flex justify-content-between">
                        <Col><p className="fw-bold fst-italic">{recipe.author}</p></Col>
                        <Col className="text-muted text-end">{recipe.category ? 
                        <p>{recipe.category}</p> : <p>No category</p>}</Col>
                    </Row>
                    {recipe.rating ? <p>Rating: {recipe.rating}/10</p> : <p>No rating</p>}
                    {recipe.comment ? <p className="lh-sm">{recipe.comment}</p> : <p>No comment</p>}
                    <p><a href={recipe.URL} target="_blank" rel="noreferrer noopener">{recipe.URL}</a></p>
                    <Button variant="danger" className="m-1" type="button" 
                    onClick={() => onDelete(recipe._id)}>Delete</Button>
                    <Button variant="warning" className="m-1" type="button" 
                    onClick={() => onEdit(recipe._id)}>Edit</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Recipe;