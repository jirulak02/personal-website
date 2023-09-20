import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/hobbies"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user === "4dmin" && pwd === "testpwd123") {
      return NextResponse.next();
    }
  }
  url.pathname = "/contact";

  return NextResponse.rewrite(url);
}
