export const getAllGitHubRepos = async() => {
  const response = await fetch('https://api.github.com/users/darah3ng/repos?per_page=10&sort=created');
  return await response.json();
};
