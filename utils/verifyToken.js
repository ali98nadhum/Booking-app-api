import jwt from "jsonwebtoken";
import {creteError } from "./error.js"; // تصحيح اسم الدالة

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(creteError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) return next(creteError(403, "Token is not valid"));
        req.user = user;
        next();
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
            next();
        } else {
            return next(creteError(401, "You are not authorized!"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            return next(creteError(403, "You are not an admin or not authorized"));
        }
    });
};
