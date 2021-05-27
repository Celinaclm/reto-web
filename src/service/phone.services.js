import axios from 'axios';

export default class PhoneService{
    constructor(){
        this.instance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/phones`,
        withCredentials: true
        })
    }

    create = data => this.instance.post("/", data);
    get = () => this.instance.get("/");
    getOne = id => this.instance.get(`/${id}`);
    deleteOne = () => this.instance.delete(`/`);
    updateOne = (id, data) => this.instance.put(`/${id}`, data);
}