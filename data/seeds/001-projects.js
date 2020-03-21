exports.seed = async function(knex) {
  // Deletes ALL existing entries

  const seedingData = [
    {
      name: " Web-Dev",
      descriptions:
        "Start a small web-development business also know as start up",
      completed: false,
    },
    {
      name: "Hire full stack engineer ",
      descriptions: "Hire web-development engineers",
      completed: false,
    },
    {
      name: "Secure an office near a tech location",
      descriptions: "the project description",
      completed: false,
    },
    {
      name: "Out-reach to clients ",
      descriptions: "Produce our first application or secure our first client",
      completed: false,
    },
    {
      name: "Go LLC",
      descriptions: "Adopt a Business name an marketing Strategy",
      completed: false,
    },
    {
      name: "Business is Booming",
      descriptions:
        "Keep expanding and research on latest technology and techniques",
      completed: false,
    },
    {
      name: "Marketing",
      descriptions:
        "Hire professionals marketer, establish a marketing strategy with the team",
      completed: false,
    },
  ];

  await knex("project").truncate();

  return knex("project").insert(seedingData);
};
