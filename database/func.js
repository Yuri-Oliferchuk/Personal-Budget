const {database} = require('./db.js')

const addToDatabase = (obj, newData) => {
    newData.id = obj[obj.length-1].id + 1;
    obj.push(newData);
    return newData;
}

const selectById = (obj, index) => {
    let element = obj.filter(c => c.id == index);
    element = element[0];
    return element;
}

const updateElement = (obj, newData) => {
    const selectedId = obj.findIndex((element) => {
        return element.id === newData.id;
      });
    if (selectedId != -1) {
      obj[selectedId] = newData;
    };
    return obj[selectedId];
}

const deleteById = (obj, index) => {
    const selectedId = obj.findIndex((element) => {
        return element.id == index;
    });
    obj.splice(selectedId, 1);
}
 
module.exports = { 
    addToDatabase,
    selectById,
    updateElement,
    deleteById,
};