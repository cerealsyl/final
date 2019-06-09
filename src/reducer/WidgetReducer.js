
const WidgetReducer = (state = {widgets: []}, action) => {
    switch(action.type) {
        case "FIND_ALL_WIDGETS_FULFILLED":
            action.data.forEach(widget => widget.inEditMode = false);
            return {widgets: action.data}
        case "CREATE_WIDGET_FULFILLED":
            state.widgets.forEach(widget => widget.inEditMode = false)

            action.data.inEditMode = true
            const newState = [...state.widgets, action.data]
            console.log("newstate", newState)
            return {widgets: newState};
        case "DELETE_WIDGET_FULFILLED":
        case "UPDATE_WIDGET_FULFILLED":
            action.data.forEach(widget => {
                widget.inEditMode = false;
            })
            return {widgets: action.data}
        case "FIND_ALL_WIDGETS_REJECTED":
        case "CREATE_WIDGET_REJECTED":
        case "DELETE_WIDGET_REJECTED":
        case "UPDATE_WIDGET_REJECTED":
        case "MOVE_WIDGET_UP_REJECTED":
            console.log(`Action Rejected. Here is the error message: ${action.err}`);
            return state;
        case "UPDATE_WIDGET_EDITING":
            const newWidgets = state.widgets.map(widget => {
                const currentWidget = {...widget}
                if (currentWidget.id === action.id) {
                    currentWidget.inEditMode = true
                    return currentWidget
                }else{
                    return currentWidget
                }
            })
            return {widgets: newWidgets}
        case "UPDATE_WIDGET_TYPE":
            const newWidgets1 = state.widgets.map(widget => {
                const currentWidget = {...widget}
                if (currentWidget.id === action.widgetId) {
                    currentWidget.type = action.widgetType
                    return currentWidget
                }else{
                    return currentWidget
                }
            });
            return {widgets: newWidgets1};
        case "MOVE_WIDGET_UP_FULFILLED":
        case "MOVE_WIDGET_DOWN_FULFILLED":
            action.data.forEach(widget => {
               if(widget.id === action.widgetId) {
                   widget.inEditMode = true;
                   return widget
               }else{
                   widget.inEditMode = false;
                   return widget
               }
            });
            console.log("action.data", action.data)
            return {widgets: action.data};
        default:
            return state
        
    }
};
export default WidgetReducer