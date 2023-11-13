import { glob } from "glob";
import processor from "./md-processor";
import { Post, PostMetadata } from "@/types/post";
import { getLocalFile } from "./file";
import path from "path";


function getPostPaths(postsPath: string): string[] {
  const postsPaths = glob.sync(postsPath);
  return postsPaths;
}

export function getPosts(mdDir: string): Post[] {

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

  console.log("markdown build");
  return posts;
}
