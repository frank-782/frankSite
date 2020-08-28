import React from 'react'
import {
    Container,
    Paper,
    Grid
} from "@material-ui/core";
import BlogExtras from '../../components/blog_extras.jsx'
import dayjs from 'dayjs'

class Home extends React.Component{
    constructor (props) {
        super(props)
    }
    
    render() {
        const {
            postList
        } = this.props
        return (
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item md={9}>
                        {postList.map(post => (
                            <Paper>
                            <article className={`post post-${post.pk}`}>
                                <header className="blog-header">
                                    <h1 className="blog-title">
                                        <a href={`/blogs/posts/${post.pk}/`}>{post.title}</a>
                                    </h1>
                                    <div className="blog-meta">
                                        <span className="post-category"><a href="#">{post.category}</a></span>
                                        <span className="post-date"><a href="#"><time className="entry-date"
                                                                                      dateTime={post.createTime}>{dayjs(post.createTime).format('YYYY年MM月DD日 HH:mm')}</time></a></span>
                                        <span className="post-author"><a href="#">{post.author.username}</a></span>
                                        <span className="comments-link"><a href="#">4 评论</a></span>
                                        <span className="views-count"><a href="#">588 阅读</a></span>
                                    </div>
                                </header>
                                <div className="blog-content clearfix">
                                    <p>{post.body}...</p>
                                    <div className="read-more cl-effect-14">
                                        <a href={`/blogs/posts/${post.pk}/`} className="more-link">继续阅读 <span className="meta-nav">→</span></a>
                                    </div>
                                </div>
                            </article>
                        </Paper>
                        ))}
                        
                    </Grid>
                    <BlogExtras/>
                </Grid>
            </Container>
        )
    }
}

export default Home 