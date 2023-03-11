const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <h3>{blog.name}</h3>
      <p>{blog.bodyText}</p>
    </div>
  );
};

export default Blog;
