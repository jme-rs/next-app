import { glob } from "glob";
import { Post, PostMetadata } from "@/types/post";
import { getLocalFile } from "./file";
import path from "path";
import fs from "fs";
import { MdProcess } from "./md-processor";


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


const basePath = "/images/thumbnails/";
export const thumbnails = new Map([
  ["rust", basePath + "rustacean-orig-noshadow.svg"],
  ["markdown", basePath + "markdown.svg"],
]);


function getPostPaths(postsPath: string): string[] {
  const postsPaths = glob.sync(postsPath);
  return postsPaths;
}


function changeThumbnailPath(dir: string, thumbnailPath?: string): string | undefined {
  if (!thumbnailPath) {
    return undefined;
  }
  else if (thumbnails.has(thumbnailPath)) {
    return thumbnails.get(thumbnailPath) as string;
  }

  const srcPath = path.join(process.cwd(), dir, thumbnailPath);
  if (!fs.existsSync(srcPath)) {
    return undefined;
  }
  const parentDir = dir.split(path.sep).pop() || "unknown";
  const dstPath = path.join(process.cwd(), "public", "images", parentDir, thumbnailPath);
  fs.mkdirSync(path.join(process.cwd(), "public", "images", parentDir), { recursive: true });
  fs.copyFileSync(srcPath, dstPath);

  return path.join("/", "images", parentDir, thumbnailPath).replace("\\", "/");
}


export function getPosts(mdDir: string, toc = true): Post[] {

  // const postRef = new GlobalPostRef("posts");
  // if (postRef.value) {
  //   console.log("getPosts: use cache");
  //   return postRef.value;
  // }

  const posts: Post[] = [];
  const filePaths = getPostPaths(mdDir);

  filePaths.forEach((filePath) => {
    const id = path.parse(filePath).name;
    const dir = path.dirname(filePath);
    const md = getLocalFile(filePath);

    const processed = MdProcess(md, dir, toc);
    const content = processed.result;
    const metadata = processed.data.frontMatter as PostMetadata;
    metadata.thumbnail = changeThumbnailPath(dir, metadata.thumbnail);

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
