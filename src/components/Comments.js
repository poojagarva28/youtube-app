import React from "react";

const Comments = () => {
  const commentsData = [
    {
      name: "Pooja Garva",
      text: "Nice Video",
      replies: [
        {
          name: "Pooja Garva",
          text: "Nice Video",
          replies: [],
        },
        {
          name: "Pooja Garva",
          text: "Nice Video",
          replies: [],
        },
      ],
    },
    {
      name: "Pooja Garva",
      text: "Nice Video",
      replies: [
        {
          name: "Pooja Garva",
          text: "Nice Video",
          replies: [
            {
              name: "Pooja Garva",
              text: "Nice Video",
              replies: [
                {
                  name: "Pooja Garva",
                  text: "Nice Video",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Pooja Garva",
      text: "Nice Video",
      replies: [],
    },
    {
      name: "Pooja Garva",
      text: "Nice Video",
      replies: [
        {
          name: "Pooja Garva",
          text: "Nice Video",
          replies: [],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex bg-gray-200 p-3 my-2">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="comment icon"
          width={50}
          height={30}
        />
        <div className="ml-2">
          <h3 className="font-bold">{name}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return comments.map((comment, i) => (
      <div key={i}>
        <Comment data={comment} />
        <div className="ml-10 pl-5 border border-l-black">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Comments;
