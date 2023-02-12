import React from "react";

function Article({ id, title, date = "January 1, 1970", preview, minutes }) {
  let minutesToRead = "";
  if (minutes) {
    if (minutes < 30) {
      minutesToRead = "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      minutesToRead = "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutesToRead && <p>{minutesToRead}</p>}
    </article>
  );
}

export default Article;
