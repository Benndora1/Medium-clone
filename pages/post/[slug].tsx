import { CountQueuingStrategy } from "stream/web";
import Header from "../../components/Header";
import { sanityClient, urlFor} from "../../sanity";
function Post() {
  return <main>
<Header/>
  </main>;
}

export default Post;


export const getStaticPaths = async () => {
     const query = `*[type == "post"]{
         _id,
         slug{ 
             current
         }
     };`

     const post = await sanityClient.fetch(query); 

     const paths = posts.map((post: Post) => ({
         params: {
             slug: post.slug.current
         }
     })) 
};