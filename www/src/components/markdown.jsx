import React from "react";
import PropTypes from 'prop-types';
import markdownIt from "markdown-it";

class Markdown extends React.Component{
    constructor (props) {
        super(props)
        this.renderMarkdown.bind(this)
        this.state = {
            md: new markdownIt({
                breaks: true,
                linkify: true,
                typographer: true
            })
        }
    }
    
    renderMarkdown (markdownText) {
        return this.state.md.render(markdownText)
    }
    
    render() {
        const {content} = this.props
        return (
            <div className={'markdown-body'} dangerouslySetInnerHTML={{__html: this.renderMarkdown(content)}}>
                
            </div>
        )
    }
}

Markdown.defaultProps = {
    html: false,
    katex: false
}

Markdown.PropTypes = {
    content: PropTypes.string.isRequired,
    html: PropTypes.bool,
    katex: PropTypes.bool
}

export default Markdown