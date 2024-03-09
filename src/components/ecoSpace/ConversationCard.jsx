import moment from "moment";

const ConversationCard = ({ conversation }) => {
  const email = conversation?.email;
  const userImage = conversation?.userImage;
  const message = conversation?.message;
  const audio = conversation?.audio;
  const video = conversation?.video;
  const image = conversation?.image;
  const time = conversation?.createdAt;

  return (
    <div className="flex gap-2 items-start">
      <img src={userImage} className="size-8 rounded-md" alt="" />
      <div>
        <div className="flex gap-4 items-center pb-2">
          <p className="font-bold">{email}</p>
          <p className="text-xs text-accent">
            {moment(time).format("MMM DD, YYYY hh:mm:ss A")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {message && (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: message }}
            ></div>
          )}
          {audio && (
            <audio className="" controls>
              <source src={audio} type="audio/ogg" />
              <source src={audio} type="audio/mpeg" />
              Your browser does not support this audio.
            </audio>
          )}

          {image && (
            <img
              src={image}
              alt="image"
              className="w-[150px] h-[150px] object-cover rounded-sm"
            />
          )}

          {video && (
            <video
              className="w-[150px] h-[150px] object-cover rounded-sm"
              controls
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
