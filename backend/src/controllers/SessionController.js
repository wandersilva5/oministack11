const conection = require('../database/connection');

module.exports = {
    async store(request, response) {

        const { id } = request.body;

        const ong = await conection('ongs')
        .where('id', id)
        .select("name")
        .first();

        if(!ong){
            return response.json({ error: "No ONG found with this ID" })
        }
            
        return response.json(ong);
    },
}