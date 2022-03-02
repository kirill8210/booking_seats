const URL_API = 'https://621f6de1ce99a7de193bde8c.mockapi.io/api/air/1-air';

const getData = () => fetch(URL_API)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.status);
    })
    .catch((err) => {console.error(err)});

export default getData;
