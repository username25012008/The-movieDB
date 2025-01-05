import axios from "axios";

export const apiClients = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDM0ODY1OGU3NTA1ZTFkYzUxMmFlMDExM2E5ZTQ2OSIsIm5iZiI6MTczNTczNzM0My4yNDcsInN1YiI6IjY3NzUzZmZmMWMxZDdlMDljZjYxNTc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BX3smTvRiyebRI2Z6IR8oZwYQEzRw4_ke-OqgZNXTvY'
    }
})