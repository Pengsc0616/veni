import React, {useState, useEffect} from 'react'
import "../css-component/CreatorChat.css"
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'

function CreatorChat() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className="creatorchat">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <MessageSender />
            {posts.map((post) => (
                <Post 
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))

            }
            {/* <Post 
                profilePic="https://assets-global.website-files.com/606f63778ec431ec1b930f1f/60799a1a293570434ba6d75c_PortfolioAnalysisforBeginners-5a011cc7ec2f64003784666f.jpg"
                message="THIS WEBSITE IS INCREDIBLE"
                timestamp="Timestamp..."
                username="Lynn"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <Post 
                profilePic="https://assets-global.website-files.com/606f63778ec431ec1b930f1f/60799a1a293570434ba6d75c_PortfolioAnalysisforBeginners-5a011cc7ec2f64003784666f.jpg"
                message="THIS WEBSITE IS INCREDIBLE"
                timestamp="Timestamp..."
                username="Lynn"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            /> */}
            {/* <Post 
                key={id}
                profilePic={profilePic}
                message={message}
                timestamp={timestamp}
                username={username}
                image={image}
            /> */}
        </div>
    )
}

export default CreatorChat
