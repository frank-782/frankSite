import React from 'react'
import './blog_extras.css'
import {Grid, Paper} from "@material-ui/core";

class BlogExtras extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: {}
        }
    }
    
    componentDidMount() {
        fetch("/blogs/api/widget/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (isLoaded) {
            return (
                <Grid item md={3}>
                    <Paper>
                        <div className="widget widget-recent-posts">
                            <div className={"widget-head"}>
                                <h3 class="widget-title">最新文章</h3>
                            </div>
                            <ul>
                                {items.recentPosts.map(item => (
                                    <li>
                                        <a href={`/blogs/posts/${item.pk}/`}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="widget widget-category">
                            <h3 className="widget-title">分类</h3>
                            <ul>
                                {items.category.map(category => (
                                    <li>
                                        <a href={`/blogs/categories/${category.pk}/`}>{category.name} <span className="post-count">({category.count})</span></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="widget widget-archives">
                            <h3 className="widget-title">归档</h3>
                            <ul>
                                {items.archives.map(item => (
                                    <li>
                                        <a href={`/blogs/archives/${item.year}/${item.month}/`}>{item.year} 年 {item.month} 月</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="widget widget-tag-cloud">
                            <h3 className="widget-title">标签云</h3>
                            <ul>
                                {items.tag.map(tag => (
                                <li>
                                    <a href={`/blogs/tags/${tag.pk}/`}>{tag.name}</a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </Paper>
                </Grid>
            )
        } else {
            return (
                <Grid item md={3}>
                    <Paper>
                        <div className="widget widget-recent-posts">
                            Loading...
                        </div>
                    </Paper>
                </Grid>
            )
            
        }
    }
}

export default BlogExtras 