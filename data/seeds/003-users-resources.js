exports.seed = async function(knex) {
  const resources = [
    {
      project_id: 1,
      first_name: "Jerry",
      last_name: "Ghana",
      description: "HR Manager",
    },
    {
      project_id: 2,
      first_name: "Luis",
      last_name: "Hernandez",
      description: "Web Dev senior consultant",
    },
    {
      project_id: 3,
      first_name: "ESq.Donald",
      last_name: "Mcguire",
      description: "Attorney",
    },
    {
      project_id: 4,
      first_name: "Moses",
      last_name: "Phillip",
      description: "HR Manager",
    },
    {
      project_id: 5,
      first_name: "Cristina",
      last_name: "Gomez",
      description: "Realtor",
    },
    {
      project_id: 6,
      first_name: "Dele",
      last_name: "Ojo",
      description: "Senior Marketer and consultant",
    },
    {
      project_id: 7,
      first_name: "Andrew",
      last_name: "David",
      description: "Investor",
    },
  ];

  await knex("users").truncate();

  return knex("users").insert(resources);
};
