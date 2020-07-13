axios.get('http://api.github.com/users/TalesC')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
