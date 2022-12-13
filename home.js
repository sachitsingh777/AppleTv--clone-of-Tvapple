// // free


// let free = document.getElementById("free");
// freemovie()
// function freemovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             displaydata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function displaydata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         product.style.width="207px"
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         free.append(product);
//     });
// };

// //  popular
// let popular = document.getElementById("popular");
// popularmovie()
// function popularmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=google")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             populardata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function populardata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         popular.append(product);
//     });
// };

// // season


// let season = document.getElementById("season");
// seasonmovie()
// function seasonmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             seasondata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function seasondata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         season.append(product);
//     });
// };

// //  original
// let original = document.getElementById("original");
// originalmovie()
// function originalmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             originaldata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function originaldata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         original.append(product);
//     });
// };


// // appletv


// let appletv = document.getElementById("appletv");
// appletvmovie()
// function appletvmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             appletvdata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function appletvdata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         appletv.append(product);
//     });
// };

// //  current
// let current = document.getElementById("current");
// currentmovie()
// function currentmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             currentdata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function currentdata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         current.append(product);
//     });
// };

// // release


// let release = document.getElementById("release");
// releasemovie()
// function releasemovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=season")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             releasedata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function releasedata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         release.append(product);
//     });
// };

// // historical
// let historical = document.getElementById("historical");
// historicalmovie()
// function historicalmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=original")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             historicaldata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function historicaldata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         historical.append(product);
//     });
// };


// // little


// let little = document.getElementById("little");
// littlemovie()
// function littlemovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             littledata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function littledata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         little.append(product);
//     });
// };

// //  musical
// let musical = document.getElementById("musical");
// musicalmovie()
// function musicalmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=google")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             musicaldata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function musicaldata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         musical.append(product);
//     });
// };

// // stars


// let stars = document.getElementById("stars");
// starsmovie()
// function starsmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=season")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             starsdata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function starsdata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         stars.append(product);
//     });
// };

// //  cuddly
// let cuddly = document.getElementById("cuddly");
// cuddlymovie()
// function cuddlymovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=original")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             cuddlydata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function cuddlydata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         cuddly.append(product);
//     });
// };


// // feature


// let feature = document.getElementById("feature");
// featuremovie()
// function featuremovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             featuredata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function featuredata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         feature.append(product);
//     });
// };

// //  here
// let here = document.getElementById("here");
// heremovie()
// function heremovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=google")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             heredata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function heredata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         here.append(product);
//     });
// };

// // drama


// let drama = document.getElementById("drama");
// dramamovie()
// function dramamovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=season")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             dramadata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function dramadata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         drama.append(product);
//     });
// };

// // sport
// let sport = document.getElementById("sport");
// sportmovie()
// function sportmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=original")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             sportdata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function sportdata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         sport.append(product);
//     });
// };



// // comedy


// let comedy = document.getElementById("comedy");
// comedymovie()
// function comedymovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=for")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             comedydata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function comedydata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         comedy.append(product);
//     });
// };

// //  series
// let  series = document.getElementById(" series");
// seriesmovie()
// function  seriesmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=google")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             seriesdata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function  seriesdata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         series.append(product);
//     });
// };

// // nonfiction


// let nonfiction = document.getElementById("nonfiction");
// nonfictionmovie()
// function nonfictionmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=season")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             nonfictiondata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function nonfictiondata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         nonfiction.append(product);
//     });
// };

// // funforall
// let funforall = document.getElementById("funforall");
// funforallmovie()
// function funforallmovie() {
//     fetch("https://www.omdbapi.com/?apiKey=d9b4928e&s=original")
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             funforalldata(res.Search);

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// function funforalldata(data) {
//     data.forEach((element) => {
//         let product = document.createElement("div");
//         let poster = document.createElement("img");
//         poster.setAttribute("src", element.Poster);

//         product.append(poster);
//         funforall.append(product);
//     });
// };