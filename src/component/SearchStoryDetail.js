import React from 'react'
import { withRouter } from 'react-router-dom'

class SearchStoryDetail extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.findStoryById(this.props.match.params.storyId)
    }

    render() {
        if(! this.props.story) {
            return <div>Loading .....</div>
        }else{
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 mt-5">
                            <h3 className="text-center">
                                {this.props.story.title}
                            </h3>
                            <h5 className="text-center mt-2">
                                sylvia
                                {/*{this.props.story.writer.username}*/}
                            </h5>
                            <div className="mt-3">
                                {this.props.story.story}
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            )
        }

    }


}
export default withRouter(SearchStoryDetail)