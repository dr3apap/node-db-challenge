exports.seed = async function(knex) {
  const resources = [
    {
      id: 1,

      resource_name: "Luis Hernandez",

      description: "Web Dev senior consultant ",
    },
    {
      id: 2,
      resource_name: "Heroku/Zeit",

      description: "Free Deployment server for native app",
    },
    {
      id: 3,
      resource_name: "Brandi Becker",

      description: "Realtor",
    },
    {
      id: 4,
      resource_name: "Esq Cristina Gomez",

      description: "Business startup Lawyer",
    },
    {
      id: 5,
      resource_name: "Meet up",

      description: "Go to meet up,search for online forum",
    },
    {
      id: 6,
      resource_name: "Bicycle",

      description: "Buy a bicycle",
    },
    {
      id: 7,
      resource_name: "Garage or down the street",
      description: "Showcase some sneakers for sales",
    },
  ];

  await knex("resources").truncate();

  return knex("resources").insert(resources);
};
