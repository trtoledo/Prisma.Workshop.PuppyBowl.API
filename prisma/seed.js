const prisma = require(".");


const seed = async () => {
    const createPlayers = async () => {
        const players = [
          { 
            name: "Puppy 1",
            breed:"Mutt",
            status:"bench",
           },
          { 
            name: "Puppy 2",
            breed:"Doberman",
            status:"bench",
           },
          { 
            name: "Puppy 3",
            breed:"French Bulldog",
            status:"bench",
           },
          { 
            name: "Puppy 4",
            breed:"Labrador",
            status:"bench",
           },
          { 
            name: "Puppy 5",
            breed:"Dachshund",
            status:"bench",
           },
          { 
            name: "Puppy 6",
            breed:"Beagle",
            status:"bench",
           },
          { 
            name: "Puppy 7",
            breed:"Mutt",
            status:"bench",
           },
          { 
            name: "Puppy 8",
            breed:"Yorkshire Terrier",
            status:"bench",
           },
          { name: "Puppy 9",
            breed:"Rottweiler",
            status:"bench",
           },
          { 
            name: "Puppy 10",
            breed:"Mutt",
            status:"bench",
           },
        ];
        await prisma.player.createMany({ data: players });
    };
    await createPlayers();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

