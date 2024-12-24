import {NextResponse, type NextRequest} from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (
    token &&
    (request.nextUrl.pathname === "/auth" ||
      request.nextUrl.pathname === "/auth/register")
  ) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (!token && request.nextUrl.pathname === "/gallery") {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  } else if (!token && request.nextUrl.pathname === "/latestNews") {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }
}
