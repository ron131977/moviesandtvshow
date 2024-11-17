import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "@styles/styles.module.css";
import SocialSharing from "../components/SocialSharing";
import VideoPlayerAds from "../components/VideoPlayerAds";
import SearchComponent from "../components/SearchComponent";
// Importing JSON data directly
import movies from "../public/movies.json"; // Replace with correct path
import tvShows from "../public/tvshow.json"; // Replace with correct path
import adultMovies from "../public/adult.json"; // Replace with correct path

export default function Home() {
  const [activeTab, setActiveTab] = useState("movies");
  const [moviePage, setMoviePage] = useState(1);
  const [adultPage, setAdultPage] = useState(1);
  const [tvShowPage, setTvShowPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const itemsPerPage = 30;
  const [tvshow, setTvshow] = useState(null); // Or get it from an API or other state

  const regularMovies = movies.filter(
    (movie) => !movie.badge || !movie.badge.includes("[ Adult ]")
  );

  // Function to get paginated items
  const getPaginatedItems = (items, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  useEffect(() => {
    // Fetch tvshow data or set it somehow
    setTvshow({
      badge: "TV Show", // Example data
      // other properties...
    });
  }, []);

  const handleImageClick = (item) => {
    setPopupContent(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  const adTagUrl =
    "https://raw.githubusercontent.com/veigasjeff/video-ads/main/vast1.xml"; // VAST ad tag URL
  const [randommovies, setRandommovies] = useState([]);

  const isTVShow = popupContent && popupContent.type === "TV"; // Update based on your JSON structure
  const isAdult = popupContent && popupContent.isAdult === true; // Update based on your JSON structure

  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const { videomovieitem, videomovies, image1, dailymovies, dailytvshow } =
    popupContent || {};

  const isMovies =
    videomovies && videomovies[0] && videomovies[0].includes("/");

  const currentVideoId = videomovieitem
    ? videomovieitem[currentEpisodeIndex]
    : "";
  const currentVideoData =
    videomovies && videomovies[currentEpisodeIndex]
      ? videomovies[currentEpisodeIndex]
      : {};
   
  const episode = isMovies ? currentVideoData.episode || 1 : null;
  const season = isMovies ? currentVideoData.season || 1 : null;

  const videoSources = videomovies
    ? videomovies.map((item) => {
        const isItemMovies = item.includes("/");
        const [id, itemSeason, itemEpisode] = isItemMovies
          ? item.split("/")
          : [item, null, null];

        // TV Show daily URL
        const dailyTvShowUrl = isItemMovies
          ? `https://geo.dailymotion.com/player/xjrxe.html?video=${dailytvshow[currentEpisodeIndex]}&mute=true&Autoquality=1080p`
          : null;

        // Movie daily URL (for a single dailymovies string)
        const dailyMovieUrl =
          !isItemMovies && dailymovies
            ? `https://geo.dailymotion.com/player/xjrxe.html?video=${dailymovies}&mute=true&Autoquality=1080p`
            : null;

        return {
          name: isItemMovies ? `Episode ${itemEpisode}` : "Movie",
          urls: [
            `https://short.ink/${currentVideoId}?thumbnail=${image1}`,
            // dailyTvShowUrl, // URL for TV Show only
            // dailyMovieUrl, // URL for Movie only
            isItemMovies ? dailyTvShowUrl : dailyMovieUrl, // This correctly switches between the TV show and movie URLs
            isItemMovies
              ? `https://vidsrc.me/embed/tv?imdb=${id}&season=${itemSeason}&episode=${itemEpisode}`
              : `https://vidsrc.me/embed/movie?imdb=${id}`,
            isItemMovies
              ? `https://embed.su/embed/tv/${id}/${itemSeason}/${itemEpisode}`
              : `https://embed.su/embed/movie/${id}`,
            isItemMovies
              ? `https://vidsrc.cc/v2/embed/tv/${id}/${itemSeason}/${itemEpisode}`
              : `https://vidsrc.cc/v2/embed/movie/${id}`,
            isItemMovies
              ? `https://ffmovies.lol/series/?imdb=${id}`
              : `https://ffmovies.lol/movies/?imdb=${id}`,
            isItemMovies
              ? `https://autoembed.co/tv/imdb/${id}-${itemSeason}-${itemEpisode}`
              : `https://autoembed.co/movie/imdb/${id}`,
            isItemMovies
              ? `https://multiembed.mov/directstream.php?video_id=${id}&s=${itemSeason}&e=${itemEpisode}`
              : `https://multiembed.mov/directstream.php?video_id=${id}`,
          ],
        };
      })
    : [];

  const currentVideoSources =
    videoSources && videoSources[currentEpisodeIndex]
      ? videoSources[currentEpisodeIndex].urls
      : [];
  const src = currentVideoSources[currentPlayerIndex] || "";

  const handlePlayerSelect = (index) => {
    setCurrentPlayerIndex(index);
  };

  // Handle previous episode
  const handlePreviousEpisode = () => {
    setCurrentEpisodeIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Prevent going below 0
  };

  // Handle next episode
  const handleNextEpisode = () => {
    setCurrentEpisodeIndex((prevIndex) => prevIndex + 1); // Simply increment the episode index
  };

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

  return (
    <div>
      <Head>
        <title>Movies & Tv Shows™ - Explore. Discover. Online.</title>

        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://moviesandtvshows.vercel.app/sitemap.xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="referrer" content="origin" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="movies, tvshow, free movies, free tvshows, watch movie online, watch tvshow online, free movie streaming, free tvshow streaming"
        />
        <meta
          property="og:description"
          content="Stream HD movies and TV Shows for free Explore. Discover. Online. explore top titles, discover new releases, and start streaming now!"
        />
        <meta
          name="description"
          content="Stream HD movies and TV Shows for free Explore. Discover. Online. explore top titles, discover new releases, and start streaming now!"
        />
        <link rel="canonical" href="https://moviesandtvshows.vercel.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Movies & Tv Shows™ - Explore. Discover. Online. "
        />
        <meta property="og:url" content="https://moviesandtvshows.vercel.app" />
        <meta
          property="og:site_name"
          content="Movies & Tv Shows™ - Explore. Discover. Online. "
        />
        <meta
          property="og:image"
          content="https://moviesandtvshows.vercel.app/og_image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpg" />
        <meta
          name="application-name"
          content="Movies & Tv Shows™ - Explore. Discover. Online. "
        />
        <meta
          property="article:modified_time"
          content="2024-01-01T13:13:13+00:00"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://moviesandtvshows.vercel.app/sitemap.xml"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Movies & Tv Shows™ - Explore. Discover. Online."
        />
        <meta
          name="twitter:description"
          content="Stream HD movies and TV Shows for free Explore. Discover. Online. explore top titles, discover new releases, and start streaming now!"
        />
        <meta
          name="twitter:image"
          content="https://moviesandtvshows.vercel.app/og_image.jpg"
        />
        <meta
          name="google-site-verification"
          content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg"
        />

        <meta
          name="facebook-domain-verification"
          content="du918bycikmo1jw78wcl9ih6ziphd7"
        />
        <meta
          name="dailymotion-domain-verification"
          content="dm3bs67ukdegz9qik"
        />
        <meta name="monetag" content="98a412cb5612b9188cd76b9744304b6c" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: soap2daySchema }}
        />
      </Head>
      <SocialSharing />
      {isAdult && <AdultSkipAds movie={movie} />}
      {/* <Script src="../../../propler/ads.js" defer /> */}
      {/* <Script src="../../../propler/ads2.js" defer /> */}
      <a
        href="https://t.me/watchmovietvshow/"
        target="_blank"
        rel="noopener noreferrer"
        className="telegram-link"
        style={{
          display: "block",
          textAlign: "center",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <p
          style={{ display: "inline-block" }}
          className=" title text-2xl font-bold"
        >
          For Request or Demand <br />
          Movies & TV Series Join Telegram
          <i
            className="fab fa-telegram telegram-icon"
            style={{ marginLeft: "8px" }}
          ></i>
        </p>
      </a>
      <span className="px-0 bg-clip-text text-sm text-black font-bold mt-2">
        <SearchComponent />
      </span>
      <div className={styles.title}>
        <div className="content flex flex-col items-center justify-center text-center">
          <h1
            className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold mt-2"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              marginBottom: "12px",
              fontSize: "25px",
            }}
          >
            Movies & Tv Shows™ Explore. Discover. Online.
          </h1>
        </div>
      </div>

      <main>
        {/* Tab Navigation */}
        <div className="tabs">
          <button
            // className={activeTab === "movies" ? "active" : ""}
            className={`bg-blue-500 ${activeTab === "movies" ? "active" : ""}`}
            onClick={() => setActiveTab("movies")}
            style={{
              textShadow: "1px 1px 0px #000",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Movies
          </button>
          <button
            // className={activeTab === "adult" ? "active" : ""}
            className={`bg-red-500 ${activeTab === "adult" ? "active" : ""}`}
            onClick={() => setActiveTab("adult")}
            style={{
              textShadow: "1px 1px 0px #000",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Adult
          </button>
          <button
            // className={activeTab === "tvShows" ? "active" : ""}
            className={`bg-green-500 ${
              activeTab === "tvShows" ? "active" : ""
            }`}
            onClick={() => setActiveTab("tvShows")}
            style={{
              textShadow: "1px 1px 0px #000",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            TV Shows
          </button>
        </div>

        {/* Movies Section */}
        {activeTab === "movies" && (
          <section>
            <h2
              className="px-3 py-1 mx-1 border rounded disabled:opacity-100 bg-blue-500 text-white hover:bg-blue-800"
              style={{
                textShadow: "1px 1px 0px #000",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Movies
            </h2>
            <div className="pagination">
              <button
                onClick={() => setMoviePage(moviePage - 1)}
                disabled={moviePage === 1}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Previous
              </button>
              <span
                className="page-number"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Page {moviePage}
              </span>
              <button
                onClick={() => setMoviePage(moviePage + 1)}
                disabled={moviePage * itemsPerPage >= regularMovies.length}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Next
              </button>
            </div>
            <div className="movie-list">
              {getPaginatedItems(regularMovies, moviePage).map((movie) => (
                <div
                  key={movie.id}
                  className="movie-item relative overflow-hidden  transform transition-transform duration-300 ease-in-out hover:scale-105"
                  onClick={() => handleImageClick(movie)}
                >
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    className="rounded-xl"
                    width={500}
                    height={750}
                    quality={90}
                    layout="intrinsic"
                    style={{
                      width: "100%",
                      height: "auto",
                      boxShadow: "0 0 10px 0 #000",
                      cursor: "pointer",
                      filter:
                        "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
                    }}
                  />
                  <h3 style={{ textShadow: "1px 1px 0px #000" }}>
                    {movie.title}{" "}
                  </h3>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={() => setMoviePage(moviePage - 1)}
                disabled={moviePage === 1}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Previous
              </button>
              <span
                className="page-number"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Page {moviePage}
              </span>
              <button
                onClick={() => setMoviePage(moviePage + 1)}
                disabled={moviePage * itemsPerPage >= regularMovies.length}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Adult Movies Section */}
        {activeTab === "adult" && (
          <section>
            <h2
              className="px-3 py-1 mx-1 border rounded disabled:opacity-100 bg-red-500 text-white hover:bg-red-800"
              style={{
                textShadow: "1px 1px 0px #000",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Adult{" "}
            </h2>
            <div className="pagination">
              <button
                onClick={() => setAdultPage(adultPage - 1)}
                disabled={adultPage === 1}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Previous
              </button>
              <span
                className="page-number"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Page {adultPage}
              </span>
              <button
                onClick={() => setAdultPage(adultPage + 1)}
                disabled={adultPage * itemsPerPage >= adultMovies.length}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Next
              </button>
            </div>
            <div className="movie-list">
              {getPaginatedItems(adultMovies, adultPage).map((movie) => (
                <div
                  key={movie.id}
                  className="movie-item relative overflow-hidden  transform transition-transform duration-300 ease-in-out hover:scale-105"
                  onClick={() => handleImageClick(movie)}
                >
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    className="rounded-xl"
                    width={500}
                    height={750}
                    quality={90}
                    layout="intrinsic"
                    style={{
                      width: "100%",
                      height: "auto",
                      boxShadow: "0 0 10px 0 #000",
                      cursor: "pointer",
                      filter:
                        "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
                    }}
                  />
                  <h3 style={{ textShadow: "1px 1px 0px #000" }}>
                    {movie.title}{" "}
                  </h3>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={() => setAdultPage(adultPage - 1)}
                disabled={adultPage === 1}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Previous
              </button>
              <span
                className="page-number"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Page {adultPage}
              </span>
              <button
                onClick={() => setAdultPage(adultPage + 1)}
                disabled={adultPage * itemsPerPage >= adultMovies.length}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* TV Shows Section */}
        {activeTab === "tvShows" && (
          <section>
            <h2
              className="px-3 py-1 mx-1 border rounded disabled:opacity-100 bg-green-500 text-white hover:bg-green-800"
              style={{
                textShadow: "1px 1px 0px #000",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              TV Shows
            </h2>
            <div className="pagination">
              <button
                onClick={() => setTvShowPage(tvShowPage - 1)}
                disabled={tvShowPage === 1}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Previous
              </button>
              <span
                className="page-number"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Page {tvShowPage}
              </span>
              <button
                onClick={() => setTvShowPage(tvShowPage + 1)}
                disabled={tvShowPage * itemsPerPage >= tvShows.length}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Next
              </button>
            </div>
            <div className="tv-show-list">
              {getPaginatedItems(tvShows, tvShowPage).map((show) => (
                // <div key={show.id} className="tv-show-item">
                <div
                  key={show.id}
                  className="tv-show-item relative overflow-hidden  transform transition-transform duration-300 ease-in-out hover:scale-105"
                  onClick={() => handleImageClick(show)}
                >
                  <Image
                    src={show.image}
                    alt={show.title}
                    width={500}
                    height={750}
                    quality={90}
                    className="rounded-xl "
                    layout="intrinsic"
                    style={{
                      width: "100%",
                      height: "auto",
                      boxShadow: "0 0 10px 0 #000",
                      cursor: "pointer",
                      filter:
                        "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
                    }}
                  />
                  <h3 style={{ textShadow: "1px 1px 0px #000" }}>
                    {show.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={() => setTvShowPage(tvShowPage - 1)}
                disabled={tvShowPage === 1}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Previous
              </button>
              <span
                className="page-number"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Page {tvShowPage}
              </span>
              <button
                onClick={() => setTvShowPage(tvShowPage + 1)}
                disabled={tvShowPage * itemsPerPage >= tvShows.length}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  margin: "5px",
                  textShadow: "1px 1px 0px #000",
                }}
              >
                Next
              </button>
            </div>
          </section>
        )}
        {/* Repeat for Adult and TV Shows sections with similar structure */}

        {showPopup && popupContent && (
  <div className="popup-overlay fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[99999] overflow-auto">
    <div className="popup-content bg-white rounded-lg p-0 w-full h-full max-w-full max-h-full relative flex flex-col overflow-y-auto z-[100000]">

      {/* Close Button */}
      <button
        onClick={closePopup}
        className="absolute top-4 right-4 text-2xl font-bold text-white z-[100001] bg-gray-800 p-2 rounded-full hover:bg-gray-900"
      >
        &#10005;
      </button>

      {popupContent && (
        <>
          <h2 className="text-gray-800 mb-4 text-center px-2 text-3xl font-bold mt-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent hover:text-blue-800">
            {popupContent.title}
          </h2>

          <div className="aspect-w-16 aspect-h-9 w-full h-full">
            <iframe
              src={src}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg shadow-md"
              style={{
                filter: "contrast(1.2) saturate(1.3) brightness(1.1)",
              }}
            />
          </div>

          <div className="flex flex-col items-center mt-4 gap-4">
            <div className="flex flex-wrap justify-center gap-2 w-full">
              {currentVideoSources.map((source, index) => (
                <button
                  key={index}
                  onClick={() => handlePlayerSelect(index)}
                  className={`px-4 py-2 rounded-md font-semibold transition ${
                    currentPlayerIndex === index
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-black"
                  } hover:bg-green-500 hover:text-white`}
                >
                  Player {index + 1}
                </button>
              ))}
            </div>
          </div>

          {tvshow?.badge === "TV Show" && (
            <div className="flex justify-between items-center w-full mt-4 px-2">
              <button
                onClick={handlePreviousEpisode}
                disabled={currentEpisodeIndex === 0}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 font-bold"
              >
                Previous
              </button>

              <h2 className="text-center flex-grow bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold hover:text-blue-800">
                Episode Navigation
              </h2>

              <button
                onClick={handleNextEpisode}
                disabled={false}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 font-bold"
              >
                Next
              </button>
            </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
  main {
    padding: 20px;
  }
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .tabs button {
    padding: 10px 20px;
    border: 1px solid #ddd;
    cursor: pointer;
    margin-right: 10px;
  }
  .tabs button.active {
    background: #c0c0c0;
    color: white;
  }
  .movie-list,
  .tv-show-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr);
  }
  .movie-item,
  .tv-show-item {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .pagination button {
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    background-color: #0070f3;
    color: white;
    border: none;
  }
  .pagination button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    .movie-list,
    .tv-show-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (max-width: 900px) {
    .movie-list,
    .tv-show-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 600px) {
    .movie-list,
    .tv-show-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .page-number {
    margin: 0 10px;
    font-weight: bold;
  }

  .popup-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
    padding: 0;
    overflow-y: auto;
  }

  .popup-content iframe {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }

  .popup-content .popup-close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 9999;
  }

  /* For Full-Screen */
  .popup-content.fullscreen {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
    padding: 0;
  }
`}</style>
    </div>
  );
}
