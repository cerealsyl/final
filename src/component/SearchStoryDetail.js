import React from 'react'
import { withRouter } from 'react-router-dom'

class SearchStoryDetail extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.findStoryById(this.props.match.params)
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h3>{this.props.story.title}</h3>
                        <div>{this.props.story.story}</div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        )
    }


}
export default withRouter(SearchStoryDetail)