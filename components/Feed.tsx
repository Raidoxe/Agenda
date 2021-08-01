import * as React from 'react';
import { View } from 'react-native';
import styles from '../Styling/FeedStyles';
import UserContext from '../context/UserContext';
import { useEffect } from 'react';
import axios from 'axios';

type Event = {
    name: string,
    imageUrl?: string,
    date: Date,
    location: string,
    coming?: Array<string>,
    invited?: Array<string>
}

const Feed: React.FC<{}> = () => {
    const user = React.useContext(UserContext);
    const [events, setEvents] = React.useState<Array<Event> | null>(null);

    useEffect(() => {
        /*if(user) {
            axios.get(`{SERVERURL}/getUserFeed?userid=${user.uid}`).then(res => {
                if(res.data.type === Event) {
                    setEvents(res.data);
                } else {
                    console.error('Invalid server response at getUserFeed');
                    console.error(res);
                }
                
            })  
        }*/
        return () => {}
    }, [user, setEvents])

    return (
        <View style={styles.container}>
            
        </View>
    )
}

export default Feed;