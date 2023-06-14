import axios from 'axios'

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: "50",
	},
	headers: {
		"X-RapidAPI-Key": "82b0ed6e45msh8b06a8e6d3317f0p1907c7jsn374b30aed33b",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}
