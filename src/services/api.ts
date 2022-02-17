import axios from 'axios';

//  constants
import {base_url} from '../constants/api';

const api = axios.create({
  baseURL: base_url,
});

export default api;
