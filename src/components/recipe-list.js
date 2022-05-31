import React from 'react'
import Recipe from './recipe';
import { Row } from 'react-bootstrap';

const RecipeList = ({ recipeList, onDelete, onEdit}) => {

    return (
        <Row className="d-flex justify-content-center">
            {recipeList.map((recipe, id) => (
                <Recipe key={id} recipe={recipe} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </Row>
    )
};

export default RecipeList;