import BlogCard from "./BlogCard"
import BlogsBanner from "./BlogsBanner"

const Blogs = () => {
  return (
    <main>
      <BlogsBanner />
      <section>
        <BlogCard blurb="Hello" link="www.google.com" thumbnail={"thuis"} title="Hello:" />
        <BlogCard blurb="Hello" link="www.google.com" thumbnail={"thuis"} title="Hello:" />
        <BlogCard blurb="Hello" link="www.google.com" thumbnail={"thuis"} title="Hello:" />
        <BlogCard blurb="Hello" link="www.google.com" thumbnail={"thuis"} title="Hello:" />
        <BlogCard blurb="Hello" link="www.google.com" thumbnail={"thuis"} title="Hello:" />
        <BlogCard blurb="Hello" link="www.google.com" thumbnail={"thuis"} title="Hello:" />
        <BlogCard blurb="Hello" link="www.google.com" thumbnail={"thuis"} title="Hello:" />
      </section>
    </main>
  )
}

export default Blogs
