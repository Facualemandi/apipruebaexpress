import express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controllers.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const router = express.Router();

router.post(
  "/login",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Mínimo 6 caracteres").trim().isLength({ min: 6 }),
  ],
  validateAuth,
  login
);

router.post(
  "/register",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Mínimo 6 caracteres").trim().isLength({ min: 6 }),
    body("password", "Formato de password incorrecta").custom(
      (value, { req }) => {
        if (value !== req.body.repasword) {
          throw new Error("Las contraseñas no coinciden");
        }
        return value;
      }
    ),
  ],
  validateAuth,
  register
);

export default router;
