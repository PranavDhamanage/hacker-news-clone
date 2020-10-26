export default function Comment(comment) {
  console.log(comment);
  return `
    <div>${comment.content} </div>
    `;
}
