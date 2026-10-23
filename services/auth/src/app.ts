import express from 'express';

const app = express();

// Built-in middlewares to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Health check endpoint for microservice monitoring
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK", service: "auth-service" });
});

export default app;