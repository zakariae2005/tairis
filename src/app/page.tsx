"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  GamepadIcon,
  BookOpen,
  Calendar,
  Star,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  ChevronDown,
  Menu,
  X,
  Heart,
  Sparkles,
  Gamepad2,
  Mail,
} from "lucide-react"
import Image from "next/image"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function TaerisLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGameImageIndex, setCurrentGameImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 4); // Cycle through 0, 1, 2, 3, then back to 0
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGameImageIndex(prev => (prev + 1) % 3); // Cycle through 0, 1, 2, 3, then back to 0
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

 const mobileMenuItems = [
    { 
      name: "Home", 
      icon: <Sparkles size={28} />, 
      description: "Welcome back",
      color: "from-[#0000] to-[#ffb0d7]"
    },
    { 
      name: "Menu", 
      icon: <Coffee size={28} />, 
      description: "Taste paradise",
      color: "from-[#ffb0d7] to-[#d40000]"
    },
    { 
      name: "Lounge", 
      icon: <Heart size={28} />, 
      description: "Relax & enjoy",
      color: "from-[#d40000] to-[#ffb0d7]"
    },
    { 
      name: "Gaming", 
      icon: <Gamepad2 size={28} />, 
      description: "Play together",
      color: "from-[#ffb0d7] to-[#d40000]"
    },
    { 
      name: "Events", 
      icon: <Calendar size={28} />, 
      description: "Join the fun",
      color: "from-[#d40000] to-[#ffb0d7]"
    },
    { 
      name: "Contact", 
      icon: <Mail size={28} />, 
      description: "Get in touch",
      color: "from-[#ffb0d7] to-[#d40000]"
    }
  ]

  
  const mangaImages = [
    { src: "/images/manga.jpg", alt: "manga 1" },
    { src: "/images/manga2.jpeg", alt: "manga 2" },
    { src: "/images/manga3.jpeg", alt: "manga 3" },
    { src: "/images/manga4.jpeg", alt: "manga 4" }
  ];

  const gameImages = [
    { src: "/images/o1.jpeg", alt: "game 1" },
    { src: "/images/o2.jpeg", alt: "game 2" },
    { src: "/images/o3.jpeg", alt: "game 3" },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2d2bd]/20 via-white to-[#ffb0d7]/10 text-gray-800 overflow-x-hidden relative">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffb0d7]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-[#d40000]/10 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#f2d2bd]/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Sakura Petals */}
        <div className="absolute top-0 left-1/4 text-[#ffb0d7] text-2xl animate-bounce opacity-30" style={{animationDelay: '0s', animationDuration: '4s'}}>🌸</div>
        <div className="absolute top-20 right-1/3 text-[#ffb0d7] text-xl animate-bounce opacity-40" style={{animationDelay: '1s', animationDuration: '5s'}}>🌸</div>
        <div className="absolute top-40 left-1/2 text-[#ffb0d7] text-lg animate-bounce opacity-20" style={{animationDelay: '2s', animationDuration: '3s'}}>🌸</div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/2 right-10 w-8 h-8 border-2 border-[#d40000]/20 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/3 left-10 w-6 h-6 bg-[#ffb0d7]/20 rotate-12 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-[#f2d2bd]/30 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-[#d40000] flex items-center gap-2">
            <Sparkles className="text-[#ffb0d7]" size={28} />
            Taeris
          </div>

          {/* Desktop Navigation - UNCHANGED */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Menu", "Lounge", "Gaming", "Events", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-gray-700 hover:text-[#d40000] font-medium transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d40000] to-[#ffb0d7] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2 rounded-full bg-gradient-to-r from-[#d40000] to-[#ffb0d7] text-white shadow-lg transform transition-all duration-300 hover:scale-110" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="animate-spin" />
              ) : (
                <Menu size={24} className="animate-pulse" />
              )}
            </div>
          </button>
        </div>

        {/* Modern Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-white">
            {/* Menu Content */}
            <div className="h-full flex flex-col pt-24 pb-8 px-6">
              {/* Menu Items List */}
              <div className="flex-1 space-y-1">
                {["Home", "Menu", "Lounge", "Gaming", "Events", "Contact"].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="w-full text-left p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#ffb0d7]/10 hover:to-[#d40000]/10 border border-gray-200 hover:border-[#ffb0d7]/30 transition-all duration-300 transform hover:scale-[0.98] active:scale-95 group"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'slideInRight 0.4s ease-out forwards'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-800 group-hover:text-[#d40000] transition-colors duration-300">
                        {item}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#d40000] to-[#ffb0d7] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                        <ChevronDown size={16} className="text-white rotate-[-90deg]" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-6 w-20 h-20 bg-gradient-to-br from-[#ffb0d7]/20 to-[#d40000]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-32 left-6 w-16 h-16 bg-gradient-to-br from-[#d40000]/20 to-[#ffb0d7]/20 rounded-full blur-lg"></div>
            
            {/* Sakura decoration */}
            <div className="absolute top-32 left-8 text-[#ffb0d7] text-xl opacity-30">🌸</div>
            <div className="absolute bottom-48 right-8 text-[#ffb0d7] text-lg opacity-40">🌸</div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2d2bd]/10 via-transparent to-[#ffb0d7]/5"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#f2d2bd]/30 shadow-lg">
              <Heart className="text-[#ffb0d7]" size={20} />
              <span className="text-gray-600 font-medium">Welcome to Japanese Paradise</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#d40000] via-[#d40000] to-[#ffb0d7] bg-clip-text text-transparent drop-shadow-sm">
                Taeris
              </span>
              <div className="text-4xl md:text-6xl mt-4 text-gray-800 font-light">
                Coffee & <span className="text-[#ffb0d7] font-medium">Culture</span>
              </div>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Where authentic Japanese culture meets premium coffee craftsmanship. 
              <br className="hidden md:block" />
              Experience anime, manga, gaming, and exquisite flavors in perfect harmony.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => scrollToSection("menu")}
                className="bg-gradient-to-r from-[#d40000] to-[#d40000]/90 hover:from-[#d40000]/90 hover:to-[#d40000] text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Coffee className="mr-2" size={20} />
                Explore Menu
              </Button>
              <Button
                onClick={() => scrollToSection("lounge")}
                variant="outline"
                className="border-2 border-[#ffb0d7] text-[#d40000] hover:bg-[#ffb0d7] hover:text-white bg-white/80 backdrop-blur-sm px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2" size={20} />
                Visit Lounge
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Fixed positioning */}
        <div className="relative z-10 pb-8 animate-bounce">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-[#f2d2bd]/30">
            <ChevronDown className="text-[#d40000]" size={24} />
          </div>
        </div>
      </section>
       <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>


      {/* Menu Section */}
      <section id="menu" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-[#ffb0d7]/20 text-[#d40000] border-[#ffb0d7]/40 mb-6 px-6 py-2 text-base rounded-full">
              Authentic Japanese Cuisine
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
              Taste of <span className="text-[#d40000]">Japan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From traditional ramen to delicate sushi, experience authentic Japanese flavors crafted with passion and served with love
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      img:"/images/img1.PNG",
      name: "Tonkotsu Ramen",
      description: "Rich pork bone broth with tender chashu and fresh noodles",
      price: "¥1,200",
      emoji: "🍜",
    },
    {
      img:"/images/img2.PNG",
      name: "Sushi Omakase",
      description: "Chef's selection of premium nigiri and seasonal specialties",
      price: "¥2,800",
      emoji: "🍣",
    },
    {
      img:"/images/img7.PNG",
      name: "Matcha Mochi Set",
      description: "Handmade mochi with premium matcha and red bean filling",
      price: "¥800",
      emoji: "🍡",
    },
    {
      img:"/images/img4.PNG",
      name: "Katsu Curry",
      description: "Crispy pork cutlet with Japanese curry and steamed rice",
      price: "¥1,400",
      emoji: "🍛",
    },
    {
      img:"/images/img6.PNG",
      name: "Takoyaki",
      description: "Osaka-style octopus balls with bonito flakes and sauce",
      price: "¥600",
      emoji: "🐙",
    },
    {
      img:"/images/img5.PNG",
      name: "Specialty Coffee",
      description: "Single-origin beans with Japanese brewing techniques",
      price: "¥500",
      emoji: "☕",
    },
  ].map((item, index) => (
    <Card
      key={index}
      className="group bg-white/80 backdrop-blur-sm border-[#f2d2bd]/30 hover:border-[#ffb0d7]/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f2d2bd]/10 to-[#ffb0d7]/5 h-48">
        <Image
          src={item.img}
          alt={item.name}
          width={400}
        height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
          <span className="text-[#d40000] font-bold text-lg">{item.price}</span>
        </div>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
        </div>
      </section>

      {/* Manga & Cosplay Lounge */}
       <section id="lounge" className="py-24 bg-gradient-to-r from-[#f2d2bd]/5 via-white to-[#ffb0d7]/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#ffb0d7]/20 text-[#d40000] border-[#ffb0d7]/40 px-6 py-2 text-base rounded-full">
                Otaku Paradise
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-800">
                Manga & <span className="text-[#d40000]">Cosplay</span> Lounge
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Immerse yourself in our extensive manga library while sipping premium coffee. Our cosplay-friendly
                environment welcomes all otaku to express their passion freely.
              </p>

              <div className="space-y-6">
                {[
                  { icon: BookOpen, text: "1000+ Manga Collection" },
                  { icon: Star, text: "Professional Photo Studio" },
                  { icon: Coffee, text: "Quiet Reading Zones" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-[#ffb0d7]/20 to-[#d40000]/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-[#d40000]" size={24} />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-[#ffb0d7] to-[#ffb0d7]/90 hover:from-[#ffb0d7]/90 hover:to-[#ffb0d7] text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Heart className="mr-2" size={20} />
                Join Our Otaku Club
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#f2d2bd]/20 to-[#ffb0d7]/20 rounded-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-[#f2d2bd]/30">
                <div className="relative h-[600px] overflow-hidden rounded-2xl">
                  {mangaImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-105'
                      }`}
                    />
                  ))}
                  
                  {/* Optional: Add dots indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {mangaImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-[#d40000] scale-125' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Zone */}
      <section id="gaming" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#d40000]/10 to-[#ffb0d7]/10 rounded-3xl"></div>
              
                
                   <div className="relative h-[600px] overflow-hidden rounded-2xl">
                  {gameImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === currentGameImageIndex 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-105'
                      }`}
                    />
                  ))}
                  
                  {/* Optional: Add dots indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {gameImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentGameImageIndex 
                            ? 'bg-[#d40000] scale-125' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                  
                {/* <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className} key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer> */}
              
              <div className="absolute -bottom-4 -right-4 bg-[#d40000] p-4 rounded-full shadow-xl animate-pulse">
                <GamepadIcon className="text-white" size={32} />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <Badge className="bg-[#d40000]/20 text-[#d40000] border-[#d40000]/40 px-6 py-2 text-base rounded-full">
                Level Up Your Experience
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-800">
                Gaming <span className="text-[#d40000]">Zone</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Challenge friends or dive into solo adventures on our premium PlayStation setups. From the latest
                releases to classic JRPGs, game while you caffeinate.
              </p>

              <div className="space-y-6">
                {[
                  { icon: GamepadIcon, text: "PlayStation 5 Stations" },
                  { icon: Star, text: "Latest Game Library" },
                  { icon: Coffee, text: "Gaming + Coffee Combos" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-[#d40000]/20 to-[#ffb0d7]/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-[#d40000]" size={24} />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-[#d40000] to-[#d40000]/90 hover:from-[#d40000]/90 hover:to-[#d40000] text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <GamepadIcon className="mr-2" size={20} />
                Reserve Gaming Time
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-gradient-to-r from-[#ffb0d7]/5 via-white to-[#f2d2bd]/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-[#d40000]/20 text-[#d40000] border-[#d40000]/40 mb-6 px-6 py-2 text-base rounded-full">
              Community Events
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
              Upcoming <span className="text-[#d40000]">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant community for cosplay contests, game tournaments, and cultural celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cosplay Contest",
                date: "March 15, 2024",
                time: "7:00 PM",
                description: "Show off your best anime cosplay and win amazing prizes!",
                emoji: "👘",
                color: "from-[#ffb0d7]/10 to-[#ffb0d7]/5"
              },
              {
                title: "Gaming Tournament",
                date: "March 22, 2024",
                time: "6:00 PM",
                description: "Compete in Street Fighter 6 and Tekken 8 tournaments",
                emoji: "🏆",
                color: "from-[#d40000]/10 to-[#d40000]/5"
              },
              {
                title: "Manga Book Club",
                date: "March 29, 2024",
                time: "5:30 PM",
                description: "Monthly discussion of popular manga series with fellow fans",
                emoji: "📖",
                color: "from-[#f2d2bd]/20 to-[#f2d2bd]/10"
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-[#f2d2bd]/30 hover:border-[#ffb0d7]/50 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className={`h-32 bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {event.emoji}
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="text-[#d40000]" size={20} />
                    <span className="text-gray-600 font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center space-x-2 text-[#d40000]">
                    <Clock size={16} />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
              What Our <span className="text-[#d40000]">Community</span> Says
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sakura M.",
                role: "Regular Customer",
                text: "Taeris is my second home! The manga collection is incredible and the coffee is always perfect.",
                rating: 5,
                avatar: "👩‍🎨"
              },
              {
                name: "Kenji T.",
                role: "Gaming Enthusiast",
                text: "Best place to game and chill. The PlayStation setup is top-notch and the atmosphere is amazing!",
                rating: 5,
                avatar: "🎮"
              },
              {
                name: "Yuki S.",
                role: "Cosplay Artist",
                text: "Finally, a place where I can be myself! The cosplay-friendly environment and photo studio are perfect.",
                rating: 5,
                avatar: "📸"
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-[#f2d2bd]/30 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d40000] via-[#ffb0d7] to-[#f2d2bd]"></div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[#ffb0d7] fill-current" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#f2d2bd]/10 via-white to-[#ffb0d7]/10 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Badge className="bg-[#d40000]/20 text-[#d40000] border-[#d40000]/40 px-6 py-2 text-base rounded-full">
                Visit Us
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-800">
                Find <span className="text-[#d40000]">Taeris</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "123 Otaku Street, Shibuya District\nTokyo, Japan 150-0002"
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    content: "Mon-Thu: 8:00 AM - 10:00 PM\nFri-Sat: 8:00 AM - 12:00 AM\nSun: 9:00 AM - 9:00 PM"
                  },
                  {
                    icon: Phone,
                    title: "Contact",
                    content: "+81 3-1234-5678\nhello@taeris.jp"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="bg-gradient-to-r from-[#d40000]/20 to-[#ffb0d7]/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-[#d40000]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: Instagram, color: "from-[#ffb0d7] to-[#ffb0d7]/80" },
                  { icon: Twitter, color: "from-[#d40000] to-[#d40000]/80" },
                  { icon: Facebook, color: "from-[#f2d2bd] to-[#f2d2bd]/80" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    size="icon"
                    className={`h-14 w-14 bg-gradient-to-r ${social.color} hover:scale-110 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <social.icon size={24} />
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#f2d2bd]/20 to-[#ffb0d7]/20 rounded-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-[#f2d2bd]/30 h-96 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-8xl">🗾</div>
                  <MapPin className="text-[#d40000] mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-gray-800">Find Us in Tokyo</h3>
                  <p className="text-gray-600">Located in the heart of Shibuya District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-50 to-[#f2d2bd]/10 border-t border-[#f2d2bd]/30 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 text-4xl font-bold">
              <Sparkles className="text-[#ffb0d7]" size={36} />
              <span className="bg-gradient-to-r from-[#d40000] to-[#ffb0d7] bg-clip-text text-transparent">
                Taeris
              </span>
            </div>
            <p className="text-gray-600 text-lg font-medium">Where Japanese culture meets premium coffee</p>
            <div className="flex justify-center items-center space-x-2 text-gray-500">
              <Heart className="text-[#ffb0d7]" size={16} />
              <span className="text-sm">© 2024 Taeris Coffee & Culture. Made with love in Tokyo.</span>
              <Heart className="text-[#ffb0d7]" size={16} />
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-gentle-float {
          animation: gentle-float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}



