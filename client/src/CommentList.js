/* eslint-disable react-hooks/exhaustive-deps */

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    switch (comment.status) {
      case "approved": {
        content = comment.content;
        break;
      }
      case "pending": {
        content = "This comment is pending moderation";
        break;
      }
      case "rejected": {
        content = "This comment has been rejected";
        break;
      }
      default: {
        content = "Moderation service unavailable";
      }
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
