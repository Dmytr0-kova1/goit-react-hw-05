import s from "./ReviewsCard.module.css";

const imgDefault =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const ReviewsCard = ({ review }) => {
  const { author_details, author, content, created_at } = review;

  const data = new Date(created_at);
  const formattedDate = data.toLocaleString();

  return (
    <>
      <li className={s.item}>
        <div className={s.container}>
          <div className={s.avatar}>
            <img
              className={s.img}
              src={
                author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
                  : imgDefault
              }
              alt="avatar"
            />
          </div>
          <div className={s.details}>
            <h3>{author}</h3>
            <p>Created: {formattedDate}</p>
          </div>
        </div>
        <div className={s.content}>
          <p>{content}</p>
        </div>
      </li>
    </>
  );
};

export default ReviewsCard;
