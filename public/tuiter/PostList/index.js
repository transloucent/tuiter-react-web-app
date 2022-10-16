import PostItem from "../PostList/PostItem.js";
import post from "../PostList/posts.js";

function summaryLoop() {
    let code = ""
    for (let i = 0; i < post.length; i++) {
        if (i === post.length - 1) {
            code += `<div class=\"border-top border-secondary\">`
            code += `${PostItem(post[i])}`
            code += `</div>`
        }
        else
            code += `${PostItem(post[i])}`
    }
    return code
}

const PostSummaryList = () => {
    return (`
        <div class="border border-secondary">
            <ul class="list-group">
                ${summaryLoop()}
            </ul>
        </div>
    `);
}
$(PostSummaryList);

export default PostSummaryList;