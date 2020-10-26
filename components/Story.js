export default function Story(story) {
  // console.log(story);
  return `<div class="story">
            <div class="story-link">
                <span class="gray">${
                  story.index <= 9
                    ? "0" + String(story.index)
                    : story.index > 9
                    ? story.index
                    : `<img class="arrow-icon" src="../assets/arrow.png" alt="arrow icon for story"/>`
                }</span>
                <span class="upvote">▲</span>
                <a href="${story.url}">${story.title}</a>
                <span>(${story.domain})</span>
            </div>
            <div class="user-info">
                <div class="gray">
                    <span>${story.points} by ${story.user}, ${
    story.time_ago
  }</span>
                    |
                    <a href="#/item?id=${story.id}"> ${
    story.comments_count
  } comments</a>
                    |
                    <span class="favourites">
                        <img class="favourite-logo" src="../assets/heart-icon.png" alt="favorites heart image"/> 
                        Add to Favourites
                    </span>
                </div>
            </div>
          </div>`;
}
