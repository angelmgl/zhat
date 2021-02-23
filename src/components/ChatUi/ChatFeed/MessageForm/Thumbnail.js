import React from 'react'

import { CloseCircleTwoTone } from '@ant-design/icons'

export default class FileRow extends React.Component {
    state = {
        hovered: false
    }

    render() {
        return (
            <div 
                className="thumbnail-container"
            >
                
                <img
                    className="image-square"
                    alt={this.props.file ? this.props.file.name : ''}
                    src={URL.createObjectURL(this.props.file)}
                    onMouseEnter={() => this.setState({ hovered: true })}
                    onMouseLeave={() => this.setState({ hovered: false })}
                />

                {
                    this.state.hovered &&
                    <CloseCircleTwoTone 
                        className="close-icon" 
                        onClick={() => this.props.onRemove && this.props.onRemove()}
                    />
                }

            </div>
        ) ;
    }
}