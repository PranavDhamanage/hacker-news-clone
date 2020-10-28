import Story from "../components/Story.js";
import Comment from "../components/Comment.js";
import view from "../utils/view.js";
import baseUrl from "../utils/base-url.js";
console.log(baseUrl);
export default async function Item() {
  let story;
  let hasComments = false;
  let hasError = false;
  try {
    story = await getStory();
    hasComments = story.comments.length > 0;
  } catch (error) {
    hasError = true;
    console.error(error);
  }
  if (hasError) {
    view.innerHTML = `
      <div class="error"> Error fetching the story</div>
      `;
  }

  view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr/>
    ${
      hasComments
        ? story.comments
            .map((comment) => {
              return Comment(comment);
            })
            .join("")
        : `<div style="text-align:center; font-size:1.1rem;" > No comments until now!</div>`
    }
  `;
}

async function getStory() {
  const storyId = window.location.hash.split("?id=")[1];
  //   console.log(storyId);
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  const story = await response.json();
  return story;
}
