exports.seed = async function(knex) {
  // Deletes ALL existing entries

  const seedingData = [
    {
      id: 1,
      project_name: " Web-Dev",
      description:
        "Start a small web-development business also know as start up",
      completed: false,
    },
    {
      id: 2,
      project_name: "Deploy my first application ",
      description: "Build a app from scratch and deploy it",
      completed: false,
    },
    {
      id: 3,
      project_name: "Secure an office near a tech location",
      description: "An office for the Web Dev business",
      completed: false,
    },
    {
      id: 4,
      project_name: "Choose a name for the business ",
      description: "Register a business name ",
      completed: false,
    },
    {
      id: 5,
      project_name: "Make a proposal to some Developers",
      description: "Share my dream and idea with some developers",
      completed: false,
    },
    {
      id: 6,
      project_name: "Teach my son how to ride Bicycle",
      description: "He's scare to learn but I have to push him",
      completed: false,
    },
    {
      id: 7,
      project_name: "Garage Sales",
      description:
        "Too much shoes, create space by disposing some via garage sales",
      completed: false,
    },
  ];

  await knex("projects").truncate();

  return knex("projects").insert(seedingData);
};
