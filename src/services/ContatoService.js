import axios from 'axios'

const Contato_API_BASE_URL ='http://localhost:8080/contato'

class ContatoService {
    getContatos(){
    return axios.get(Contato_API_BASE_URL)
    }
    createContato(data){
        return axios.post(Contato_API_BASE_URL,data)

    }
    getContatoData(id){
        let URL =Contato_API_BASE_URL+'/'+id
        return axios.get(URL);
    }
    updateContato(data){
        console.log('inside updateContato')
        console.log(data)
        let URL=Contato_API_BASE_URL+'/'+data.id
        return axios.put(URL,data)
    }
    deleteContato(id){
        let URL =Contato_API_BASE_URL+'/'+id
        return axios.delete(URL)
    }
}

export default new ContatoService()
