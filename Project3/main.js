"use strict";

const mplayer = document.querySelector(".mplayer")
const playBtn = document.querySelector("#play")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const catBtn = document.querySelector("#cat")
const audio = document.querySelector("#audio")
const catAudio = document.querySelector("#cat-audio")
const progress = document.querySelector(".progress")
const progressContainer = document.querySelector(".progress-container")
const title = document.querySelector("#title")
const cover = document.querySelector("#cover")
const steelBtn = document.querySelector("#steel")
const pinkBtn = document.querySelector("#pink")
const blueBtn = document.querySelector("#blue")
const limeBtn = document.querySelector("#lime")

const songs = ["Level1", "Level2", "Level3"]

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {
  title.innerText = song
  audio.src = `music/${song}.wav`
  cover.style.backgroundImage = `url(images/${song}.jpg)`
}

function playSong() {
  mplayer.classList.add("play")
  playBtn.querySelector("i.fas").classList.remove("fa-play")
  playBtn.querySelector("i.fas").classList.add("fa-pause")

  audio.volume = 0.3
  audio.play()
}

function pauseSong() {
  mplayer.classList.remove("play")
  playBtn.querySelector("i.fas").classList.add("fa-play")
  playBtn.querySelector("i.fas").classList.remove("fa-pause")

  audio.pause()
}

function prevSong() {
  songIndex--

  if(songIndex < 0) {
    songIndex = songs.length - 1
  }

  loadSong(songs[songIndex])
  playSong()
}

function nextSong() {
  songIndex++

  if(songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex])
  playSong()
}

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration
}

function meow() {
  catAudio.play()
}

function setStyle(style) {
  mplayer.classList.remove(...styles)
  mplayer.classList.add(style)
}

// Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = mplayer.classList.contains("play")
  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)
catBtn.addEventListener("click", meow)

audio.addEventListener("timeupdate", updateProgress)
audio.addEventListener("ended", nextSong)
progressContainer.addEventListener("click", setProgress)

const styles = ["mplayer-steel", "mplayer-pink", "mplayer-blue", "mplayer-lime"]

steelBtn.addEventListener("click", () => {
  setStyle("mplayer-steel")
})

pinkBtn.addEventListener("click", () => {
  setStyle("mplayer-pink")
})

blueBtn.addEventListener("click", () => {
  setStyle("mplayer-blue")
})

limeBtn.addEventListener("click", () => {
  setStyle("mplayer-lime")
})