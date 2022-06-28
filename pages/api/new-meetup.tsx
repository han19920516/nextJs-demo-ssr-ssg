// /api/new-meetup
import type { NextApiRequest, NextApiResponse } from 'next';
import {MongoClient} from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='POST'){
        const data = req.body;
        const client =await MongoClient.connect('mongodb+srv://weihan:123@cluster0.4crkf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        const db = client.db();
        const meetupCollection =db.collection('meetups');
        const result= await meetupCollection.insertOne(data);
        client.close();
        res.status(201).json({message:'meetup added'});
    }
}

export default handler;