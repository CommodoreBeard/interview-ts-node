"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
const queryClient = (0, postgres_1.default)("postgres://postgres:mysecretpassword@0.0.0.0:5432/sales");
exports.db = (0, postgres_js_1.drizzle)(queryClient);
