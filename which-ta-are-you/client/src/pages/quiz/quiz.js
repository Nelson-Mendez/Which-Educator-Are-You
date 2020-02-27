import React from 'react';
import Page from '../../components/Page'
import axios from 'axios';

const API_URL = "https://project-2-api.herokuapp.com"
const API_KEY = "?api_key=aaadfc6e-12f1-4ef4-9ceb-f07951d0f716"

export default class Home extends React.Component {
    state = {
        sideVideos: [],
        mainVideo: [],
        mainVideoId: "1af0jruup5gu" 
    }
    
    componentDidMount() {
        axios
        .get('http://localhost:42069/api/videos')
        .then(response => {
            this.setState({
                sideVideos: response.data
            });
        });

        axios
        .get('http://localhost:42069/api/mainVideo')
        .then(response => {
            response.data.forEach(vid => {
                if (vid.id === this.state.mainVideoId) {
                    this.setState({
                        mainVideo: vid                   
                    })
                }
            })       
        })
    }

    render () {

        return <Page>
            <MainVideo video={this.state.mainVideo} />

            <main className="mainStuff">
                <div className="mainVideoTings">
                    <VideoInfo content={this.state.mainVideo}/>
                    <CommentForm/>
                    <Comments content={this.state.mainVideo.comments} />
                </div>

                <aside className="sideStuff">
                    <VideoList content={this.state.sideVideos} mainId={this.state.mainVideoId}/>
                </aside>
            </main>
        </Page>
    }
}

