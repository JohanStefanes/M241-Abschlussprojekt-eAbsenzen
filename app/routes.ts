import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("login", "routes/login.tsx"),
  route("logout", "routes/logout.tsx"),

  route("lernende", "routes/lernende.tsx"),
  route("lernende/absenz/:id", "routes/lernende.absenz.$id.tsx"),

  route("lehrperson", "routes/lehrperson.tsx"),
  route("lehrperson/absenz/:id", "routes/lehrperson.absenz.$id.tsx"),

  route("eltern", "routes/eltern.tsx"),
  route("eltern/absenz/:id", "routes/eltern.absenz.$id.tsx"),

  route("module", "routes/module.tsx"),
] satisfies RouteConfig;
