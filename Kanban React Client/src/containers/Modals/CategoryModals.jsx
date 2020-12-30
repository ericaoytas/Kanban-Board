import React, {useEffect} from 'react';
import CategoryFormModal from '../../components/Modal/CategoryModal/CategoryFormModal';
import { ModalType } from '../../constants/CustomEnums';
function CategoryModals(props) {

    const blankCategory = {id: 0, name: ""};

    // Get Board By Id
    useEffect(() => {
        if (props.modal.selectedId > 0 && props.modal.isOpen) {
            props.categoryOperations.get(props.modal.selectedId);
        }
        // eslint-disable-next-line
    }, [props.modal.isOpen, props.modal.selectedId, props.categoryOperations.get]);

    function addCategory(newCategory) {
        props.categoryOperations.create(newCategory);
        props.onHide();
    }

    function deleteCategory(id) {
        props.categoryOperations.delete(id);
        window.location.reload();
    }

    function updateCategory(category) {
        props.categoryOperations.update(category);
        props.onHide();
    }

    const operations = {
        create: addCategory,
        delete: deleteCategory,
        update: updateCategory
    };

    let selectedModal = null;

    switch (props.modal.type) {
        case ModalType.CREATE:
            selectedModal =
                <CategoryFormModal
                    title="Create Category"
                    category={blankCategory}
                    operations={operations}
                    modal={props.modal}
                    onHide={props.onHide} />
            break;
        case ModalType.UPDATE:
        default:
            selectedModal =
                <CategoryFormModal
                    title="Edit Category"
                    category={props.category}
                    operations={operations}
                    modal={props.modal}
                    onHide={props.onHide} />
            break;
    }

    return (
        <div>
             {selectedModal}
        </div>
    )
}

export default CategoryModals;