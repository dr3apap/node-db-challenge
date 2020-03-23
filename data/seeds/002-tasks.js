exports.seed = async function(knex) {
  const taskData = [
    {
      project_id: 1,

      description:
        "Get a group of developer and software engineers to team up and start a developing business",
      completed: false,
    },
    {
      project_id: 2,

      description:
        "Design anyy native application from scratch, deploy it and make it an open source",
      notes:
        "Maybe after lab I will have some free time or muscle out some time soon",
      completed: false,
    },
    {
      project_id: 3,

      description: "Find a good reactor and good loan officer",
      notes: "office have to be around tech area ",
      completed: false,
    },
    {
      project_id: 4,

      description: "Get a lawyer to secure a LLC name for the business",
      notes: "search online",
      completed: false,
    },
    {
      project_id: 5,

      description: "Go to meet up, conferences and online forum",
      notes: "No idea is bad,No won't kill either",
      completed: false,
    },
    {
      project_id: 6,

      description: "Convince him and make him believe he can",
      notes: "I may have to muscle him to do it",
      completed: false,
    },
    {
      project_id: 7,

      description: "Conduct a sneaker garage sales for sneaker heads like me",
      notes: "Have to be charming funny",
      completed: false,
    },
  ];

  await knex("tasks").truncate();

  return knex("tasks").insert(taskData);
};
