import clientPromise from "/lib/mongodb";
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
   console.log(
            'api got',req.body
  );
 const client = await clientPromise;
 const db = client.db("dash");
  if(!req.body){
    res.status(500).json({ msg: 'Invalid Inputs' })
  }else{
    try{
    if(Update(db,req.body)){
     res.status(201).json({ msg: 'Update Completed',worked: 1 })
    }
    }catch(e){
      res.status(500).json({ msg: 'unable to update' })
    }
  }
  
  
  console.log('datt----: ',
            req.body
  );
}

async function Update(db,data){
  const rowId =  ObjectId(data._id);
  console.log('ddaattaa',data);
  let dat = {
  fname: data.fname,
  lname: data.lname,
  users: data.users,
  flogin: data.flogin,
  groups: data.groups,
  activeUsers: data.activeUsers,
  lati: data.lati,
  long: data.long,
  lati2: data.lati2,
  long2: data.long2,
  // _id: '635b560318da6518ea2ee02c'
};
  const  u =  await db.collection("dash1")
  .updateOne(
            {  _id: rowId  },
            {
               $set: dat
    }
 );
 console.log('modifiedCount:',u.modifiedCount);
  return u.modifiedCount ;
}