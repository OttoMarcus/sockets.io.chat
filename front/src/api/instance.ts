import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;


const instance = axios.create({
    baseURL: progress.env.VITE_PORT || 'http://localhost:3000',
    headers: { 'Content-Type': 'application/json' }
})

export default instance