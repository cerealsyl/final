import React from 'react'

class ImageWidget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            src: this.props.widget.src,
            name: "",
            index: this.props.index,
            topicId: this.props.props.match.params.topicId,
            length: this.props.props.widgets.length

        }
    }

    changeSrc = event => {
        this.setState({
            src: event.currentTarget.value
        })
    }

    setWidgetName = event => {
        this.setState({
            name: event.currentTarget.value
        })
    }

    updateWidget = () => {
        const newWidget = {
            ...this.props.widget,
            src: this.state.src,
            name: this.state.name,
        }

        this.props.props.updateWidget(this.props.widget.id, newWidget)
    }



    render() {
        const {topicId, index} = this.state;
        if(this.props.widget.inEditMode) {
            return (
                <div>
                    <div className="row">
                        <div className="col-4">
                            <h4>Image Widget</h4>
                        </div>
                        <div className="col-8 float-right">
                            <button className="btn btn-outline-danger float-right"
                                    onClick={() => this.props.props.deleteWidget(topicId, this.props.widget.id)}
                            ><i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button
                                onClick={this.updateWidget}
                                className="float-right btn btn-outline-success mr-2">
                                <i className="fa fa-check" aria-hidden="true"></i>

                            </button>
                            <select value={this.props.widget.type}
                                    onChange={event => this.props.updateWidgetType(event.currentTarget.value, this.props.widget.id)}
                                    className="form-control mr-2 col-5 float-right">
                                <option value="PARAGRAPH">Paragraph Widget</option>
                                <option value="IMAGE">Image Widget</option>
                                <option value="HEADING">Heading Widget</option>
                                <option value="LIST">List Widget</option>
                                <option value="LINK">Link Widget</option>
                            </select>
                            <button
                                onClick={() => (this.props.props.moveWidgetDown(topicId, this.props.widget.id, this.props.widget))}
                                className={`${this.state.length === index + 1 ? "float-right btn btn-outline-warning mr-2 invisible" : "float-right btn btn-outline-warning mr-2" }`}>
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </button>
                            <button
                                onClick={() => (this.props.props.moveWidgetUp(topicId, this.props.widget.id, this.props.widget))}
                                className={`${index - 1 < 0 ? "invisible" : "visible"} float-right btn btn-outline-warning mr-2`}>
                                <i className="fa fa-caret-up" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>

                    <input
                        onChange={event=>this.changeSrc(event)}
                        value={this.state.src}
                        className="form-control"
                        placeholder="image url"/>
                    <label htmlFor="widgetName" className="mt-2">Widget Name</label>
                    <input
                        value={this.state.name}
                        onChange={event => this.setWidgetName(event)}
                        className="widgetName form-control mt-1"
                        placeholder="Widget Name"/>

                </div>
            )
        }else{
            return (
                <div className="row">
                    <div className="col-10">
                        <img src={this.props.widget.src} style={{width: "100%"}}/>
                    </div>
                    <div className="col-2">
                        <button
                            onClick={() => this.props.updateWidgetEditingMode(this.props.widget.id)}
                            className="btn btn-outline-info float-right">Edit</button>
                    </div>

                </div>
            )
        }

    }



}

export default ImageWidget
