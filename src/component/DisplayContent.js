import React from 'react'

class DisplayContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container mt-5">

                <div className="row">
                    <div className="col-4">
                        title of the book
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        number of reviews
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        cover of the book
                    </div>
                    <div className="col-6">
                        pricing comparison
                    </div>
                </div>

                </div>

        )
    }
}

export default DisplayContent