
import {connect} from 'react-redux'
import WidgetList from '../component/WidgetList'

import WidgetService from "../service/WidgetService";


const widgetService = new WidgetService();

const stateToPropertyMapper = state => ({
    widgets: state.WidgetReducer.widgets
});

const dispatchToPropertyMapper = dispatch => ({

        findAllWidgets: (topicId) => {
            dispatch({
                type: "FIND_ALL_WIDGETS_PENDING"
            })
            widgetService.findAllWidgets(topicId)
                .then(json => {
                    dispatch({
                        type: "FIND_ALL_WIDGETS_FULFILLED",
                        data: json
                    })
                })
                .catch(err => {
                    dispatch({
                        type: "FIND_ALL_WIDGETS_REJECTED",
                        err: err
                    })
                })
        },

        createWidget: (topicId, newWidget) => {
            dispatch({
                type: "CREATE_WIDGET_PENDING"
            });
            widgetService.createWidget(topicId, newWidget)
                .then(json => {
                    dispatch({
                        type: "CREATE_WIDGET_FULFILLED",
                        data: json,
                        widget: newWidget
                    })
                })
                .catch(err => {
                    dispatch({
                        type: "CREATE_WIDGET_REJECTED",
                        err: err
                    })
                })
        },
        deleteWidget: (topicId, widgetId) => {
            dispatch({
                type: "DELETE_WIDGET_PENDING"
            })
            widgetService.deleteWidget(widgetId)
                .then(json => {
                    dispatch({
                        type: "DELETE_WIDGET_FULFILLED",
                        data: json
                    })
                })
                .catch(err =>{
                    dispatch({
                        type: "DELETE_WIDGET_REJECTED",
                        err: err
                    })
                })
        },

        updateWidget: (widgetId, newWidget) => {
            console.log("newWidget", newWidget)
            dispatch({
                type: "UPDATE_WIDGET_PENDING"
            })
            widgetService.updateWidget(widgetId, newWidget)
                .then(json => {
                    dispatch({
                        type: "UPDATE_WIDGET_FULFILLED",
                        data: json,
                    })
                })
                .catch(err => {
                    dispatch({
                        type: "UPDATE_WIDGET_REJECTED",
                        err: err
                    })
                })

        },

        // deleteWidget: (topicId, widgetId) => {
        //     dispatch({
        //         type: "DELETE_WIDGET_PENDING"
        //     })
        //     widgetService.deleteWidget(widgetId)
        //         .then(json => {
        //             console.log(json)
        //             if (json === 'true') {
        //                 widgetService.findAllWidgets(topicId)
        //                     .then(json => {
        //                         console.log("json", json)
        //                         dispatch({
        //                             type: "DELETE_WIDGET_FULFILLED",
        //                             data: json
        //                         })
        //                     })
        //             } else {
        //                 dispatch({
        //                     type: "DELETE_WIDGET_REJECTED",
        //                     err: json
        //                 })
        //             }
        //
        //         })
        //         .catch(err => {
        //             dispatch({
        //                 type: "DELETE_WIDGET_REJECTED",
        //                 err: err
        //             })
        //         })
        // },

        // updateWidget: (topicId, widgetId, newWidget) => {
        //     dispatch({
        //         type: "UPDATE_WIDGET_PENDING"
        //     })
        //     widgetService.updateWidget(widgetId, newWidget)
        //         .then(json => {
        //             if (json === 'true') {
        //                 dispatch({
        //                     type: "UPDATE_WIDGET_FULFILLED",
        //                     data: json,
        //                 })
        //             } else {
        //                 dispatch({
        //                     type: "UPDATE_WIDGET_REJECTED",
        //                     err: json
        //                 })
        //             }
        //         })
        //         .catch(err => {
        //             dispatch({
        //                 type: "UPDATE_WIDGET_REJECTED",
        //                 err: err
        //             })
        //         })
        // },

        updateWidgetEditingMode: widgetId => {
            dispatch({
                type: "UPDATE_WIDGET_EDITING",
                id: widgetId
            })
        },

        updateWidgetType: (widgetType, widgetId) => {
            dispatch({
                type: "UPDATE_WIDGET_TYPE",
                widgetType: widgetType,
                widgetId: widgetId
            })
        },

        moveWidgetUp: (topicId, widgetId) => {

            dispatch({
                type: "MOVE_WIDGET_UP_PENDING"
            })
            widgetService.moveWidget(topicId, widgetId, "up")
                .then(json => {
                    console.log("up", json)
                    dispatch({
                        type: "MOVE_WIDGET_UP_FULFILLED",
                        data: json,
                        widgetId: widgetId
                    })
                })
                .catch(err => {
                    dispatch({
                        type: "MOVE_WIDGET_UP_REJECTED",
                        err: err
                    })
                })


        },

        moveWidgetDown: (topicId, widgetId) => {
            dispatch({
                type: "MOVE_WIDGET_DOWN_PENDING"
            })
            widgetService.moveWidget(topicId, widgetId, "down")
                .then(json => {
                    console.log("down", json)
                    dispatch({
                        type: "MOVE_WIDGET_DOWN_FULFILLED",
                        data: json,
                        widgetId: widgetId
                    })

                })

                .catch(err => {
                    dispatch({
                        type: "MOVE_WIDGET_DOWN_REJECTED",
                        err: err
                    })
                })

        }


    })
;
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList)