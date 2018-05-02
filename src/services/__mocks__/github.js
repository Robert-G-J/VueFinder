const stubData = {
  items: [
    {
      id: 117,
      full_name: "vuejs/vue",
      description: "A progressive incrementally adoptable JS library",
      stargazers_count: 92746
    },
    {
      id: 118,
      full_name: "Jonesy's Vue Town",
      description: "A fantastic place to Vue",
      stargazers_count: 666
    },
    {
      id: 119,
      full_name: "Fresh Vues",
      description: "Fresher than Will Smith in 1980",
      stargazers_count: 555
    }
  ]
};

export default async () => {
  return await new Promise(resolve => resolve(stubData));
};
