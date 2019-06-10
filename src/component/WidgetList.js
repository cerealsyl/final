import React from 'react'
import {withRouter} from 'react-router-dom'

import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";



class WidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topicId: this.props.match.params.topicId,
            widgetTitle: "",
            widgetType: "PARAGRAPH",

        }

    }

    componentDidMount() {
        this.props.findAllWidgets(this.state.topicId)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            this.setState({
                widgets: this.props.widgets
            })
        }
    }

    inputValueChanged = event => {
        this.setState({
            widgetTitle: event.target.value
        })

    }

    createWidget = () => {
        if (this.state.widgetTitle) {
            const newWidget = {
                type: this.state.widgetType,
                text: null,
                size: null,
                value: null,

            }
            this.props.createWidget(this.state.topicId, newWidget)
        }
        this.setState({
            widgetTitle: ""
        })
    }
    getWidgetType = event => {
        this.setState({
            widgetType: event.currentTarget.value
        })
    }



    render() {

        if (this.state.widgets !== undefined && this.state.widgets !== null) {

            return (
                <div className="container">
                    <h3 className="mt-2 mb-3 text-center">Widget List</h3>
                    <ul className="list-group">
                        <div>
                            <li className="list-group-item">

                                <input onChange={this.inputValueChanged}
                                       value={this.state.widgetTitle}
                                       className="form-control"/>
                                <button onClick={this.createWidget} className="btn btn-success form-control">
                                    Add Widget
                                </button>
                                <select
                                    onChange={event => this.getWidgetType(event)}
                                    className="form-control">
                                    <option value="PARAGRAPH">Paragraph Widget</option>
                                    <option value="HEADING">Heading Widget</option>
                                </select>
                            </li>

                        </div>

                        {
                            this.state.widgets.map((widget, index) => {

                                return (
                                    <li className="list-group-item" key={index}>
                                        <div>
                                            {widget.type === 'HEADING' &&
                                                <HeadingWidget
                                                    widget={widget}
                                                    index={index}
                                                    updateWidgetEditingMode={this.props.updateWidgetEditingMode}
                                                    updateWidgetType={this.props.updateWidgetType}
                                                    props={this.props}
                                                />}
                                            {widget.type === 'PARAGRAPH'
                                            && <ParagraphWidget widget={widget}
                                                           index={index}
                                                           updateWidgetEditingMode={this.props.updateWidgetEditingMode}
                                                           updateWidgetType={this.props.updateWidgetType}
                                                           props={this.props}/>}

                                        </div>
                                    </li>


                                )


                            })}
                    </ul>
                </div>
            )

        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

export default withRouter(WidgetList)