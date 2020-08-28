from users.api import get_user
from django.utils.html import strip_tags
import markdown


def format_post(post, excerpt=False):
    tags = []
    body = post.body
    for t in post.tags.all():
        tags.append(t.name)
    if excerpt:
        md = markdown.Markdown(extensions=[
            'markdown.extensions.extra',
            'markdown.extensions.codehilite',
        ])
        body = strip_tags(md.convert(post.body))[:128]
     
    return {
        "pk": post.pk,
        "title": post.title,
        "category": str(post.category),
        "tags": tags,
        "body": body,
        "author": get_user(post.author),
        "createTime": str(post.create_time),
        "modifiedTime": str(post.modified_time)
    }