export const API_URL = 'http://127.0.0.1:8000/api/';

const refreshApiToken = async () => {
    const refresh = window.localStorage.getItem("refresh");
    if (refresh) {
        const response = await fetch(`${API_URL}refresh/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                refresh
            })
        });
        if (response.ok) {
            const {access} = await response.json();
            window.localStorage.setItem("access", access);
        } else {
            console.error(response);
        }
        return;
    }
    window.location.replace('/');
};

let apiClientService = async (url, params) => {
    // await refreshApiToken();
    // const accessToken = window.localStorage.getItem("access");
    const headers = {};
    // if (accessToken) {
    //     headers.Authorization = `Bearer ${accessToken}`;
    // }
    const apiParams = {
        ...params,
        headers: {
            ...params.headers,
            ...headers
        }
    };
    const response = await fetch(`${API_URL}${url}`, apiParams);
    return await response.json();
};

export default apiClientService;