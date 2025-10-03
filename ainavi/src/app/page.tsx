"use client"
import Image from "next/image";
import data from '../../data.json'
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = data.map(category => ({
    ...category,
    cards: category.cards.filter(card =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.cards.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      {/* 搜索框 */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="搜索 AI 工具..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:outline-none text-lg shadow-sm transition-all"
          />
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-6xl mx-auto">
        {filteredData.map((category) => (
          <div key={category.title} id={category.title} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-blue-500 pl-4">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.cards.map((card) => (
                <a
                  key={card.id}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={`/img/${card.img}`}
                          alt={card.name}
                          width={64}
                          height={64}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {card.name}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-400">未找到相关工具</p>
          </div>
        )}
      </div>

      {/* Footer 版权说明 */}
      <footer className="max-w-6xl mx-auto mt-20 pt-8 pb-6 border-t border-slate-300">
        <div className="text-center text-slate-600">
          <p className="text-sm mb-2">© 2025 AI导航站. All rights reserved.</p>
          <p className="text-xs text-slate-500">本站收录优质AI工具，助力您的AI之旅</p>
        </div>
      </footer>
    </div>
  );
}
