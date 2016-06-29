import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class App extends Component {
    render() {
        const { name, surname } = this.props.user
        const { photos, year} = this.props.page
        return <div>
            <p>Привет, { name } { surname }!</p>
            <p>У тебя { photos.length } фото за { year }</p>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App)
