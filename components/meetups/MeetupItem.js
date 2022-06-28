import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from 'next/router'
import {useState} from 'react'
import Loading from '../ui/loading'

function MeetupItem(props) {
  const router = useRouter();
  const [isLoading,setLoading]=useState(false);

  const onClickHandler=()=>{
    setLoading(true);
    router.push(`/${props.id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={onClickHandler}>Show Details</button>
        </div>
        {isLoading&&<Loading />}
      </Card>
    </li>
  );
}

export default MeetupItem;
