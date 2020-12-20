import React, { useState, useEffect, useCallback } from 'react';
import Category from '../components/Category/Category';
import * as api from '../services/KanbanService';
import * as log from '../utils/ErrorHandler';
function Categories(props) {

    const [categories, setCategories] = useState([{}]);
    
    const setCategoriesHandler = useCallback(categories => {
        setCategories(categories);
      }, []);

          // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchCategories = useCallback(function() {
        // Get categories by board
        if (props.boardId > 0) {
            api.getCategoriesByBoardId(props.boardId).then((response) => {
                setCategoriesHandler(response.data);
            }).catch(error => log.logError(error)); 
        }
    },[props.boardId, setCategoriesHandler]);

    useEffect(() => {
        fetchCategories();
    // eslint-disable-next-line no-use-before-define
    }, [fetchCategories]);


    function createCategory(category) {
        return (
            <Category 
                key={category.id}
                id={category.id}
                name={category.name}
                notes={category.notes}
                fetchCategories={fetchCategories}
                updateNameModal={props.updateNameModal}
                titleModal={props.titleModal}
                />
        )
    }

    const categoriesToRender = categories != null ? categories.map(createCategory) : null;
    
    
    return (
        <div className="Categories">
            <div className="flex-container">
                {categoriesToRender}
            </div>

        </div>
    ); 
}

export default Categories;