import { useEffect, useState } from "react";

function Hero() {
  const [navigator, setNavigator] = useState(1);

  useEffect(() => {
    let timer;
    timer = setInterval(() => setNavigator((prev) => prev + 1), 5000);
    return () => clearInterval(timer);
  });

  return (
    <section
      id="hero"
      className="bg-dark flex flex-col lg:flex-row justify-between lg:pr-12 pt-[22px] pb-[60px]"
    >
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-20">
          <span
            className="flex justify-center items-center rounded-full w-4 h-4 bg-primary-gray cursor-pointer"
            onClick={() => setNavigator(1)}
          >
            <span
              className={`flex justify-center items-center w-[13px] h-[13px] rounded-full bg-dark transition-opacity ease duration-200 ${
                navigator % 2 !== 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="inline-block w-[10px] h-[10px] rounded-full bg-primary"></span>
            </span>
          </span>
          <span className="inline-block h-16 w-0.5 bg-primary"></span>
          <span
            className="flex justify-center items-center rounded-full w-4 h-4 bg-primary-gray cursor-pointer"
            onClick={() => setNavigator(2)}
          >
            <span
              className={`flex justify-center items-center w-[13px] h-[13px] rounded-full bg-dark transition-opacity ease duration-200 ${
                navigator % 2 === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="inline-block w-[10px] h-[10px] rounded-full bg-primary"></span>
            </span>
          </span>
        </div>
        <div className="relative w-fit md:w-[600px] lg:w-[642.44px] z-10">
          <div className="h-[22rem] overflow-hidden"></div>
          <div
            className={`w-[300px] sm:w-full absolute top-0 overflow-hidden transition-transform ease -z-10 ${
              navigator % 2 !== 0 ? "" : "-translate-y-[24rem]"
            }`}
          >
            <div className="flex flex-col gap-6 pt-28 md:pt-8 lg:pt-24">
              <h3 className="font-bold text-2xl sm:text-[48px] sm:leading-[54px]">
                Build More{" "}
                <span className="relative">
                  Relationships
                  <svg
                    width="296"
                    height="11"
                    viewBox="0 0 296 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="bottom-0 right-0 absolute"
                  >
                    <path
                      d="M23.851 3.04731C30.2867 2.5926 36.724 2.22851 43.1606 1.82414C45.284 1.68638 47.4202 1.64916 49.5446 1.56174C54.1564 1.3705 58.7684 1.18933 63.3803 0.998087C65.9449 0.89292 68.5203 0.777499 71.0851 0.682401C71.8337 0.659271 72.5713 0.636313 73.32 0.623252C74.9938 0.594057 76.6679 0.584969 78.3418 0.565843C85.9508 0.443191 93.5709 0.320366 101.18 0.187645C102.997 0.155953 104.803 0.164727 106.62 0.153174C111.114 0.125154 115.597 0.10743 120.079 0.0796027C125.146 0.0516644 130.2 -0.0164076 135.268 0.0160688C143.463 0.0544117 151.648 0.103065 159.844 0.141408C164.592 0.169385 169.327 0.147175 174.076 0.235567C182.252 0.395123 190.417 0.544808 198.592 0.694295C203.055 0.777612 207.528 0.830549 211.991 0.98435C220.445 1.27 228.898 1.54555 237.351 1.83121C241.87 1.98405 246.387 2.07647 250.897 2.35034C259.321 2.85809 267.735 3.36604 276.159 3.87379C277.978 3.98307 279.797 4.09232 281.617 4.2016C285.255 4.42015 288.875 4.80022 292.504 5.10959C292.736 5.13576 292.957 5.16214 293.188 5.17825C293.62 5.28152 294.009 5.47615 294.333 5.76259C294.814 6.1873 295.1 6.78666 295.111 7.40088C295.121 8.01509 294.857 8.62401 294.391 9.07531C293.968 9.47549 293.226 9.85109 292.586 9.79175C288.207 9.41489 283.838 9.01769 279.46 8.7516C275.392 8.51033 271.334 8.2588 267.265 8.01753C262.833 7.75239 258.4 7.48723 253.967 7.2221C252.181 7.11225 250.394 6.96214 248.598 6.90283C241.687 6.67084 234.777 6.44888 227.867 6.21689C223.558 6.07047 219.248 5.93415 214.939 5.78773C213.154 5.72823 211.379 5.64837 209.594 5.609C202.751 5.47655 195.898 5.36441 189.056 5.25209C184.902 5.18354 180.759 5.10473 176.606 5.03617C175.206 5.01022 173.818 4.97399 172.419 4.96817C165.027 4.93595 157.636 4.91383 150.245 4.89167C146.114 4.87308 141.994 4.86435 137.863 4.84576C136.398 4.84109 134.922 4.81646 133.457 4.83194C125.836 4.89437 118.215 4.95683 110.594 5.01926C105.836 5.05189 101.089 5.09438 96.3325 5.18743C88.2395 5.34874 80.1463 5.49997 72.0642 5.66109C70.4676 5.68894 68.872 5.77725 67.2762 5.85544C62.8077 6.05425 58.3502 6.25286 53.8817 6.45167C50.5358 6.60068 47.1899 6.74965 43.833 6.89885C41.4556 7.00076 39.0909 7.20318 36.7146 7.3655C29.7283 7.82982 22.7424 8.3143 15.768 8.82877C13.9969 8.96038 12.2262 9.1121 10.4555 9.26385C8.55263 9.41791 6.64996 9.58204 4.75933 9.80639C4.46272 9.85185 4.1773 9.90722 3.88103 9.97282C3.13474 10.1268 2.41829 10.0991 1.74043 9.75835C1.11799 9.43682 0.645858 8.89108 0.436566 8.26018C0.0169563 6.93797 0.873035 5.50283 2.32004 5.10492C3.59175 4.76042 4.91082 4.60653 6.21906 4.46285C7.12059 4.36654 8.01093 4.26036 8.91246 4.16406C10.6385 3.9728 12.3768 3.86185 14.1035 3.71087C17.3486 3.46289 20.6056 3.27515 23.851 3.04731Z"
                      fill="#FFDB5C"
                    />
                  </svg>
                </span>
                . Close More Deals. Automate Everything In Between.
              </h3>
              <p className="font-light text-xl leading-7 sm:w-[550.39px]">
                The relationship intelligence & deal flow platform designed by
                ex-investors for{" "}
                <span className="inline-block bg-secondary text-dark font-medium px-2.5 rounded-full">
                  Venture Capital
                </span>
              </p>
            </div>
            <div
              className={`flex flex-col gap-6 pt-36 ${
                navigator % 2 !== 0 ? "invisible" : "visible"
              }`}
            >
              <h3 className="sm:w-[555px] font-bold text-2xl sm:text-[48px] sm:leading-[54px]">
                Stop Wasting Hours On Outdated Spreadsheets And Clunky{" "}
                <span className="relative">
                  CRMs
                  <svg
                    width="135"
                    height="11"
                    viewBox="0 0 135 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="bottom-0 right-0 absolute"
                  >
                    <path
                      d="M10.8074 3.73392C13.7338 3.32047 16.663 2.98932 19.591 2.62159C20.5568 2.49632 21.5309 2.46233 22.4983 2.38278C24.5986 2.20874 26.6991 2.04383 28.7994 1.86979C29.9673 1.77408 31.14 1.66905 32.3082 1.58248C32.6493 1.56142 32.9854 1.54051 33.3268 1.52859C34.09 1.50193 34.8538 1.49354 35.6173 1.47603C39.0871 1.36402 42.5619 1.25185 46.0313 1.1307C46.8597 1.10177 47.6844 1.10958 48.5135 1.09894C50.5636 1.07312 52.6091 1.05665 54.6542 1.03101C56.9657 1.00521 59.2709 0.942979 61.5844 0.972046C65.3257 1.00618 69.0623 1.04967 72.8035 1.08381C74.9711 1.10881 77.132 1.08825 79.3014 1.16812C83.0365 1.31232 86.7662 1.44756 90.501 1.58262C92.5396 1.6579 94.5822 1.7056 96.623 1.84489C100.488 2.10357 104.352 2.35308 108.217 2.61177C110.283 2.75018 112.347 2.83373 114.412 3.08203C118.268 3.5424 122.12 4.00295 125.977 4.46331C126.81 4.56239 127.643 4.66145 128.475 4.76053C130.141 4.95868 131.802 5.3035 133.466 5.58412C133.572 5.60787 133.674 5.63181 133.78 5.64641C133.979 5.74015 134.161 5.91686 134.316 6.17693C134.546 6.56256 134.69 7.10679 134.71 7.66453C134.729 8.22228 134.623 8.77523 134.421 9.18508C134.238 9.54851 133.908 9.88964 133.614 9.8358C131.607 9.49396 129.603 9.13365 127.599 8.89238C125.737 8.67363 123.879 8.44557 122.016 8.22682C119.987 7.98643 117.958 7.74602 115.928 7.50563C115.11 7.40603 114.291 7.26988 113.47 7.21617C110.311 7.00608 107.152 6.80511 103.993 6.59502C102.022 6.46243 100.053 6.339 98.0823 6.20641C97.2661 6.15252 96.4542 6.08015 95.6386 6.04455C92.5126 5.92485 89.3823 5.82359 86.257 5.72218C84.3596 5.66027 82.467 5.58905 80.5696 5.52715C79.9304 5.5037 79.2958 5.47091 78.6572 5.46575C75.2831 5.43711 71.9093 5.41764 68.5355 5.39814C66.6498 5.3816 64.7694 5.37402 62.8837 5.35748C62.2149 5.35337 61.5405 5.33112 60.8724 5.3453C57.3958 5.40262 53.9191 5.45999 50.4424 5.51731C48.2717 5.54734 46.1065 5.58632 43.9378 5.67121C40.248 5.81837 36.558 5.95637 32.8733 6.10335C32.1453 6.12877 31.4192 6.2091 30.6927 6.28024C28.6581 6.46114 26.6284 6.64186 24.5938 6.82277C23.0703 6.95836 21.5468 7.09391 20.0183 7.22968C18.9357 7.32241 17.8614 7.50643 16.7807 7.65402C13.6033 8.07623 10.4265 8.51675 7.25569 8.9845C6.45052 9.10417 5.646 9.24208 4.84147 9.38003C3.97669 9.52008 3.11222 9.66928 2.25469 9.87317C2.1204 9.91447 1.99146 9.96477 1.85781 10.0244C1.52086 10.1643 1.19321 10.1391 0.875765 9.8298C0.584058 9.53788 0.355642 9.04235 0.245158 8.46948C0.0222589 7.26887 0.378894 5.96559 1.02984 5.60415C1.60204 5.29122 2.2004 5.15136 2.79406 5.02078C3.20321 4.93326 3.60703 4.83676 4.01618 4.74924C4.79935 4.57542 5.59012 4.47453 6.37456 4.33728C7.84966 4.11183 9.3317 3.94108 10.8074 3.73392Z"
                      fill="#FFDB5C"
                    />
                  </svg>
                </span>
              </h3>
              <p className="font-light text-xl leading-7 w-full lg:w-[550.39px]">
                4Degrees platform helps you{" "}
                <span className="inline-block bg-secondary text-dark font-medium px-1 rounded-full">
                  eliminate busywork
                </span>{" "}
                and manage your deals and relationships effortlessly.
              </p>
            </div>
          </div>
          <form className="bg-dark pb-[6.75rem] w-full sm:w-[536.37px]">
            <div className="my-10 flex bg-white rounded-full overflow-hidden">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="outline-none text-black pl-8 placeholder:text-dark flex-grow"
              />
              <button
                className="m-1 text-sm w-[100px] sm:w-[220.15px] border-[1.5px] border-primary bg-primary px-2 lg:px-6 py-3 rounded-full flex justify-center gap-1.5 *:"
                type="submit"
              >
                Request A Demo
                <img src="/icons/arrow_forward_white.svg" alt="arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative mx-10 md:mx-auto lg:mx-0">
        <img src="/images/hero_dashboard.png" alt="dashboard" className="" />
        <img
          src="/images/hexagon.svg"
          alt="dashboard"
          className="absolute bottom-3 left-24"
        />
      </div>
    </section>
  );
}

export default Hero;
