import {useEffect} from "react";

export const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=35ec03b5d5e23563814c94201a910087&autoload=false&libraries=services,clusterer`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        // 지도 초기화 로직 작성
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 중심 좌표 (서울)
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const locPosition = new window.kakao.maps.LatLng(lat, lng);

            map.setCenter(locPosition);

            new window.kakao.maps.Marker({
              map,
              position: locPosition,
            });
          });
        }
      });
    };
    document.head.appendChild(script);
  }, []);
  return <div id="map" style={{width: "100%", height: "100vh"}} />;
};
