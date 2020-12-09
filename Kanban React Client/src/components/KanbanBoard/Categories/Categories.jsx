import React, { useState, useEffect, useCallback } from 'react';
import Category from './Category';
import * as api from '../../../services/KanbanService';
import * as log from '../../../services/ErrorHandler';
function Categories(props) {
    const boardId = 2;
    const [categories, setCategories] = useState([{}]);
    
    const setCategoriesHandler = useCallback(categories => {
        setCategories(categories);
      }, []);

          // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchCategories = useCallback(function() {
        // Get categories by board
        api.getCategoriesByBoardId(boardId).then((response) => {
            setCategoriesHandler(response.data);
        }).catch(error => log.logError(error)); 
        
    },[]);

    useEffect(() => {
        fetchCategories();
        console.log("useEffect() in Categories");
    // eslint-disable-next-line no-use-before-define
    }, [fetchCategories, setCategoriesHandler]);


    function createCategory(category) {
        return (
            <Category 
                key={category.id}
                id={category.id}
                name={category.name}
                notes={category.notes}
                fetchCategories={fetchCategories}
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