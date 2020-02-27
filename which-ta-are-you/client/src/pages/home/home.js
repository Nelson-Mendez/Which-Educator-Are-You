import React from 'react';
import Page from '../../components/Page'
import MainVideo from '../../components/MainVideo/'
import CommentForm from '../../components/comment-form/Comment-form'
import Comments from '../../components/Comments'
import VideoInfo from '../../components/MainVideoInfo/MainVideoInfo';
import VideoList from '../../components/VideoList/';

import axios from 'axios';

const API_URL = "https://project-2-api.herokuapp.com"
const API_KEY = "?api_key=aaadfc6e-12f1-4ef4-9ceb-f07951d0f716"

export default class Home extends React.Component {

    render () {

        return <>
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
        </>
    }
}

