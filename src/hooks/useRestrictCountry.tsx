import React from "react";

const blackListCoutries = ["JP"];

const useRestrictCountry = () => {
  const [code, setCode] = React.useState<string>("");
  const [isBlocked, setIsBlocked] = React.useState<boolean>(false);
  const getIp = async (url: string) => {
    try {
      const reqIp = await fetch(url, { method: "GET" });
      const res = await reqIp.json();
    } catch (error) {
      console.error(error);
    }
  };
  const getCountryCode = async (url: string) => {
    try {
      const reqCode = await fetch(url, { method: "GET" });
      const res = await reqCode.json();
      setCode(res.country_code);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    // getIp("https://api.ipify.org/?format=json");
    getCountryCode(
      "https://geolocation-db.com/json/0daad5e0-82e7-11ee-92e0-f5d620c7dcb4",
    );
    if (blackListCoutries.includes(code)) setIsBlocked(true);
    else setIsBlocked(false);
  }, [code]);

  return isBlocked;
};

export default useRestrictCountry;
