import Realm from 'realm';

const DogSchema = {
    name: 'Dog',
    properties: { name: 'string' }
};

export default dbOperation => Realm.open({
    schema: [DogSchema]
}).then(dbOperation);
