import fetch from 'node-fetch';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Post {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
const getData = async (url: string): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const jsonData = <Post[]>await response.json();
    return jsonData
}

getData(COMMENTS_URL)
    .then(data => {
        data.forEach(post => console.log('ID: ' + post.id + ', Email: ' + post.email))
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */