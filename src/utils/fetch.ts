export async function getGit(owner: string, repo: string, path: string) {
  const response = await fetch("https://api.github.com/repos/" + owner + "/" + repo + "/contents/" + path);
  const data = await response.json();
  return atob(data.content);
}
