function PostRow({id, title, body, userId, darkRow}) {
  const classNames = darkRow ? "post-row dark-background" : "post-row";
  return (
    <tr key={id} className={classNames}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>{userId}</td>
    </tr>
  );
}

export default PostRow;
