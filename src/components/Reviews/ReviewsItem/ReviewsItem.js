export default function ReviewsItem({ author, content }) {
  return (
    <li>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  );
}
