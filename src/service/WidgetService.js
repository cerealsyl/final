let widgets = 'http://localhost:8080/topics/TOPIC_ID/widgets';
let widget = 'http://localhost:8080/widgets/WIDGET_ID';


export default class WidgetService {

    findAllWidgets = (topicId) => {
        let tempUrl = widgets.replace("TOPIC_ID", topicId);
        return fetch(tempUrl)
            .then(response => {
                return response.json()
            })
    };

    findWidgetById = (widgetId) => {
        let tempUrl = widget.replace("WIDGET_ID", widgetId);
        return fetch(tempUrl)
            .then(response => {
                return response.json()
            })

    }

    createWidget = (topicId, newWidget) => {
        let tempUrl = widgets.replace("TOPIC_ID", topicId);
        return fetch(tempUrl, {
            method: "POST",
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })
    }

    deleteWidget = (widgetId) => {
        let tempUrl = widget.replace("WIDGET_ID", widgetId);
        return fetch(tempUrl, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })

    }

    updateWidget = (widgetId, newWidget) => {
        let tempUrl = widget.replace("WIDGET_ID", widgetId);
        return fetch(tempUrl, {
            method: 'PUT',
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(response => {
                return response.json()
            })

    };

    moveWidget = (topicId, widgetId, direction) => {

        let tempUrl = widgets.replace("TOPIC_ID", topicId);
        tempUrl = tempUrl.replace("WIDGET_ID", widgetId)
        return fetch(tempUrl, {
            method: 'PUT',
            body: JSON.stringify({widgetId, direction: direction}),
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })

    }





}