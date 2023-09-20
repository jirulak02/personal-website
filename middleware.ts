// import { NextRequest, NextResponse } from "next/server";
import { next, rewrite } from "@vercel/edge";

export const config = {
  matcher: ["/", "/hobbies"],
};

export function middleware(req: Request) {
  const basicAuth = req.headers.get("authorization");
  const url = new URL(req.url);

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user === "4dmin" && pwd === "testpwd123") {
      return next();
    }
  }
  url.pathname = "/api/auth";

  return rewrite(url);
}
