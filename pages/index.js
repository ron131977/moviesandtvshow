// import React from "react";
// import path from "path";
// import fs from "fs/promises";
// import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import SocialSharing from "../components/SocialSharing";
// import mainStyles from "@styles/styles.module.css";

// // Helper function to create a slug from a title
// function generateSlug(title) {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with dashes
//     .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
// }

// // Static props to fetch data from JSON files
// export async function getStaticProps() {
//   const categories = ["movies", "tvshow", "hindiDubbed", "adult"];
//   const allData = {};
//   let category = ""; // Declare category outside the loop

//   try {
//     for (category of categories) {
//       const filePath = path.join(process.cwd(), "public", `${category}.json`);
//       const jsonData = await fs.readFile(filePath, "utf-8");
//       const parsedData = JSON.parse(jsonData);

//       allData[category] = Array.isArray(parsedData) ? parsedData.slice(0, 5) : [];
//     }
//   } catch (error) {
//     console.error(`Error loading data for category ${category}:`, error);
//   }

//   return {
//     props: {
//       allData,
//     },
//   };
// }

// const soap2daySchema = JSON.stringify({
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "WebPage",
//       "@id": "https://moviesandtvshows.vercel.app/",
//       url: "https://moviesandtvshows.vercel.app/",
//       name: "Movies & Tv Shows™",
//       isPartOf: { "@id": "https://moviesandtvshows.vercel.app/#website" },
//       about: { "@id": "https://moviesandtvshows.vercel.app/#organization" },
//       primaryImageOfPage: {
//         "@id": "https://moviesandtvshows.vercel.app/#primaryimage",
//       },
//       image: { "@id": "https://moviesandtvshows.vercel.app/#primaryimage" },
//       thumbnailUrl: "https://moviesandtvshows.vercel.app/og_image.jpg",
//       datePublished: "2023-07-02T18:30:00+00:00",
//       dateModified: "2024-09-24T05:11:20+00:00",
//       breadcrumb: {
//         "@id": "https://moviesandtvshows.vercel.app/#breadcrumb",
//       },
//       inLanguage: "en-US",
//       potentialAction: [
//         {
//           "@type": "ReadAction",
//           target: ["https://moviesandtvshows.vercel.app/"],
//         },
//       ],
//     },
//     {
//       "@type": "ImageObject",
//       inLanguage: "en-US",
//       "@id": "https://moviesandtvshows.vercel.app/#primaryimage",
//       url: "https://moviesandtvshows.vercel.app/og_image.jpg",
//       contentUrl: "https://moviesandtvshows.vercel.app/og_image.jpg",
//       width: 1280,
//       height: 720,
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://moviesandtvshows.vercel.app/#breadcrumb",
//       itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
//     },
//     {
//       "@type": "WebSite",
//       "@id": "https://moviesandtvshows.vercel.app/#website",
//       url: "https://moviesandtvshows.vercel.app/",
//       name: "Movies & Tv Shows™",
//       description: "",
//       publisher: {
//         "@id": "https://moviesandtvshows.vercel.app/#organization",
//       },
//       potentialAction: [
//         {
//           "@type": "SearchAction",
//           target: {
//             "@type": "EntryPoint",
//             urlTemplate:
//               "https://moviesandtvshows.vercel.app/?s={search_term_string}",
//           },
//           "query-input": {
//             "@type": "PropertyValueSpecification",
//             valueRequired: true,
//             valueName: "search_term_string",
//           },
//         },
//       ],
//       inLanguage: "en-US",
//     },
//     {
//       "@type": "Organization",
//       "@id": "https://moviesandtvshows.vercel.app/#organization",
//       name: "Movies & Tv Shows™",
//       url: "https://moviesandtvshows.vercel.app/",
//       logo: {
//         "@type": "ImageObject",
//         inLanguage: "en-US",
//         "@id": "https://moviesandtvshows.vercel.app/#/schema/logo/image/",
//         url: "https://moviesandtvshows.vercel.app/logo.png",
//         contentUrl: "https://moviesandtvshows.vercel.app/logo.png",
//         width: 280,
//         height: 100,
//         caption: "Movies & Tv Shows™",
//       },
//       image: {
//         "@id": "https://moviesandtvshows.vercel.app/#/schema/logo/image/",
//       },
//     },
//   ],
// });
// // HomePage Component
// export default function HomePage({ allData }) {
//   return (
//     <>
//    <Head>
//   <title> Movies & Tv Shows™ - Online. Stream. Download.</title>

//   <link
//     rel="sitemap"
//     type="application/xml"
//     title="Sitemap"
//     href="https://moviesandtvshows.vercel.app/sitemap.xml"
//   />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//   <link
//     rel="apple-touch-icon"
//     sizes="180x180"
//     href="/apple-touch-icon.png"
//   />
//   <link
//     rel="icon"
//     type="image/png"
//     sizes="32x32"
//     href="/favicon-32x32.png"
//   />
//   <link
//     rel="icon"
//     type="image/png"
//     sizes="16x16"
//     href="/favicon-16x16.png"
//   />
//   <link rel="manifest" href="/site.webmanifest" />
//   <meta name="googlebot" content="index,follow" />
//   <meta name="revisit-after" content="1 days" />
//   <m eta name="referrer" content="origin" />
//   <meta
//     name="robots"
//     content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
//   />
//   <meta name="keywords" content="moviefree, movie free 2024, free movie, free tv shows, watch movie online, free movies online, free movie streaming, movie free streaming, download free" />
//   <meta
//     property="og:description"
//     content="Stream HD movies and TV series for free on Movies & Tv Shows™. Explore, stream, and download full-length movies and shows in HD quality without registration."
//   />
//   <meta
//     name="description"
//     content="Stream HD movies and TV series for free on Movies & Tv Shows™. Explore, stream, and download full-length movies and shows in HD quality without registration."
//   />
//   <link rel="canonical" href="https://moviesandtvshows.vercel.app/" />
//   <meta property="og:locale" content="en_US" />
//   <meta property="og:type" content="website" />
//   <meta
//     property="og:title"
//     content=" Movies & Tv Shows™ - Online. Stream. Download. "
//   />
//   <meta property="og:url" content="https://moviesandtvshows.vercel.app" />
//   <meta
//     property="og:site_name"
//     content=" Movies & Tv Shows™ - Online. Stream. Download. "
//   />
//   <meta
//     property="og:image"
//     content="https://moviesandtvshows.vercel.app/og_image.jpg"
//   />
//   <meta property="og:image:width" content="1200" />
//   <meta property="og:image:height" content="630" />
//   <meta property="og:image:type" content="image/jpg" />
//   <meta
//     name="application-name"
//     content=" Movies & Tv Shows™ - Online. Stream. Download. "
//   />
//   <meta
//     property="article:modified_time"
//     content="2024-01-01T13:13:13+00:00"
//   />
//   <link
//     rel="sitemap"
//     type="application/xml"
//     title="Sitemap"
//     href="https://moviesandtvshows.vercel.app/sitemap.xml"
//   />
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta
//     name="twitter:title"
//     content=" Movies & Tv Shows™ - Online. Stream. Download."
//   />
//   <meta
//     name="twitter:description"
//     content="Stream HD movies and TV series for free on Movies & Tv Shows™. Explore, stream, and download full-length movies and shows in HD quality without registration."
//   />
//   <meta
//     name="twitter:image"
//     content="https://moviesandtvshows.vercel.app/og_image.jpg"
//   />
//   <meta
//     name="google-site-verification"
//     content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg"
//   />

//   <meta
//     name="facebook-domain-verification"
//     content="du918bycikmo1jw78wcl9ih6ziphd7"
//   />
//   <meta
//     name="dailymotion-domain-verification"
//     content="dm3bs67ukdegz9qik"
//   />
//   <meta name="monetag" content="98a412cb5612b9188cd76b9744304b6c" />

//   <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{ __html: soap2daySchema }}
// />
// </Head>
//       <SocialSharing />
//       <div style={styles.container}>
//         {/* Hero Section */}
//         <header style={styles.hero}>
//           <div style={styles.heroImageContainer}>
//             <Image
//               src="/og_image.jpg"
//               alt="Hero Background"
//               objectFit="cover"
//               priority
//               width={1200}
//               height={750}
//               quality={90}
//               style={{
//                 filter: "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
//               }}
//             />
//           </div>
//           <div style={styles.heroTextContainer}>
//             <h1 style={styles.heroTitle}>Welcome to Movies & TV Shows™</h1>
//             <p style={styles.heroDescription}>
//               Online. Stream. Download. Your source for the latest updates across various categories.
//             </p>
//           </div>
//         </header>

//         {/* Categories Section */}
//         <div className="categories">
//           {Object.keys(allData).map((category) => (
//             <section
//               key={category}
//               className="category-section bg-gray-100 p-4 rounded-lg shadow-md"
//               style={{ marginBottom: "20px" }}
//             >
//               <h2
//                 className="category-title text-4xl font-semibold text-blue-500 mb-5 "
//                 style={{ textShadow: "3px 5px 5px #000", marginBottom: "20px" }}
//               >
//                 <Link href={`/${category}`} className="no-underline hover:no-underline">
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </Link>
//               </h2>
//               <div className="category-content flex flex-col gap-8">
//                 {allData[category].map((item, index) => (
//                   <div key={index} className="card bg-white p-4 rounded-lg shadow-md">
//                     <Link href={`/${category}/${generateSlug(item.title)}`} className="no-underline hover:no-underline">
//                       <div className="card-content flex flex-col md:flex-row gap-4">
//                         <img
//                           src={item.image1 || item.image}
//                           alt={item.title}
//                           className="card-image w-full md:w-32 h-auto md:h-20 object-cover rounded-lg mb-4 md:mb-0"
//                         />
//                         <div className="card-text">
//                           <h3
//                             className="card-title text-xl font-semibold mb-2"
//                             style={{
//                               textShadow: "1px 2px 1px #000",
//                               marginBottom: "20px",
//                               fontSize: "25px",
//                             }}
//                           >
//                             {item.title}
//                           </h3>
//                           <p className="card-description text-gray-600 text-base">{item.synopsis}</p>
//                         </div>
//                       </div>
//                     </Link>
//                     <small className="item-footer text-lg text-gray-500 mt-2 font-bold">
//                       Upload Date: {item.year}
//                     </small>
//                   </div>
//                 ))}
//               </div>
//               <Link href={`/${category}`} className="no-underline hover:no-underline">
//                 <div className="animate-pulse view-all text-red-500 text-2xl font-semibold mt-5">
//                   View All {category.charAt(0).toUpperCase() + category.slice(1)} Articles →
//                 </div>
//               </Link>
//             </section>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// // Styles for the page
// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//     color: "#333",
//   },
//   hero: {
//     position: "relative",
//     width: "100%",
//     height: "250px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//   },
//   heroImageContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: 1,
//   },
//   heroTextContainer: {
//     position: "relative",
//     zIndex: 2,
//     textAlign: "center",
//     color: "#fff",
//     padding: "10px",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     borderRadius: "10px",
//   },
//   heroTitle: {
//     fontSize: "2.5rem",
//     fontWeight: "800",
//     marginTop: "10px",
//     marginBottom: "5px",
//     textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
//   },
//   heroDescription: {
//     fontSize: "1rem",
//     fontWeight: "400",
//     textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
//   },
//   categories: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "40px",
//   },
//   categorySection: {
//     backgroundColor: "var(--section-bg-color)", // Dynamic section background
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)", // Subtle shadow
//   },
//   categoryTitle: {
//     fontSize: "2rem",
//     fontWeight: "600",
//     marginBottom: "20px",
//     color: "#007bff", // Blue color for category title
//   },
//   categoryContent: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "30px",
//   },
//   card: {
//     backgroundColor: "var(--card-bg-color)", // Dynamic card background
//     padding: "15px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for cards
//     overflow: "hidden",
//   },
//   cardContent: {
//     display: "flex",
//     gap: "20px",
//   },
//   cardImage: {
//     width: "120px",
//     height: "80px",
//     objectFit: "cover",
//     borderRadius: "8px",
//   },
//   cardText: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardTitle: {
//     fontSize: "1.25rem",
//     fontWeight: "600",
//     margin: "0 0 10px",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "#666", // Grey color for descriptions
//   },
//   itemFooter: {
//     fontSize: "0.9rem",
//     color: "#777", // Slightly lighter grey for footer text
//     marginTop: "10px",
//     textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
//   },
//   viewAll: {
//     fontSize: "1rem",
//     fontWeight: "600",
//     color: "#007bff", // Blue color for "view all" link
//     textDecoration: "none",
//     marginTop: "20px",
//   },
//   // Media Query for Responsive Layout
//   '@media (max-width: 768px)': {
//     container: {
//       padding: "10px",
//     },
//     hero: {
//       height: "200px",
//     },
//     card: {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     cardImage: {
//       width: "100%",
//       height: "auto",
//     },
//     cardContent: {
//       padding: "10px",
//       textAlign: "center",
//     },
//     heroTextContainer: {
//       padding: "15px",
//     },
//   },
// };




import React from "react";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SocialSharing from "../components/SocialSharing";

// Utility function to generate slugs for the title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Static props to load data for categories
export async function getStaticProps() {
  const categories = ["movies", "tvshow", "hindiDubbed", "adult"];
  const allData = {};

  try {
    for (const category of categories) {
      const filePath = path.join(process.cwd(), "public", `${category}.json`);
      const jsonData = await fs.readFile(filePath, "utf-8");
      const parsedData = JSON.parse(jsonData);

      allData[category] = Array.isArray(parsedData)
        ? parsedData.slice(0, 8)
        : [];
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }

  return {
    props: {
      allData,
    },
  };
}

// JSON-LD Schema for SEO
const soap2daySchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://moviesandtvshows.vercel.app/",
      url: "https://moviesandtvshows.vercel.app/",
      name: "Movies & Tv Shows™",
      isPartOf: { "@id": "https://moviesandtvshows.vercel.app/#website" },
      about: { "@id": "https://moviesandtvshows.vercel.app/#organization" },
      primaryImageOfPage: {
        "@id": "https://moviesandtvshows.vercel.app/#primaryimage",
      },
      image: { "@id": "https://moviesandtvshows.vercel.app/#primaryimage" },
      thumbnailUrl: "https://moviesandtvshows.vercel.app/og_image.jpg",
      datePublished: "2023-07-02T18:30:00+00:00",
      dateModified: "2024-09-24T05:11:20+00:00",
      breadcrumb: {
        "@id": "https://moviesandtvshows.vercel.app/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://moviesandtvshows.vercel.app/"],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://moviesandtvshows.vercel.app/#primaryimage",
      url: "https://moviesandtvshows.vercel.app/og_image.jpg",
      contentUrl: "https://moviesandtvshows.vercel.app/og_image.jpg",
      width: 1280,
      height: 720,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://moviesandtvshows.vercel.app/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
    },
    {
      "@type": "WebSite",
      "@id": "https://moviesandtvshows.vercel.app/#website",
      url: "https://moviesandtvshows.vercel.app/",
      name: "Movies & Tv Shows™",
      description: "",
      publisher: {
        "@id": "https://moviesandtvshows.vercel.app/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://moviesandtvshows.vercel.app/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://moviesandtvshows.vercel.app/#organization",
      name: "Movies & Tv Shows™",
      url: "https://moviesandtvshows.vercel.app/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://moviesandtvshows.vercel.app/#/schema/logo/image/",
        url: "https://moviesandtvshows.vercel.app/logo.png",
        contentUrl: "https://moviesandtvshows.vercel.app/logo.png",
        width: 280,
        height: 100,
        caption: "Movies & Tv Shows™",
      },
      image: {
        "@id": "https://moviesandtvshows.vercel.app/#/schema/logo/image/",
      },
    },
  ],
});

// Main HomePage Component
export default function HomePage({ allData }) {
  return (
    <>
      <Head>
        <title>Movies & Tv Shows™ - Online. Stream. Download.</title>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://moviesandtvshows.vercel.app/sitemap.xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Stream HD movies and TV series for free on Movies & Tv Shows™. Explore, stream, and download full-length movies and shows in HD quality without registration."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: soap2daySchema }}
        />
      </Head>
      <SocialSharing />
      <div className="container mx-auto px-4 py-6">
        <header className="hero text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white p-10">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold">Welcome to Movies & TV Shows™</h1>
            <p className="text-lg">
              Online. Stream. Download. Your source for the latest updates
              across various categories.
            </p>
          </div>
        </header>

        <main>
          {Object.keys(allData).map((category) => (
            <section key={category} className="category-section mb-12">
              <h2
                className="text-4xl font-semibold mb-4"
                style={{ textShadow: "2px 1px 2px #000" }}
              >
                <Link
                  href={`/${category}`}
                  className="text-blue-500 hover:no-underline font-bold"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </h2>
              <div className="category-content grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {allData[category].map((item, index) => (
                  <div
                    key={index}
                    className="card bg-white p-4 rounded-lg shadow-lg"
                  >
                    <Link
                      href={`/${category}/${generateSlug(item.title)}`}
                      className="hover:no-underline"
                    >
                      <div className="card-content flex flex-col justify-between h-full">
                        <div className="card-text mb-4">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="text-sm font-bold text-black line-clamp-3">
                            {item.synopsis}
                          </p>
                          <div className="item-footer text-xs font-semibold text-black mt-2">
                            <span>Year: {item.year}</span> |{" "}
                            <span>Language: {item.language}</span>
                          </div>
                        </div>

                        <div className="image-container">
                          <Image
                            src={item.image1 || item.image}
                            alt={item.title}
                            width={0}  // Set to 0 to allow responsiveness
                            height={0} // Set to 0 to allow responsiveness
                            layout="responsive"  // Make image responsive
                            priority={index === 0}
                            quality={90}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <Link
                href={`/${category}`}
                className="view-all text-center block text-blue-500 font-semibold mt-6 hover:no-underline"
              >
                View All {category}
              </Link>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
// import React, { useState, useEffect } from "react";
// import path from "path";
// import fs from "fs/promises";
// import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import SocialSharing from "../components/SocialSharing";

// import mainStyles from "@styles/styles.module.css";
// // Helper function to create a slug from a title
// function generateSlug(title) {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with dashes
//     .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
// }

// export async function getStaticProps() {
//   const categories = [
//    "movies",
//    "tvshow",
//    "hindiDubbed",
//    "adult"
//   ];
//   const allData = {};
//   let category = ""; // Declare category outside the loop

//   try {
//     for (category of categories) { // Assign value to category here
//       const filePath = path.join(process.cwd(), "public", `${category}.json`);
//       const jsonData = await fs.readFile(filePath, "utf-8");
//       const parsedData = JSON.parse(jsonData);

//       allData[category] = Array.isArray(parsedData) ? parsedData.slice(0, 5) : [];
//     }
//   } catch (error) {
//     console.error(`Error loading data for category ${category}:`, error); // category will be accessible here
//   }

//   return {
//     props: {
//       allData,
//     },
//   };
// }

// const soap2daySchema = JSON.stringify({
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "WebPage",
//       "@id": "https://moviesandtvshows.vercel.app/",
//       url: "https://moviesandtvshows.vercel.app/",
//       name: "Movies & Tv Shows™",
//       isPartOf: { "@id": "https://moviesandtvshows.vercel.app/#website" },
//       about: { "@id": "https://moviesandtvshows.vercel.app/#organization" },
//       primaryImageOfPage: {
//         "@id": "https://moviesandtvshows.vercel.app/#primaryimage",
//       },
//       image: { "@id": "https://moviesandtvshows.vercel.app/#primaryimage" },
//       thumbnailUrl: "https://moviesandtvshows.vercel.app/og_image.jpg",
//       datePublished: "2023-07-02T18:30:00+00:00",
//       dateModified: "2024-09-24T05:11:20+00:00",
//       breadcrumb: {
//         "@id": "https://moviesandtvshows.vercel.app/#breadcrumb",
//       },
//       inLanguage: "en-US",
//       potentialAction: [
//         {
//           "@type": "ReadAction",
//           target: ["https://moviesandtvshows.vercel.app/"],
//         },
//       ],
//     },
//     {
//       "@type": "ImageObject",
//       inLanguage: "en-US",
//       "@id": "https://moviesandtvshows.vercel.app/#primaryimage",
//       url: "https://moviesandtvshows.vercel.app/og_image.jpg",
//       contentUrl: "https://moviesandtvshows.vercel.app/og_image.jpg",
//       width: 1280,
//       height: 720,
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://moviesandtvshows.vercel.app/#breadcrumb",
//       itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
//     },
//     {
//       "@type": "WebSite",
//       "@id": "https://moviesandtvshows.vercel.app/#website",
//       url: "https://moviesandtvshows.vercel.app/",
//       name: "Movies & Tv Shows™",
//       description: "",
//       publisher: {
//         "@id": "https://moviesandtvshows.vercel.app/#organization",
//       },
//       potentialAction: [
//         {
//           "@type": "SearchAction",
//           target: {
//             "@type": "EntryPoint",
//             urlTemplate:
//               "https://moviesandtvshows.vercel.app/?s={search_term_string}",
//           },
//           "query-input": {
//             "@type": "PropertyValueSpecification",
//             valueRequired: true,
//             valueName: "search_term_string",
//           },
//         },
//       ],
//       inLanguage: "en-US",
//     },
//     {
//       "@type": "Organization",
//       "@id": "https://moviesandtvshows.vercel.app/#organization",
//       name: "Movies & Tv Shows™",
//       url: "https://moviesandtvshows.vercel.app/",
//       logo: {
//         "@type": "ImageObject",
//         inLanguage: "en-US",
//         "@id": "https://moviesandtvshows.vercel.app/#/schema/logo/image/",
//         url: "https://moviesandtvshows.vercel.app/logo.png",
//         contentUrl: "https://moviesandtvshows.vercel.app/logo.png",
//         width: 280,
//         height: 100,
//         caption: "Movies & Tv Shows™",
//       },
//       image: {
//         "@id": "https://moviesandtvshows.vercel.app/#/schema/logo/image/",
//       },
//     },
//   ],
// });

// export default function HomePage({ allData }) {

//   return (
//     <>
//     <Head>
//     <title> Movies & Tv Shows™ - Online. Stream. Download.</title>

//     <link
//       rel="sitemap"
//       type="application/xml"
//       title="Sitemap"
//       href="https://moviesandtvshows.vercel.app/sitemap.xml"
//     />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//     <link
//       rel="apple-touch-icon"
//       sizes="180x180"
//       href="/apple-touch-icon.png"
//     />
//     <link
//       rel="icon"
//       type="image/png"
//       sizes="32x32"
//       href="/favicon-32x32.png"
//     />
//     <link
//       rel="icon"
//       type="image/png"
//       sizes="16x16"
//       href="/favicon-16x16.png"
//     />
//     <link rel="manifest" href="/site.webmanifest" />
//     <meta name="googlebot" content="index,follow" />
//     <meta name="revisit-after" content="1 days" />
//     <meta name="referrer" content="origin" />
//     <meta
//       name="robots"
//       content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
//     />
//     <meta name="keywords" content="moviefree, movie free 2024, free movie, free tv shows, watch movie online, free movies online, free movie streaming, movie free streaming, download free" />
//     <meta
//       property="og:description"
//       content="Stream HD movies and TV series for free on Movies & Tv Shows™. Explore, stream, and download full-length movies and shows in HD quality without registration."
//     />
//     <meta
//       name="description"
//       content="Stream HD movies and TV series for free on Movies & Tv Shows™. Explore, stream, and download full-length movies and shows in HD quality without registration."
//     />
//     <link rel="canonical" href="https://moviesandtvshows.vercel.app/" />
//     <meta property="og:locale" content="en_US" />
//     <meta property="og:type" content="website" />
//     <meta
//       property="og:title"
//       content=" Movies & Tv Shows™ - Online. Stream. Download. "
//     />
//     <meta property="og:url" content="https://moviesandtvshows.vercel.app" />
//     <meta
//       property="og:site_name"
//       content=" Movies & Tv Shows™ - Online. Stream. Download. "
//     />
//     <meta
//       property="og:image"
//       content="https://moviesandtvshows.vercel.app/og_image.jpg"
//     />
//     <meta property="og:image:width" content="1200" />
//     <meta property="og:image:height" content="630" />
//     <meta property="og:image:type" content="image/jpg" />
//     <meta
//       name="application-name"
//       content=" Movies & Tv Shows™ - Online. Stream. Download. "
//     />
//     <meta
//       property="article:modified_time"
//       content="2024-01-01T13:13:13+00:00"
//     />
//     <link
//       rel="sitemap"
//       type="application/xml"
//       title="Sitemap"
//       href="https://moviesandtvshows.vercel.app/sitemap.xml"
//     />
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta
//       name="twitter:title"
//       content=" Movies & Tv Shows™ - Online. Stream. Download."
//     />
//     <meta
//       name="twitter:description"
//       content="Stream HD movies and TV series for free on Movies & Tv Shows™. Explore, stream, and download full-length movies and shows in HD quality without registration."
//     />
//     <meta
//       name="twitter:image"
//       content="https://moviesandtvshows.vercel.app/og_image.jpg"
//     />
//     <meta name="google-site-verification" content="4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k" />

//     <meta
//       name="facebook-domain-verification"
//       content="du918bycikmo1jw78wcl9ih6ziphd7"
//     />
//     <meta
//       name="dailymotion-domain-verification"
//       content="dm3bs67ukdegz9qik"
//     />
//     <meta name="monetag" content="98a412cb5612b9188cd76b9744304b6c" />
//     <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: soap2daySchema }}
//   />

//   </Head>
//   <SocialSharing />
//   <div style={styles.container}>

//   <header style={styles.hero}>
//     <div style={styles.heroImageContainer}>
//     <Image
//         src="/og_image.jpg"
//         alt="Hero Background"
//         // layout="fill"
//         objectFit="cover"
//         priority // Prioritize loading this image
//         width={1200} // Adjust the width according to your needs
//         height={750} // Adjust the height according to your needs
//         quality={90}
//         style={{
//           // height: "200px",
//           // width: "100%",
//           // objectFit: "cover",

//           filter:
//           "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
//         }}
//         // className="w-full sm:w-32 sm:h-20 rounded-md mb-4 sm:mb-0"
//       />
//     </div>
//   <div style={styles.heroTextContainer}>
//     <h1 style={styles.heroTitle}>Welcome to Movies & Tv Shows™</h1>
//     <p style={styles.heroDescription}>
//       Online. Stream. Download. Your source for the latest updates across various categories.
//     </p>
//   </div>
// </header>

//      <div className="categories">
//  {Object.keys(allData).map((category) => (
//    <section key={category} className="category-section bg-gray-100 p-4 rounded-lg shadow-md"  style={{ marginBottom: "20px",}}>
//      <h2 className="category-title text-4xl font-semibold text-blue-500 mb-5"
//        style={{ textShadow: "3px 5px 5px #000", marginBottom:'20px'}}>
//        <Link href={`/${category}`} className="no-underline hover:no-underline">
//          {category.charAt(0).toUpperCase() + category.slice(1)}
//        </Link>
//      </h2>
//      <div className="category-content flex flex-col gap-8">
//        {allData[category].map((item, index) => (
//          <div key={index} className="card bg-white p-4 rounded-lg shadow-md">
//            <Link href={`/${category}/${generateSlug(item.title)}`} className="no-underline hover:no-underline">
//              <div className="card-content flex flex-col md:flex-row gap-4">
//                <img
//                  src={item.image1 || item.image}
//                  alt={item.title}
//                  className="card-image w-full md:w-32 h-auto md:h-20 object-cover rounded-lg mb-4 md:mb-0"
//                />
//                <div className="card-text">
//                  <h3 className="card-title text-xl font-semibold mb-2"
//                    style={{ textShadow: "1px 2px 1px #000", marginBottom: "20px", fontSize:"25px" }}
//                  >{item.title}</h3>
//                  <p className="card-description text-gray-600 text-base">
//                            {item.synopsis}
//                          </p>
//                </div>
//              </div>
//            </Link>
//            <small className="item-footer text-sm text-gray-500 mt-2">
//              {/* {item.date} - {item.time} | Courtesy: {item.courtesy} */}
//              Upload Date: {item.year}
//            </small>
//          </div>
//        ))}
//      </div>
//      <Link href={`/${category}`} className="no-underline hover:no-underline">
//            <div className="animate-pulse view-all text-red-500 text-2xl font-semibold mt-5 ">View All  {category.charAt(0).toUpperCase() + category.slice(1)} Articles →</div>
//      </Link>
//    </section>
//  ))}
// </div>

//      </div>
//    </>
//  );
// }

// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//     color: "#333",
//   },
//   // hero: {
//   //   display: "flex",
//   //   flexDirection: "column",
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   //   // minHeight: "100vh", // Full viewport height for the hero section
//   //   backgroundImage: "url(https://moviesandtvshows.vercel.app/og_image.jpg)", // Background image
//   //   backgroundSize: "cover", // Make the image cover the entire area
//   //   backgroundPosition: "center", // Center the image
//   //   backgroundRepeat: "no-repeat", // Prevent image repetition
//   //   color: "#fff", // White text for readability
//   //   textAlign: "center", // Center align text
//   //   padding: "20px", // Add padding for spacing
//   //   boxSizing: "border-box", // Include padding in element's total width/height
//   // },

//   // Optional: Responsive tweaks for smaller screens
//   "@media (max-width: 768px)": {
//     hero: {
//       padding: "15px", // Adjust padding for smaller screens
//       backgroundPosition: "top", // Focus on the top part of the image
//     },
//   },

//   hero: {
//     position: "relative",
//     width: "100%",
//     height: "250px", // Reduced height for the hero section
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//   },
//   heroImageContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: 1,
//   },
//   heroTextContainer: {
//     position: "relative",
//     zIndex: 2,
//     textAlign: "center",
//     color: "#fff",
//     padding: "10px",
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
//     borderRadius: "10px",
//   },
//   heroTitle: {
//     fontSize: "2.5rem",
//     fontWeight: "800",
//     marginTop: "10px",
//     marginBottom: "5px",
//     textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
//   },
//   heroDescription: {
//     fontSize: "1rem",
//     fontWeight: "400",
//     textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
//   },
//   categories: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "40px",
//   },
//   categorySection: {
//     backgroundColor: "var(--section-bg-color)", // Dynamic section background
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)", // Subtle shadow
//   },
//   categoryTitle: {
//     fontSize: "2rem",
//     fontWeight: "600",
//     marginBottom: "20px",
//     color: "#007bff", // Blue color for category title

//   },
//   categoryContent: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "30px",
//   },
//   card: {
//     backgroundColor: "var(--card-bg-color)", // Dynamic card background
//     padding: "15px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for cards
//     overflow: "hidden",
//   },
//   cardContent: {
//     display: "flex",
//     gap: "20px",
//   },
//   cardImage: {
//     width: "120px",
//     height: "80px",
//     objectFit: "cover",
//     borderRadius: "8px",
//   },
//   cardText: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardTitle: {
//     fontSize: "1.25rem",
//     fontWeight: "600",
//     margin: "0 0 10px",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "#666", // Grey color for descriptions
//   },
//   itemFooter: {
//     fontSize: "0.9rem",
//     color: "#777", // Slightly lighter grey for footer text
//     marginTop: "10px",
//   },
//   viewAll: {
//     fontSize: "1rem",
//     fontWeight: "600",
//     color: "#007bff", // Blue color for "view all" link
//     textDecoration: "none",
//     marginTop: "20px",
//   },
// };
