import Axios from 'axios';
import env from './env.config';
import * as dotenv from 'dotenv';

dotenv.config();

const baseURL = env.ApiBaseURL

Axios.defaults.withCredentials = true;
const axios = Axios.create({baseURL})


export default axios