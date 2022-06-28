import classes from './MeetupDetails.module.css'
import Card from '../ui/Card'

type detailsProps ={
    image:string,
    title:string,
    address:string,
    description:string,
}

const MeetupDetails = (props:detailsProps):JSX.Element => {
   
    return(<Card>
        <div className={classes.image}>
        <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.title}><h3>{props.title}</h3></div>
        <div><address>{props.address}</address></div>
        <div><p>{props.description}</p></div>   
    </Card>)
}
export default MeetupDetails;