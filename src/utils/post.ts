import { glob } from "glob";
import processor from "./mdProcessor";
import { Post, PostMetadata } from "@/types/post";
import { getLocalFile } from "./fetch";

let postsCache: Post[];

function getPostPaths(postsPath: string): string[] {
  const postsPaths = glob.sync(postsPath);
  return postsPaths;
}

function getPosts(mdDir: string): Post[] {

  if (postsCache) {
    return postsCache;
  }

  const posts: Post[] = [];
  const filePaths = getPostPaths(mdDir);

  filePaths.forEach((filePath) => {
    const filePathSplit = filePath.split("\\");
    const id = filePathSplit[filePathSplit.length - 1].split(".")[0];
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
  postsCache = posts;
  return posts;
}

export const posts = getPosts("src/assets/posts/[0-9]*/*.md");