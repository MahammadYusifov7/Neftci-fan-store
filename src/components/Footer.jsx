import React, { useState } from "react";
import { FaCcMastercard, FaCcVisa, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const [topEmail, setTopEmail] = useState("");
  const [bottomEmail, setBottomEmail] = useState("");

  const [topError, setTopError] = useState("");
  const [bottomError, setBottomError] = useState("");

  const location = useLocation();

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleTopSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(topEmail)) {
      setTopError("E-mail ünvanı tələb olunur.");
      return;
    }

    setTopError("");
    alert("Abunə olundunuz!");
    setTopEmail("");
  };

  const handleBottomSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(bottomEmail)) {
      setBottomError("E-mail ünvanı tələb olunur.");
      return;
    }

    setBottomError("");
    alert("Abunə olundunuz!");
    setBottomEmail("");
  };

  return (
    <footer className="bg-black text-white px-4 md:px-8 py-8 md:py-10">

      {location.pathname === "/" && (
        <div className="flex flex-col items-center text-center gap-4 md:gap-5">
          <p className="text-lg md:text-xl font-bold">
            NEFTÇİ RƏSMİ MAĞAZA XƏBƏRLƏRİ
          </p>

          <p className="text-sm md:text-[16px] font-bold max-w-xl">
            Yeni məhsullar, endirimlər və daha çox şeylərdən xəbərdar olmaq
            üçün abunə olun!
          </p>

          <form
            onSubmit={handleTopSubmit}
            className="w-full max-w-sm"
          >
            <div className="flex items-center text-lg border-b-2 py-1">
              <input
                type="text"
                name="top-email"
                value={topEmail}
                onChange={(e) => {
                  setTopEmail(e.target.value);
                  setTopError("");
                }}
                className="bg-transparent placeholder:text-white outline-none px-2 w-full"
                placeholder="E-mail ünvanı"
              />

              <button
                type="submit"
                className="cursor-pointer text-xl shrink-0"
              >
                <PiEnvelopeSimple />
              </button>
            </div>

            {topError && (
              <p className="text-[#db3939] bg-[#fed9db] text-start text-sm mt-2 p-2">
                {topError}
              </p>
            )}
          </form>

          <p className="max-w-sm text-start text-[13px] leading-5">
            Bu sayt reCAPTCHA tərəfindən qorunur və Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Məxfilik Siyasəti və Xidmət Şərtləri
            </a>{" "}
            tətbiq edilir.
          </p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 mt-10 md:mt-14">
        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 underline underline-offset-4 capitalize">
          <ul className="flex flex-col gap-2 md:gap-4 cursor-pointer">
            <li><Link to="/aboutus">bizim haqqımızda</Link></li>
            <li><Link to="/search">mağaza</Link></li>
            <li><Link to="/contactus">bizimlə əlaqə</Link></li> 
          </ul>

          <ul className="flex flex-col gap-2 md:gap-4 cursor-pointer">
            <li><Link to="/login">hesab məlumatları</Link></li>
            <li><Link to="/privacy-policy">məxfilik siyasəti</Link></li>
            <li><Link to="/shipping-returns">çatdırılma və qaytarılma</Link></li>
          </ul>

          <ul className="flex flex-col gap-2 md:gap-4 cursor-pointer">
            <li>
              <a
                href="https://www.instagram.com/store.neftchi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/neftchitv"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/NeftciPFK/"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 w-full lg:max-w-md">
          <p className="text-sm md:text-[15px]">
            Son xəbərlər və yeniləmələr almaq üçün qeydiyyatdan keçin.
          </p>

          <form onSubmit={handleBottomSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="text"
                name="bottom-email"
                value={bottomEmail}
                onChange={(e) => {
                  setBottomEmail(e.target.value);
                  setBottomError("");
                }}
                className="bg-transparent outline-none px-3 py-3 w-full border"
                placeholder="E-mail ünvanı"
              />

              <button
                type="submit"
                className="bg-[#222] px-5 py-3 font-bold text-sm cursor-pointer whitespace-nowrap"
              >
                Qeydiyyatdan keçin
              </button>
            </div>

            {bottomError && (
              <p className="text-[#db3939] bg-[#fed9db] text-start text-sm mt-2 p-2">
                {bottomError}
              </p>
            )}
          </form>

          <p className="max-w-sm text-start text-[13px] leading-5">
            Bu sayt reCAPTCHA tərəfindən qorunur və Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Məxfilik Siyasəti və Xidmət Şərtləri
            </a>{" "}
            tətbiq edilir.
          </p>
        </div>
      </div>
      <ul className="text-3xl flex gap-5 bg-transparent py-9">
        <li><a href="https://www.youtube.com/neftchitv" target="_blank" rel="noopener noreferrer"><FiYoutube className="hover:text-[#ff0033] transition-all duration-200" /></a></li>
        <li><a href="https://www.instagram.com/store.neftchi/" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-[#f6076c] transition-all duration-200" /></a></li>
        <li><a href="https://www.linkedin.com/company/neftchi/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-[#0270ad] transition-all duration-200" /></a></li>
        <li><a href="https://t.me/s/neftci1937" target="_blank" rel="noopener noreferrer"><FaTelegram className="hover:text-[#27a2e1] transition-all duration-200" /></a></li>
        <li><a href="https://www.facebook.com/NeftciPFK/" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-[#0862f7] transition-all duration-200" /></a></li>
        <li><a href="https://www.tiktok.com/@neftchipfc" target="_blank" rel="noopener noreferrer"><FaTiktok className="hover:text-[#a45bbd] transition-all duration-200" /></a></li>
      </ul>

      <hr />

      <div className="flex justify-between items-center p-8 ">
        <p className="text-sm">Site by <span className="font-bold">Mahammad Yusifov</span></p>
        <ul className="flex gap-2 text-4xl">
          <li><FaCcMastercard /></li>
          <li><FaCcVisa /></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;