import {
    CONTACT_FORM_SEND_EMAIL_START,
    CONTACT_FORM_SEND_EMAIL_SUCCESS,
    CONTACT_FORM_SEND_EMAIL_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import history from '../history';

export function sendEmailViaContactForm(email) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/contact/sendemail`, email)
            .then(async (res) => {
                if (res.status === 200) {
                    await alert(`Thank you, ${email.name}! Your message has been sent successfully.`)
                    await dispatch(success(res.data));
                    return await history.push('/');
                } else {
                    await dispatch(error(res.data.error));
                    return await Promise.reject(res.data);
                }
            })
            .catch(async (err) => {
                return await dispatch(error(err));
            });
    };

    function request() {
        return {
            type: CONTACT_FORM_SEND_EMAIL_START
        };
    }

    function success(data) {
        return {
            type: CONTACT_FORM_SEND_EMAIL_SUCCESS
        };
    }

    function error(err) {
        return {
            type: CONTACT_FORM_SEND_EMAIL_FAILURE,
            payload: err
        };
    }
}
