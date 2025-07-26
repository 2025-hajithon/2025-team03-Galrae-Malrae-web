import {useEffect} from "react";
import {useSetAtom} from "jotai"; // 1. useSetAtom을 import 합니다.
import {LatitudeAtom, LongitudeAtom} from "../store/Atom"; // 1. 사용할 atom들을 import 합니다.

export const Map = () => {
  // 2. atom 값을 업데이트할 수 있는 setter 함수를 가져옵니다.
  const setLatitude = useSetAtom(LatitudeAtom);
  const setLongitude = useSetAtom(LongitudeAtom);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=35ec03b5d5e23563814c94201a910087&autoload=false&libraries=services,clusterer`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // 3. geolocation으로 얻은 위도, 경도 값으로 atom 상태를 업데이트합니다.
            setLatitude(lat);
            setLongitude(lng);

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
  }, [setLatitude, setLongitude]); // useEffect 의존성 배열에 setter 함수를 추가하는 것이 좋습니다.

  return <div id="map" style={{width: "100%", height: "100vh"}} />;
};
