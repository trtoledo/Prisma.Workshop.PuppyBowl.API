const express = require("express");
const app = express();
const prisma = require("./prisma");
app.use(express.json());
app.use(require("morgan")("dev"));

const PORT = 3000;

app.get("/api/players", async (req, res, next) => {
    try {
      const players = await prisma.player.findMany();
      res.json(players);
    } catch {
      next();
    }
  });
    
    app.post("/api/players", async (req, res, next) => {
      try {
        const { name, breed, status } = req.body;
        if (!name) {
          const error = {
            status: 400,
            message: "Puppy must have a name.",
          };
          return next(error);
        }
        const player = await prisma.player.create({ 
            data: { name, breed, status } });
        res.status(201).json(player);   
    } catch (error) {
        next(error);
    }
  });

  app.get("/api/players/:id", async (req, res, next) =>{
    try {
        const {id} = req.params;
        const player = await prisma.player.findUnique({
                where: {id : +id}
        })
        res.json(player);
    } catch (error) {
        next(error);
    }
  });

  app.put("/api/players/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
        const player = await prisma.player.update({
            where: {id : +id},
            data: {status},
        })
        res.json(player);

    } catch (error) {
        next(error);
    }
  });

  app.delete("/api/players/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        await prisma.player.delete({
            where: {id : +id},

            })
            res.json("Puppy deleted!")
    } catch (error) {
        next(error);
    }
  })

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });

