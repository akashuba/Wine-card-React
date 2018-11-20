import React from 'react'
import { connect } from 'react-redux'

class AppConnected extends React.Component<{}, {}> {
    public render() {
        return <div />
    }
}

const mapState2Props = () => {
    return {}
}

export default connect(mapState2Props)(AppConnected)
