import Story from "../components/Story.js";
import Comment from "../components/Comment.js";
import view from "../utils/view.js";

export default async function Item() {
  const story = await getStory();
  console.log(story.comments);
  view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr/>
    ${story.comments
      .map((comment) => {
        return Comment(comment);
      })
      .join("")}
  `;
}

async function getStory() {
  const storyId = window.location.hash.split("?id=")[1];
  //   console.log(storyId);
  const response = await fetch(
    `https://node-hnapi.herokuapp.com/item/${storyId}`
  );
  const story = await response.json();
  return story;
}
