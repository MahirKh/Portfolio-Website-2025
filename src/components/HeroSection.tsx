import React from "react";
import { Button } from "./Button";
import { ArrowDownIcon, DownloadIcon } from "lucide-react";
export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-50 pt-16"
    >
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <span className="text-blue-600 font-medium text-lg inline-block">
              Hi there, I'm
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Mahir Khandaker
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-600 max-w-xl">
              I build fast, accessible, and responsive web experiences that look
              great and work even better. Let’s bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Button
                size="lg"
                onClick={() => window.open("/MahirKhandaker_Resume_12.pdf")}
              >
                <DownloadIcon
                  size={20}
                  className="mr-2"
                  onClick={() => window.open("/MahirKhandaker_Resume_12.pdf")}
                />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout}>
                Learn More
                <ArrowDownIcon size={20} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className=" rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEbVLO0YUkXIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694844549414?e=1755734400&v=beta&t=zpJXO6lXPJOAxnPdQRorVYLuddPzypdzJIzF1hA7hFY"
                alt="Mahir Khandaker Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
        <button
          onClick={scrollToAbout}
          className="hidden md:block text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <ArrowDownIcon size={32} />
        </button>
      </div>
    </section>
  );
};
