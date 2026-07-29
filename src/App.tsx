/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Mic, BookOpen, ChevronLeft, Play, Pause, List, Globe, Repeat } from "lucide-react";
import { SONGS, Song, SongCategory } from "./constants";

export default function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [view, setView] = useState<"list" | "player">("list");
  const [selectedCategory, setSelectedCategory] = useState<SongCategory>("华文诗歌");

  const handleSelectSong = (song: Song) => {
    setCurrentSong(song);
    setView("player");
  };

  const handleBackToList = () => {
    setView("list");
  };

  const categories: SongCategory[] = ["华文诗歌", "福建诗歌", "广东诗歌"];
  const filteredSongs = SONGS.filter(song => song.category === selectedCategory);

  return (
    <div className="min-h-screen font-sans">
      <AnimatePresence mode="wait">
        {view === "list" ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto px-4 py-8"
          >
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8B4513] mb-3">
                荣耀诗歌
              </h1>
              <p className="text-lg text-gray-600">用心歌颂，以此为荣</p>
            </header>

            {/* 分类标签栏 */}
            <div className="flex justify-center space-x-2 md:space-x-4 mb-10 bg-[#F5F5DC]/50 p-1.5 rounded-full border-2 border-[#EAD7C3]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-full text-lg font-bold transition-all active:scale-95 ${
                    selectedCategory === cat
                      ? "bg-[#D2691E] text-white shadow-md"
                      : "text-gray-500 hover:bg-[#F5F5DC]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSongs.map((song) => (
                <button
                  key={song.id}
                  onClick={() => handleSelectSong(song)}
                  className="bg-white p-4 rounded-2xl border-2 border-[#EAD7C3] hover:border-[#D2691E] shadow-sm hover:shadow-lg transition-all text-left flex items-center space-x-4 group active:scale-95"
                >
                  <div className="w-12 h-12 bg-[#F5F5DC] rounded-xl flex items-center justify-center text-[#8B4513] group-hover:bg-[#D2691E] group-hover:text-white transition-colors shrink-0">
                    <span className="text-xl font-bold">{song.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-lg font-bold text-gray-800 block truncate">
                      {song.title.split(". ")[1] || song.title}
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5 block group-hover:text-[#D2691E] transition-colors">点击播放诗歌</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#FFF5F0] shrink-0">
                    <Play className="text-gray-300 group-hover:text-[#D2691E]" size={20} />
                  </div>
                </button>
              ))}
            </div>

            {filteredSongs.length === 0 && (
              <div className="text-center py-20 text-gray-400 text-xl">
                暂无此类诗歌
              </div>
            )}
          </motion.div>
        ) : (
          <SongPlayer song={currentSong!} onBack={handleBackToList} />
        )}
      </AnimatePresence>
    </div>
  );
}

function SongPlayer({ song, onBack }: { song: Song; onBack: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState<"original" | "accompaniment" | "recitation">("original");
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const switchMode = (newMode: "original" | "accompaniment" | "recitation") => {
    setMode(newMode);
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      key="player"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="fixed inset-0 bg-[#FDFBF7] z-50 flex flex-col p-4 overflow-y-auto"
    >
      {/* 顶部导航 */}
      <div className="max-w-3xl mx-auto w-full flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 text-[#8B4513] py-1.5 px-3 rounded-full bg-[#F5F5DC] font-medium active:scale-90 transition-transform text-sm"
        >
          <ChevronLeft size={20} />
          <span>返回列表</span>
        </button>
        <span className="text-lg font-bold font-serif text-[#8B4513] truncate max-w-[60%]">{song.title}</span>
        <div className="w-10" /> {/* 占位符以保持平衡 */}
      </div>

      <div className="max-w-2xl mx-auto w-full flex-grow flex flex-col items-center">
        {/* 播放模式切换按钮 */}
        <div className="grid grid-cols-3 gap-2 w-full mb-4">
          <button
            onClick={() => switchMode("original")}
            className={`flex flex-col items-center justify-center space-y-1 py-2.5 px-2 rounded-xl border-2 transition-all active:scale-95 ${
              mode === "original"
                ? "bg-[#D2691E] text-white border-[#8B4513] shadow-md"
                : "bg-white text-gray-600 border-[#EAD7C3]"
            }`}
          >
            <Music size={18} />
            <span className="text-xs font-bold leading-tight text-center">听歌 (原唱)</span>
          </button>

          <button
            onClick={() => song.accompanimentPath ? switchMode("accompaniment") : undefined}
            disabled={!song.accompanimentPath}
            className={`flex flex-col items-center justify-center space-y-1 py-2.5 px-2 rounded-xl border-2 transition-all active:scale-95 ${
              !song.accompanimentPath
                ? "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed opacity-60"
                : mode === "accompaniment"
                ? "bg-[#D2691E] text-white border-[#8B4513] shadow-md"
                : "bg-white text-gray-600 border-[#EAD7C3]"
            }`}
          >
            <Mic size={18} />
            <span className="text-xs font-bold leading-tight text-center">
              {song.accompanimentPath ? "唱诗 (伴奏)" : "暂无伴奏"}
            </span>
          </button>

          <button
            onClick={() => song.recitationPath ? switchMode("recitation") : undefined}
            disabled={!song.recitationPath}
            className={`flex flex-col items-center justify-center space-y-1 py-2.5 px-2 rounded-xl border-2 transition-all active:scale-95 ${
              !song.recitationPath
                ? "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed opacity-60"
                : mode === "recitation"
                ? "bg-[#D2691E] text-white border-[#8B4513] shadow-md"
                : "bg-white text-gray-600 border-[#EAD7C3]"
            }`}
          >
            <BookOpen size={18} />
            <span className="text-xs font-bold leading-tight text-center">
              {song.recitationPath ? "朗读 (歌词)" : "暂无朗读"}
            </span>
          </button>
        </div>

        {/* 核心播放控制 */}
        <div className="w-full flex flex-col items-center mb-6">
          <div className="flex items-center space-x-10 mb-4">
            <div className="w-20 h-20 hidden md:block" /> {/* 桌面端占位平衡 */}
            <button
              onClick={togglePlay}
              className="w-24 h-24 bg-[#D2691E] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all border-4 border-[#8B4513]/20"
            >
              {isPlaying ? <Pause size={48} fill="currentColor" /> : <Play size={48} fill="currentColor" className="ml-2" />}
            </button>
            <button
              onClick={() => setIsLoop(!isLoop)}
              className={`w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all shadow-md border ${
                isLoop 
                  ? "bg-[#D2691E] text-white border-[#8B4513]" 
                  : "bg-white text-[#8B4513] border-[#EAD7C3] hover:bg-[#FDF5E6]"
              }`}
              title="重复播放 (Replay)"
            >
              <Repeat size={16} strokeWidth={2} className={isLoop ? "animate-pulse" : ""} />
              <span className="text-[6px] font-bold mt-0.5 uppercase tracking-tighter leading-none">REPLAY</span>
              <span className="text-[10px] font-bold leading-none">重复播放</span>
            </button>
          </div>

          {/* 进度条 */}
          <div className="w-full max-w-md px-4">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-[#EAD7C3] rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
            />
            <div className="flex justify-between mt-1 text-xs text-gray-400 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={
              mode === "original"
                ? song.originalPath
                : mode === "accompaniment"
                ? song.accompanimentPath
                : (song.recitationPath ?? "")
            }
            preload="none"
            loop={isLoop}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={() => {
              if (!isLoop) setIsPlaying(false);
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={(e) => {
              const target = e.currentTarget;
              const expectedSrc = mode === "original"
                ? song.originalPath
                : mode === "accompaniment"
                ? song.accompanimentPath
                : (song.recitationPath ?? "");
              const actualUrl = target.src;
              
              if (isPlaying) {
                alert(`播放失败！\n\n1. 尝试路径: ${expectedSrc}\n2. 实际地址: ${actualUrl}\n\n可能原因：\n- 文件未上传到 public/songs 文件夹\n- 文件名不匹配（区分大小写）\n- 文件是 0 字节的空文件\n\n当前服务器上有：08, 20, 22, 23, 24 等歌曲的文件。`);
                setIsPlaying(false);
              }
            }}
          />
        </div>

        {/* 歌词部分 */}
        <div className="w-full bg-white rounded-2xl p-6 border-2 border-[#EAD7C3] shadow-inner flex-grow mb-4">
          <h2 className="text-lg font-serif font-bold text-center mb-4 text-[#8B4513] opacity-60">歌词</h2>
          <div className="text-2xl md:text-3xl text-center leading-relaxed whitespace-pre-wrap font-serif text-gray-800">
            {song.lyrics}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
