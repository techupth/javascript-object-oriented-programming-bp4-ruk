//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class PostList {
    constructor() {
        this.posts = [];
    }
    addPost(post) {
        this.posts.push(post);
    }
    sharePost(postTitle) {
        console.log(`You've shared post ${postTitle} to your friend.`);
    }
}

class Post {
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(comment) {
        this.comment.push(comment);
    }
}

class Comment {
    constructor(id, content, createdBy) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.likes = 0;
    }
    addLike() {
        this.likes++;
    }
}

class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(group) {
        this.groupList.push(group);
    }
    addPage(page) {
        this.pageList.push(page);
    }
}

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}

class Notification {
    constructor(id) {
        this.id = id;
    }
    send(commentCreatedBy, postTitle) {
        console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
    }
}

const user = new User('1', 'John Doe', 'john.doe@example.com');
const post = new Post('1', 'My First Post', 'Hello, this is my first post!');
const comment = new Comment('1', 'Nice post!', 'Jane Doe');

post.addComment(comment);
comment.addLike();

const postList = new PostList();
postList.addPost(post);
postList.sharePost(post.title);

const fb = new Facebook();
const fbPage = new FacebookPage('My Page');
const fbGroup = new FacebookGroup('My Group');

fb.addPage(fbPage);
fb.addGroup(fbGroup);

const notification = new Notification('1');
notification.send(comment.createdBy, post.title);