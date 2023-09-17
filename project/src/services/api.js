import axios from 'axios';

export const fetchJsonData = async (path) => {
        const response = await axios.get(path);
        return response.data;
};