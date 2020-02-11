exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dummyTable")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dummyTable").insert([
        { name: "Shiney" },
        { name: "Beyonce" },
        { name: "Maya" }
      ]);
    });
};
