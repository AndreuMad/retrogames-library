import {
    UPLOAD_PICTURE,
    UPLOAD_PICTURE_SUCCESS,
    UPLOAD_PICTURE_FAILURE
} from '../constants/filestack';

// Triggered by the upload button
const uploadPicture = () => {
    return {
        type: UPLOAD_PICTURE
    };
};

// It carries the picture url to be added to the state
const uploadPictureSuccess = (url) => {
    return {
        type: UPLOAD_PICTURE_SUCCESS,
        url
    };
};

// In case of failure
const uploadPictureFailure = () => {
    return {
        type: UPLOAD_PICTURE_FAILURE
    };
};

export {
    uploadPicture,
    uploadPictureSuccess,
    uploadPictureFailure
};
