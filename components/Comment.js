export default function Comment(comment) {
  console.log(comment);
  const hasNestedComments = comment.comments.length > 0;
  return `
    <div class="nested-comments-${comment.level} comment">
        <div class="comment-header"> 
            <span class="upvote">▲</span>
            <span class="gray">${comment.user} | ${comment.time_ago}, ${
    comment.level
  } </span>
        </div>
        <div class="comment-content"> 
            ${comment.content} 
        </div>
        ${
          hasNestedComments
            ? comment.comments
                .map((comment) => {
                  return Comment(comment);
                })
                .join("")
            : ""
        }
    </div>
    `;
}
