// import { NextResponse} from "next/server";

// const allowedParams = [
//   "keyword",
//   "countries",
//   "location",
//   "page",
//   "education",
//   "educationLevel",
//   "accomodation",
//   "experience",
//   "salary",
//   "jobType",
//   "scholarshipType",
//   "course",
// ];


// export async function middleware(req) {
//   // Only run this middleware logic on the client-side (browser)
//   if (typeof window !== "undefined") {
//     // You can access req.nextUrl here since it's client-side code

//     const url = req.nextUrl;
//     let changed = false;

//     if (url.pathname.startsWith("/browse-work-visa-jobs")) {
//       // This logic is only applied to /jobs
//       url.searchParams.forEach((param, key) => {
//         if (!allowedParams.includes(key)) {
//           url.searchParams.delete(key);
//           changed = true;
//         }
//       });

//       if (changed) {
//         return NextResponse.redirect(url);
//       }
//     }

//     if (url.pathname.startsWith("/browse-student-visa-scholarships")) {
//       // This logic is only applied to /student visa scholarships
//       url.searchParams.forEach((param, key) => {
//         if (!allowedParams.includes(key)) {
//           url.searchParams.delete(key);
//           changed = true;
//         }
//       });

//       if (changed) {
//         return NextResponse.redirect(url);
//       }
//     }
//   }

//   // If the code reaches this point, it means it's server-side rendering
//   // or the middleware logic didn't apply, and you can return `null` or continue the request processing.
//   return null;
// }


// // export async function middleware(req) {
// //   // const country = req.geo.country

// //   const url = req.nextUrl;
// //   let changed = false;

// //   if (url.pathname.startsWith('/browse-work-visa-jobs')) {
// //     // This logic is only applied to /jobs
// //     url.searchParams.forEach((param, key) => {
// //       if (!allowedParams.includes(key)) {
// //         url.searchParams.delete(key);
// //         changed = true;
// //       }
// //     });
  
// //     if (changed) {
// //       return NextResponse.redirect(url);
// //     }
// //   }
// //   if (url.pathname.startsWith('/browse-student-visa-scholarships')) {
// //     // This logic is only applied to /student visa scholarships
// //     url.searchParams.forEach((param, key) => {
// //       if (!allowedParams.includes(key)) {
// //         url.searchParams.delete(key);
// //         changed = true;
// //       }
// //     });
  
// //     if (changed) {
// //       return NextResponse.redirect(url);
// //     }
// //   }

// // }

