# Kooflix

Check out the [live site](https://kooflix.herokuapp.com/#/)!


### Introduction

Kooflix is a full-stack clone of the popular video-streaming application Netflix. I was inspired to re-create Netflix as an avid fan/user of their application as well as their stylistic UI. Users of Kooflix are able to sign-up or login to an existing account, create multiple profiles for their accounts, browse and play various video titles, and create a curated list of their choosing for each profile. I used these technologies below for this project:

- Languages: Javascript, Ruby, HTML, CSS
- Frontend: React-Redux
- Database: PostgreSQL
- Hosting: Heroku
- Storage: AWS S3

## Features

### Profiles 

Users can sign in and create a profile for each of their accounts. They also have the option of creating, editing, and deleting profiles associated with an account.

![ProfilesGif](/app/assets/images/profiles.png)


```render() {
        const renderProfiles = this.renderProfiles()

        return (
            <div className="profiles-index-main-container">
                <div className="profiles-header">
                    <img className="profiles-splash-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/logo.png" alt="" />
                </div>
                <div className="profiles-gate-container">
                    <div className="profiles-index-container">
                        <h1>Who's watching?</h1>
                        <div className="profiles-images-container">
                            <ul className="profiles-images-list">
                                {renderProfiles}
                                <li>
                                    <div>
                                        <Link className="profile-image-link" to={'/profiles/new'}>
                                            <div id="profile-index-add-container">
                                                <img id="profile-index-add" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/add_profile.png" alt="" />
                                                <p className="profile-image-name">Add Profile</p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* this might have to be an event handler later */}
                        <Link id="manage-profiles-link" to={'/profiles/edit'}>
                            <button id="manage-profiles-button">Manage Profiles</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } 
```


### Browse/Watch

Once logged in to a profile, users are able to view the homepage which has titles grouped by specific genres they belong to. In addition, users can use the navbar to filter videos by their type, either being a movie or a show. 

![BrowseGif](/app/assets/images/browse.png)

``` render() {
        return (
            <div>
                {this.props.genres.map(genre => {
                    return (
                        <VideoIndexContainer videos={this.props.videos} genre={genre} key={genre.id}/>
                    )
                })}
            </div>
        )
    }
```

``` render() {
            if (!this.state.mounted) {
                return (
                    <div>
                        <h1>Videos have not loaded</h1>
                    </div>
                )
            } else {
                return (
                    <div className="video-index-container">
                    <p className="genre-title">{this.props.genre.name}</p>
                    <div className="wrapper">
                        <ArrowBackIosIcon className="slider-arrow left" onClick={this._handleLeftClick} style={{display: !this.state.isMoved && "none"}}></ArrowBackIosIcon>
                        <div className="thumbnail-container" ref={this.listRef}>
                            {this.state.videos.map((video, idx) => {
                                return (
                                    <VideoContainer video={video} key={idx}/>
                                )
                            })}
                        </div>
                        <ArrowForwardIosIcon className="slider-arrow right" onClick={this._handleRightClick}></ArrowForwardIosIcon>
                    </div>
            </div>
                )
            }
    }
```


### My Lists

when viewing titles, users can add title to their list which corresponds to the profile they are currently logged into. This feature was made by using a selector which would select the title corresponding to a certain profile, which was determined by a joins table created in the backend. 

![MyListGif](/app/assets/images/mylist.png)

``` _renderCorrectVideos() {
        const listItems = this.props.allListItems;

        const profileListItems = listItems.filter(listItem => listItem.profile_id === this.props.currentProfileId)

        const allVideos = this.props.videos;

        return (
            profileListItems.map(listItem => {
                return (
                    <VideoContainer className="list-video" video={allVideos[listItem.video_id]} />
                )
            })
        )
    }
```

``` export const findVideoInAllLists = (lists, videoId, profileId) => {
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].profile_id === profileId && lists[i].video_id === videoId) {
            return lists[i];
        }
    }

    return undefined;
}
```