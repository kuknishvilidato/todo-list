import { useEffect, useState } from "react";

function Button() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };
  
    
    
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

  }, [theme]);





  return (
    <button
      onClick={toggleTheme}
      className={`bg-main  p-[8px] w-[38px] rounded-[5px]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.1249 0.548798C11.3387 0.917354 11.321 1.3762 11.0791 1.72705C10.3455 2.79152 9.91599 4.08062 9.91599 5.47334C9.91599 9.12428 12.8757 12.084 16.5266 12.084C17.9194 12.084 19.2085 11.6545 20.2729 10.9208C20.6238 10.6791 21.0826 10.6613 21.4512 10.8751C21.8197 11.089 22.0319 11.4962 21.9961 11.9208C21.5191 17.567 16.7867 22 11.0178 22C4.93282 22 0 17.0672 0 10.9822C0 5.21328 4.43301 0.480873 10.0792 0.00392422C10.5038 -0.0319387 10.911 0.180242 11.1249 0.548798ZM8.17985 2.63461C4.70452 3.81573 2.20355 7.10732 2.20355 10.9822C2.20355 15.8502 6.14981 19.7964 11.0178 19.7964C14.8927 19.7964 18.1843 17.2955 19.3654 13.8202C18.4741 14.1232 17.5191 14.2875 16.5266 14.2875C11.6587 14.2875 7.71244 10.3413 7.71244 5.47334C7.71244 4.48086 7.87682 3.52582 8.17985 2.63461Z"
          fill="#F7F7F7"
        />
      </svg>
    </button>
  );
}

export default Button;
