import React, { Component } from 'react';

class SocialCard extends Component {
    render() {
        return (
            <div className="social-card">
                <img src={'http://placehold.it/400x20&text=slide1'} 
                alt="profile picture" 
                className="profile-picture"/>
                <h2 className="user-name">
                    Joe Schafer
                </h2>
                <h2 className="handle">
                    @joeschafer
                </h2>
                <h3 className="description">
                    Here is a post that I am sharing do you like it?
                </h3>
                <button className="reply"></button>
                <button className="repost"></button>
                <button className="like"></button>
                <button className="share"></button>
            </div>
        )
    }
}

export default SocialCard;