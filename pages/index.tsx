import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList'
import Head from 'next/head'

type meetupsType ={
    image:string,
    title:string,
    address:string,
    id:string
};

const HomePage =(props:{meetups:meetupsType[]})=>{
    //no needs for useEffect  
    return <>
    <Head>
        <title>next demo</title>
        <meta name='description' content='my nextJS demo'/>
    </Head>
    <MeetupList meetups={props.meetups}/>
    </> 
}

// only work in pages file, code ran in build process
// SSG
export async function getStaticProps(){
    const client =await MongoClient.connect('mongodb+srv://weihan:123@cluster0.4crkf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    
    return {
        props:{
            meetups:meetups.map((i)=>{
                return {
                    title:i.title,
                    address:i.address,
                    image:i.image,
                    id:i._id.toString()
                }
            })
        },
        //increatmental static generation. seconds  
        revalidate:3600
    }
}

export default HomePage;
