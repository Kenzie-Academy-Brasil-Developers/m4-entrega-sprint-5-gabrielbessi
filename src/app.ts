import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleError from "./errors/handleError";
import userRoutes from "./routers/users.routers";
import loginRouter from "./routers/login.routers";
import categoryRouter from "./routers/categories.routers";
import propertiesRouter from "./routers/properties.routers";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRouter);
app.use("/categories", categoryRouter);
app.use("/properties", propertiesRouter);

app.use(handleError);

export default app;
