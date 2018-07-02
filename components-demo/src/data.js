const Data = {
    getCars: () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {resolve ( [
                { id: 1, make: 'Opel', model: 'Astra'},
                { id: 2, make: 'Opel', model: 'Omega'},
                { id: 3, make: 'Opel', model: 'Mariva'}, 
            ])}, 2000)
        })
    }
}

export default Data;