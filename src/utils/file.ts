import path from "path";
import fs from "fs";

export async function getCodeFromGithub(owner: string, repo: string, path: string) {
  const response = await fetch(
    "https://api.github.com/repos/" + owner + "/" + repo + "/contents/" + path,
    // { cache: "no-store" }
  );
  if (response.status !== 200) {
    return "error getCodeFromGithub: " + response.status;
  }
  const data = await response.json();
  return atob(data.content);
}

export function getLocalFile(target: string): string {
  target = path.join(process.cwd(), target);
  const file = fs.readFileSync(target, "utf-8");
  if (!file) {
    return "error getLocalFile: " + target;
  }
  return file;
}