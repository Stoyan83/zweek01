import Section from "@/components/ui/Section";

const BlogList = ({ blogs }: any) => {
  return (
    <div className="">
      <div className="">
        {blogs.map((blog: any) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
