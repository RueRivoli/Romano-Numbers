import axios from 'axios';

const url = 'http://localhost:3000/api/numbers/';

class NumberService {

    //Ajax call to convert number
    static convertNumber(nb) {
        return new Promise(function(resolve, reject) {
            try {
                let data = { number: nb }
                return axios.post(url, data).then(function (response) {
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