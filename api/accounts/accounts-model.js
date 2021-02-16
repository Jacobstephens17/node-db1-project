const db = require("../../data/dbConfig");

  const get = () =>  {
    return db("accounts");
  }

  const getById = (id) =>  {
    return db("accounts")
        .where({ id })
        .first();
  }


  const create = (account) => {
      return db("accounts")
      .insert(account)
      .then(([id]) => {
          return db("accounts")
          .where("id", id);
        });
    }
    
    
    const update = (id, changes) => {
        return db("accounts")
        .where("id", id)
        .update(changes)
    }
    
    const deleteItem = (id) => {
        return db('accounts').where('id', id).del()
    }
                module.exports = {
                    get,
                    getById,
                    create,
                    update,
                    deleteItem
                }