import { NextResponse } from "next/server";

const user = true;

export const config = {
  matcher: ["/dashboard", "/services"],
};
export const middleware = (request) => {
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};
