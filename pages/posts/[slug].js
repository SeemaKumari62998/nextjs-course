import Head from "next/head";
import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";

function PostDetailsPage(props) {
  if (!props.post) {
    return <p>Loading...</p>; // Display a loading message or spinner
  }
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
}

export default PostDetailsPage;
