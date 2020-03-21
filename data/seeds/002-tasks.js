exports.seed = async function(knex) {
  const taskData = [
    {
      user_id: 1,

      descriptions: "Get a business off the ground ",
      notes: "Good feeling",
      completed: false,
    },
    {
      user_id: 2,

      descriptions: "Hire an hr Personel to conduct the recruitment",
      notes: "Let professional handle this",
      completed: false,
    },
    {
      user_id: 3,

      descriptions: "Good location for business",
      notes: "Have to be Tech Area ",
      completed: false,
    },
    {
      user_id: 4,

      descriptions: "Galvanize investors",
      notes: "Social meet up",
      completed: false,
    },
    {
      user_id: 5,

      descriptions: "Good business lawyer with vision",
      notes: "That's me",
      completed: false,
    },
    {
      user_id: 6,

      descriptions: "Need a bigger space",
      notes: "Secure and open space",
      completed: false,
    },
    {
      user_id: 7,

      descriptions: "Best marketing plots",
      notes: "must be charming and can communicate",
      completed: false,
    },
  ];

  await knex("tasks").truncate();

  return knex("tasks").insert(taskData);
};
