const client = require("./main")

const getAllUsers = async () =>{
    try{
    await client.connect();
    const results = await  client.query("SELECT * FROM public.customers");
    console.table(results.rows);
        return results.rows
    }catch (e) {
        console.log('error ', e)
    }finally {
        await client.end()
    }
};

module.exports = getAllUsers;