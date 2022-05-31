import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import CategoryOptions from './category-options';
import RatingOptions from './rating-options';

const RecipeForm = ({ onAdd }) => {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [URL, setURL] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({name, author, URL, category, rating, comment})
        
        setName('');
        setAuthor('');
        setURL('');
        setCategory('');
        setRating('');
        setComment('');
    };

    return (
        <Form onSubmit={onSubmit} className="border bg-light rounded p-2">
            <h3 className="mb-3">Add Recipe</h3>
            <Form.Group className="mb-3" id="recipeForm.name">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="input" value={name} onChange={(e) => setName(e.target.value)} 
                required placeholder="e.g. 'Spicy Coconut Shrimp'" />
            </Form.Group>
            <Form.Group className="mb-3" id="recipeForm.author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="input" value={author} onChange={(e) => setAuthor(e.target.value)}
                 placeholder="e.g. 'Bill Saylor'" />
            </Form.Group>
            <Form.Group className="mb-3" id="recipeForm.url">
                <Form.Label>URL</Form.Label>
                <Form.Control as="input" value={URL} onChange={(e) => setURL(e.target.value)} 
                required placeholder="https://recipeurl.com/" />
            </Form.Group>
            <Row className="my-3">
                <Col>
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} 
                    id="recipeForm.category">
                        <CategoryOptions />
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>Rating</Form.Label>
                    <Form.Select value={rating} onChange={(e) => setRating(e.target.value)} id="recipeForm.rating">
                        <RatingOptions />
                    </Form.Select>
                </Col>
            </Row>
            <Form.Group className="mb-3" id="recipeForm.comment">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Add Recipe</Button>
        </Form>
    )
};

export default RecipeForm;