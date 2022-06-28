import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from 'next/router'

const url ='/api/new-meetup'

const NewMeetupPage =()=>{
    const router = useRouter();

    const addMeetupHandler = async(data:any)=>{
        const result = await fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(result);
        router.push('/');
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
};

export default NewMeetupPage;