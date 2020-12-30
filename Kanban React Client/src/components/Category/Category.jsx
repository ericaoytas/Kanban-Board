import React from 'react'
import Notes from '../../containers/Notes';
import {ModalType} from '../../constants/CustomEnums';

function Category (props) {

    return (
        <div className="Category">
            <h2>{props.name}</h2>
            <button onClick={() => props.updateModal(true, ModalType.UPDATE, props.id)}>Edit Category</button>
            <Notes notes={props.notes}
                categoryId={props.id}
            />

        </div>
    )
}

export default Category;