import axios from 'axios'; 

export default axios.create({
	baseURL: 'https://mern-shortly.vercel.app'
});