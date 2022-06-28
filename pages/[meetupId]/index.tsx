import MeetupDetails from "../../components/meetups/MeetupDetails";
import {MongoClient} from 'mongodb'

type detailsProps={
    image:string,
    title:string,
    address:string,
    description:string
};

const DetailsPage =(props:detailsProps):JSX.Element=>{
    return <MeetupDetails image={props.image} title={props.title} address={props.address} description={props.description} />
};

export async function getStaticPaths(){
    const client =await MongoClient.connect('mongodb+srv://weihan:123@cluster0.4crkf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    const ids = meetups.map(i=>{return {params:{meetupId:i._id.toString()}}});

    client.close();
    return {
        fallback:false,
        // [{params:{meetupId:''}},{params:{meetupId:''}}]
        paths:ids,
    }
}

export async function getStaticProps(context:any){
    const meetupId = context.params.meetupId;
    // fetch data from server
    const client = await MongoClient.connect('mongodb+srv://weihan:123@cluster0.4crkf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db=client.db();
    const meetupColection = db.collection('meetups');
    const theMeetups = await meetupColection.find().toArray();
    const theMeetup = theMeetups.find((item)=>{return item._id.toString()===meetupId});
    
    return {
        props:{
            image:'https://i.picsum.photos/id/924/200/200.jpg?hmac=-YPUvHCTNDIgKRr_6V8Cb080iccIIDU1FhDG41YrEjY',
            title:theMeetup!.title,
            address:theMeetup!.address,
            description:theMeetup!.description
        }
    }
}


export default DetailsPage;