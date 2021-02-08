import { makeAutoObservable } from 'mobx';

class Store {

    constructor() {
        makeAutoObservable(this)
    }

    url = 'https://jsonplaceholder.typicode.com/';
    posts;
    postShowed = 0;
    commentsShowed = 0;

    showPost = false;
    postToShow = undefined;

    fetchPosts = async () => {
        const r = await fetch(`${this.url}posts`);
        this.posts = await r.json();
        if (r) return true;
    }

    getPosts = (count) => {
        const result = this.posts.slice(this.postShowed, this.postShowed + count);
        this.postShowed += count;
        return result;
    }

    getPostById = async () => {
        const r = await fetch(`${this.url}posts/${this.postToShow}`);
        const result = await r.json();
        return result;
    }

    getComments = async (count) => {
        const r = await fetch(`${this.url}posts/${this.postToShow}/comments`);
        const result = await r.json();
        const comments = result.slice(this.commentsShowed, this.commentsShowed + count);
        const obj = {
            comments: comments
        };

        this.commentsShowed += count;
        obj.end = this.commentsShowed >= result.length;

        return obj;
    }

    showPostDetails = (id) => {
        this.showPost = true;
        this.postToShow = id;
    }

    hidePostDetails = () => {
        this.showPost = false;
        this.postToShow = undefined;
    }
}

export default new Store();