import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({

    isOpen,

    title,

    message,

    onConfirm,

    onCancel,

}){

    return(

        <Modal
            isOpen={isOpen}
            title={title}
            onClose={onCancel}
        >

            <p className="mb-6">

                {message}

            </p>

            <div className="flex justify-end gap-3">

                <Button
                    variant="secondary"
                    onClick={onCancel}
                >

                    Cancel

                </Button>

                <Button
                    variant="danger"
                    onClick={onConfirm}
                >

                    Delete

                </Button>

            </div>

        </Modal>

    );

}