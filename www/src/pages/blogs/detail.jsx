import React from 'react'
import {
    Container,
    Paper,
    Grid
} from "@material-ui/core";
import {
    Category as CategoryIcon,
    Schedule as ScheduleIcon,
    Person as PersonIcon,
    ChatBubble as ChatBubbleIcon,
    Visibility as VisibilityIcon
} from '@material-ui/icons';


import dayjs from 'dayjs'
import Markdown from '../../components/markdown.jsx'
import BlogExtras from '../../components/blog_extras.jsx'
import './blogs.css'

class Detail extends React.Component{
    constructor (props) {
        super(props)
    }
    
    render() {
        const {
            author,
            body,
            createTime,
            title,
            category
        } = this.props.post
        return (
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item md={9} style={{overflowX: "hidden"}}>
                        <Paper>
                            <header className="blog-header">
                                <h1 className="blog-title">{title}</h1>
                                <div className="blog-meta">
                                    <span className="post-category"><a href="#">{category}</a></span>
                                    <span className="post-date"><a href="#"><time className="entry-date"
                                                                                  dateTime="{createTime}">{dayjs(createTime).format('YYYY年MM月DD日 HH:mm')}</time></a></span>
                                    <span className="post-author"><a href={`/users/${author.uid}/`}>{author.username}</a></span>
                                    <span className="comments-link"><a href="#">114 评论</a></span>
                                    <span className="views-count"><a href="#">514 阅读</a></span>
                                </div>
                            </header>
                            <div className="blog-content">
                                <Markdown content={body} />
                            </div>
                        </Paper>
                    </Grid>
                    <BlogExtras/>
                </Grid>
            </Container>
        )
    }
}

export default Detail 