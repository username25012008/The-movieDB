import React, { useEffect, useState } from "react";
import { apiClients } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import useDateFormatter from "../hooks/useDateFormatter";
import { Flat } from "@alptugidin/react-circular-progress-bar";
import { FaBookmark, FaHeart, FaList, FaPlay } from "react-icons/fa";

export default function SingleMovieTv() {
  let hours = 0;
  let minuts = 0;
  let vote_average;
  let params = useParams();
  let [singleMTV, setSingleMTV] = useState([]);
  let [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { formatDate_v2 } = useDateFormatter(singleMTV?.release_date);
  const movieInfo = async () => {
    try {
      setLoading(true);
      let res = await apiClients.get(`/movie/${params.id}?language=en-US`);
      setSingleMTV(res?.data);
    } catch (error) {
      alert("Error:" + error.message);
    } finally {
      setLoading(false);
    }
  };
  const movieActors = async () => {
    let res = await apiClients.get(
      `/movie/${params.id}/credits?language=en-US`
    );
    let res_two = res.data.crew || res.data.cast;
    setActors(res_two);
  };
  const runtime_movie = () => {
    do {
      hours = Math.floor(singleMTV?.runtime / 60);
      minuts = singleMTV?.runtime % 60;
    } while (singleMTV?.runtime < 60);
    return hours + "h " + minuts + "m";
  };
  useEffect(() => {
    movieActors();
    movieInfo();
  }, []);

  console.log(actors);
  console.log(params.id);
  vote_average = singleMTV?.vote_average * 10;

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-white">
          <HashLoader color="#032541" size={100} />
        </div>
      ) : (
        <>
          <section className="">
            <div
              className=""
              style={{
                background: `linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%), url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${singleMTV?.backdrop_path})`,
                height: "558px",
                backgroundPosition: "left center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex container py-8 gap-10">
                <img
                  src={
                    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2" +
                    singleMTV?.poster_path
                  }
                  alt={singleMTV?.title}
                  className="rounded-lg shadow-md"
                />
                <div className="w-full">
                  <h1 className="text-white text-4xl font-bold">
                    {singleMTV?.title}{" "}
                    <span className="font-normal text-[#fff]/70">
                      ({singleMTV?.release_date.split("-")[0]})
                    </span>
                  </h1>
                  <div className="flex text-white gap-6 text-base">
                    <p>
                      {formatDate_v2(singleMTV?.release_date)} (
                      {singleMTV?.origin_country[0]})
                    </p>
                    <p className="list-item">
                      {singleMTV?.genres?.map((item) => item?.name).join(", ")}
                    </p>
                    <p className="list-item">{runtime_movie()}</p>
                  </div>
                  <div className="flex text-white items-center gap-3">
                    <div className="w-16 h-16 bg-darkblue rounded-full p-[1px] hover:scale-110 duration-150 ease-linear cursor-pointer mt-4">
                      <Flat
                        progress={vote_average}
                        showMiniCircle={false}
                        sx={{
                          strokeColor:
                            vote_average > 0 && vote_average <= 30
                              ? "#E33B30"
                              : vote_average > 30 && vote_average <= 70
                              ? "#CDD030"
                              : "#21ce79",
                          bgStrokeColor:
                            vote_average > 30 && vote_average < 70
                              ? "#413C0F"
                              : vote_average >= 0 && vote_average <= 30
                              ? "#551435"
                              : "#1f4529",
                          barWidth: 7,
                          valueColor: "#fff",
                          valueFamily: "Source Sans 3",
                          valueSize: 40,
                          valueWeight: 600,
                          size: 80,
                        }}
                      />
                    </div>
                    <h1 className="text-base font-bold mt-4">
                      User <br /> Score
                    </h1>
                  </div>
                  <div className="flex text-white gap-5 mt-4">
                    <div className="bg-darkblue w-11 h-11 rounded-full text-xl flex items-center justify-center cursor-pointer">
                      <FaList />
                    </div>
                    <div className="bg-darkblue w-11 h-11 rounded-full text-xl flex items-center justify-center cursor-pointer">
                      <FaHeart />
                    </div>
                    <div className="bg-darkblue w-11 h-11 rounded-full text-xl flex items-center justify-center cursor-pointer">
                      <FaBookmark />
                    </div>
                    <div className="ml-3 flex items-center justify-center cursor-pointer gap-2 font-semibold text-base">
                      <FaPlay /> Play Trailer
                    </div>
                  </div>
                  <div className=" mt-5">
                    <h1 className="text-xl text-white mb-1 font-semibold">
                      Overview
                    </h1>
                    <p className="text-base text-white">
                      {singleMTV?.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container flex py-8">
              <div className="w-10/12 relative">
                <h1>Top Billed Cast</h1>
                <div className="after:absolute after:top-0 after:right-0 after:h-full after:w-20 after:pointer-events-none after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-white">
                  <div className="overflow-hidden overflow-x-scroll flex wrapper px-3 gap-4 py-4">
                    {actors?.slice(0, 17).map((item) => (
                      <Link
                        to={`/person/${item.id}`}
                        className="flex-shrink-0 border border-[#0000002e] rounded-lg shadow-lg w-[138px]"
                        key={item?.id}
                      >
                        <img
                          src={`https://media.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}
                          alt={item?.name}
                          className="rounded-t-lg"
                        />
                        <div className="p-3 w-full">
                          <h1 className="font-bold text-base text-black">
                            {item?.name}
                          </h1>
                          <p className="text-black text-sm">
                            {item?.character}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-2/12"></div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
