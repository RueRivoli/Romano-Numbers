import axios from 'axios';

const url = 'http://localhost:3000/api/auth';

class NumberService {

    //Ask server to convert number
    static convertNumber(nb) {
        console.log('convertNumber');
        return new Promise(function(resolve, reject) {
            try {
                console.log(nb);
                return axios.post(url, nb).then(function (response) {
                    console.log(response);
                    resolve(response.data);
                }).catch(function (error) {
                    console.log('Error');
                    console.log(error);
                    reject(error);
                });
            } catch(err) {
                console.log('Error');
                console.log(err);
                reject(err);
            }
        })
    }

}

export default NumberService;