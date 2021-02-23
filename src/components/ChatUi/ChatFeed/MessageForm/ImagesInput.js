import React from 'react';

import { FaImage } from 'react-icons/fa'

export default class ImagesInput extends React.Component {
    state = {
        files: []
    }

    onSelect(event) {
        let files = []
        const indexes = [...Array(event.target.files.length).keys()]

        indexes.map((i, index) => {
            const file = event.target.files[index]
            if (file) { files.push(file) }
        })
        
        this.props.onSelectFiles &&  this.props.onSelectFiles(files)
    }

    render() {
        return (
            <form
                encType="multipart/form-data"
                style={{ height: '0px', display: 'inline' }}
            >

                <label htmlFor="files" className="image-button">
                    <FaImage className="picture-icon" />
                </label>

                <input
                    type="file"
                    id="files"
                    accept="image/x-png,image/gif,image/jpeg"
                    style={{ display: 'none' }}
                    onChange={(e) => this.onSelect(e)} 
                    multiple
                />

            </form>
        );
    }
}
