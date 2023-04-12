import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import morgan from "morgan";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const corsOptions = {
  origin: ["http://localhost:5173", "https://co-quiz.netlify.app"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Create a new user
app.post("/users", async (req: Request, res: Response) => {
  try {
    const { username, phoneNumber, score, timing } = req.body;
    const newUser = await prisma.user.create({
      data: {
        username,
        phoneNumber,
        quizResult: {
          create: {
            score,
            timing,
          },
        },
      },
      include: {
        quizResult: true,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user", message: error });
  }
});

// Get all users
app.get("/users", async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        quizResult: true,
      },
    });
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Failed to get all users", message: error });
  }
});

// Update a user's quiz result
app.patch("/users/:id/quiz-result", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { score, timing } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        quizResult: {
          update: {
            score,
            timing,
          },
        },
      },
      include: {
        quizResult: true,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user's quiz result" });
  }
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
