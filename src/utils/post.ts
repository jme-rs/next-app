import { glob } from "glob";
import processor from "./md-processor";
import { Post, PostMetadata } from "@/types/post";
import { getLocalFile } from "./file";
import path from "path";


// export class GlobalPostRef {
//   private readonly sym: symbol;

//   constructor(uniqueName: string) {
//     this.sym = Symbol.for(uniqueName);
//   }

//   get value() {
//     return (global as any)[this.sym] as Post[];
//   }

//   set value(value: Post[]) {
//     (global as any)[this.sym] = value;
//   }
// }


function getPostPaths(postsPath: string): string[] {
  const postsPaths = glob.sync(postsPath);
  return postsPaths;
}


export function getPosts(mdDir: string): Post[] {

  // const postRef = new GlobalPostRef("posts");
  // if (postRef.value) {
  //   console.log("getPosts: use cache");
  //   return postRef.value;
  // }

  const posts: Post[] = [];
  const filePaths = getPostPaths(mdDir);

  filePaths.forEach((filePath) => {
    const id = path.parse(filePath).name;
    const md = getLocalFile(filePath);
    const processed = processor.processSync(md);
    const content = processed.result;
    const metadata = processed.data.frontMatter as PostMetadata;

    posts.push({
      id,
      metadata,
      content,
    });
  });

  // postRef.value = posts;

  console.log("getPosts: markdown build");
  return posts;
}
