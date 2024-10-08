import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import logo from "../assets/logo.png";

export const Header = () => {
  const networks = [
    { href: "https://github.com/jops2205", icon: <GithubLogo weight="bold" /> },
    { 
      href: "https://www.linkedin.com/in/jops2205", 
      icon: <LinkedinLogo weight="bold" />,
    },
  ];

  return (
    <header 
      className={`
        px-6 
        py-4 
        flex 
        justify-between 
        items-center 
        border-b-2 
        border-zinc-600/50
        sm:px-8
        sm:py-6
      `}
    >
      <img src={logo} alt="Linha de Código" className="w-16 sm:w-20" />
      <ul className="flex gap-2.5 sm:gap-3">
        {networks.map(({ href, icon }) => (
          <li key={Math.random()}>
            <a 
              href={href} 
              target="_blank" 
              className={`
                text-3xl 
                text-zinc-50 
                transition-colors 
                hover:text-french-lime
                sm:text-4xl
              `}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};