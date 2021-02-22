import React, { Component } from 'react'

export default class Thumbnail extends Component {

    render() {
        const { attachment } = this.props

        return (
            <img 
                className="thumbnail"
                src={attachment.file}
                alt={'thumb-nail'}
            />
        )
    }
}