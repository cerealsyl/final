import React from 'react'

class ParagraphWidget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.widget.text,
            name: "",
            index: this.props.index,
            topicId: this.props.props.match.params.topicId,
            length: this.props.props.widgets.length

        }

    }
    changeText = event => {
        this.setState({
            text: event.currentTarget.value
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
            text: this.state.text,
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
                            <h4>Paragraph Widget</h4>
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
                                className={`${this.state.length === index + 1 ? "invisible" : "visible"} float-right btn btn-outline-warning mr-2`}>
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </button>
                            <button
                                onClick={() => (this.props.props.moveWidgetUp(topicId, this.props.widget.id, this.props.widget))}
                                className={`${index - 1 < 0 ? "invisible" : "visible"} float-right btn btn-outline-warning mr-2`}>
                                <i className="fa fa-caret-up" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <h5>Paragraph Content</h5>
                    <textarea
                        rows="6"
                        className="form-control"
                        value={this.state.text}
                        onChange={event => this.changeText(event)}
                        placeholder="Paragraph text"></textarea>
                    <label
                        htmlFor="widgetName"
                        className="mt-2">
                        Widget Name</label>
                    <input
                        value={this.state.name}
                        onChange={event => this.setWidgetName(event)}
                        className="widgetName form-control mt-1"
                        placeholder="Widget Name"/>

                </div>
            )

        } else {
            return (
                <div className="row">
                    <div className="col-10">
                        <div className="col-10">{this.props.widget.text}</div>
                    </div>

                    <div className="col-2">
                        <button
                            onClick={() => this.props.updateWidgetEditingMode(this.props.widget.id)}
                            className="float-right btn btn-outline-info">Edit</button>
                    </div>

                </div>
            )
        }


    }
}


export default ParagraphWidget