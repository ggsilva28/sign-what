import axios from 'axios';

const baseURL = 'https://sign-what.onrender.com';

export const useRequest = () => {
    const token = localStorage.getItem('sign-what:token');

    function get(url: string) {
        return request('get', url);
    }

    function post(url: string, params: any) {
        return request('post', url, params);
    }

    function put(url: string, params: any) {
        return request('put', url, params);
    }

    function deleteMethod(url: string) {
        return request('delete', url);
    }

    const request = async (method: string, url: string, params: any = '') => {
        console.log('SEND REQUEST', method, url, params);

        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        try {
            let response: any = {};
            switch (method) {
                case 'get':
                    response = await axios.get(baseURL + url);
                    break;
                case 'post':
                    response = await axios.post(baseURL + url, params);
                    break;
                case 'put':
                    response = await axios.put(baseURL + url, params);
                    break;
                case 'delete':
                    response = await axios.delete(baseURL + url);
                    break;
                default:
                    response = await axios.get(baseURL + url);
                    break;
            }

            console.log('SUCCESS REQUEST', method, url, params, response.data);

            return {
                isOk: true,
                ...response.data
            };
        } catch (error: any) {

            console.log('FAILED REQUEST', method, url, params);

            return {
                isOk: false,
                data: error.response.result || {},
                status: error.response.status,
                message: error.response.data.error
            };
        }
    }

    return {
        get,
        post,
        put,
        delete: deleteMethod,
    }

}