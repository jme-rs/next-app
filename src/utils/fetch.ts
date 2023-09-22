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

export async function getCodeFromLocal(path: string) {
  const response = await fetch(path);
  if (response.status !== 200) {
    return "error getCodeFromLocal: " + response.status;
  }
  return await response.text();
}