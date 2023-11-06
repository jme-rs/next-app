import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";

// export async function getCodeFromGithub(owner: string, repo: string, path: string) {
//   const response = await fetch(
//     "https://api.github.com/repos/" + owner + "/" + repo + "/contents/" + path,
//     // { cache: "no-store" }
//   );
//   if (response.status !== 200) {
//     return "error getCodeFromGithub: " + response.status;
//   }
//   const data = await response.json();
//   return atob(data.content);
// }

export function getLocalFile(target: string) {
  target = path.join(process.cwd(), target);
  const file = fs.readFileSync(target, "utf-8");
  if (!file) {
    return "error getLocalFile: " + target;
  }
  return file;
}

export async function getDomFromURL(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  const doc = new JSDOM(html).window.document;
  return doc;
}

export async function getFullIconURL(url: string, dom: Document) {
  var maybePath = dom.querySelector("meta[property='icon']")?.getAttribute("content");
  if (!maybePath) {
    maybePath = dom.querySelector("link[rel='shortcut icon']")?.getAttribute("href");
  }
  if (!maybePath) {
    return null;
  }

  let path = maybePath as string;
  if (path.startsWith("http")) {
    return path;
  }
  else if (path.startsWith("/")) {
    return new URL(url).href + path;
  }
  else {
    return url + "/" + path;
  }
}
