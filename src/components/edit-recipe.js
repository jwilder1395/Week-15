import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import CategoryOptions from './category-options';
import RatingOptions from './rating-options';

function EditRecipeModal({show, handleClose, recipeToEdit, onUpdate}) {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [URL, setURL] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [_id, set_id] = useState('');

    useEffect(
        () => {
            if (show) {fillForm(recipeToEdit[0]);}
        },
        [recipeToEdit, show]
    )

    const fillForm = (recipeToEdit) => {
        setName(recipeToEdit.name);
        setAuthor(recipeToEdit.author);
        setURL(recipeToEdit.URL);
        setCategory(recipeToEdit.category);
        setRating(recipeToEdit.rating);
        setComment(recipeToEdit.comment);
        set_id(recipeToEdit._id);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onUpdate({name, author, URL, category, rating, comment, _id})

        setName('');
        setAuthor('');
        setURL('');
        setCategory('');
        setRating('');
        setComment('');
    };

    return (
      <>
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form.Group className="mb-3" id="recipeForm.name">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="input" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" id="recipeForm.author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="input" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" id="recipeForm.url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control as="input" value={URL} onChange={(e) => setURL(e.target.value)} required />
                </Form.Group>
                <Row className="my-3">
                    <Col>
                        <Form.Label>Category</Form.Label>
                        <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} id="recipeForm.category">
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
                <Form.Control as="textarea" value={comment} onChange={(e) => setComment(e.target.value)} />
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
                </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
  export default EditRecipeModal;