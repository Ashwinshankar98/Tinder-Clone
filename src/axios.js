import axios from "axios";

const instance=axios.create({
    baseURL:'https://tinderbackend-ashwin.herokuapp.com',
});

export default instance;