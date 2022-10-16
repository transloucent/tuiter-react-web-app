import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

function summaryLoop() {
    let code = ""
    for (let i = 0; i < post.length; i++)
        code += `${PostSummaryItem(post[i])}`
    return code
}

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${summaryLoop()}
        </ul>
    `);
}
$(PostSummaryList);

export default PostSummaryList;