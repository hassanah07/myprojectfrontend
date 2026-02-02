import React from "react";
import { X, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="relative py-8 px-4 border-t border-transparent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400">
            Hassan © 2026 Dev & Design. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { icon: ExternalLink, name: "Portfolio", link: "#" },
              { icon: X, name: "Twitter", link: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
                title={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
