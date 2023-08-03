import { NextResponse, NextRequest } from "next/server";

const allowedParams = [
  "keyword",
  "countries",
  "location",
  "page",
  "education",
  "educationLevel",
  "accomodation",
  "experience",
  "salary",
  "jobType",
  "scholarshipType",
  "course",
];

export async function middleware(req) {
  // const country = req.geo.country

  const url = req.nextUrl;
  let changed = false;

  if (url.pathname.startsWith('/browse-work-visa-jobs')) {
    // This logic is only applied to /jobs
    url.searchParams.forEach((param, key) => {
      if (!allowedParams.includes(key)) {
        url.searchParams.delete(key);
        changed = true;
      }
    });
  
    if (changed) {
      return NextResponse.redirect(url);
    }
  }
  if (url.pathname.startsWith('/browse-student-visa-scholarships')) {
    // This logic is only applied to /student visa scholarships
    url.searchParams.forEach((param, key) => {
      if (!allowedParams.includes(key)) {
        url.searchParams.delete(key);
        changed = true;
      }
    });
  
    if (changed) {
      return NextResponse.redirect(url);
    }
  }

}

