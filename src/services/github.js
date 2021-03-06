export default async () => {
  const response = await fetch(
    "https://api.github.com/search/repositories?q=vue+language:javascript&sort=stars&order=desc"
  );
  const json = await response.json();
  return json.items;
};
