import {useState, useEffect} from "react";
import apiClient from "../api/ApiClient";
import {RecommendCards} from "../components/RecommendCards";
import {mockPlaces} from "./TestCards";

export const RecommendCardApi = () => {
  const [places, setPlaces] = useState(mockPlaces);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await apiClient.get("/route/card");
        setPlaces(response.data);
      } catch (error) {
        console.error("데이터를 불러오는 데 실패했습니다.", error);
      }
    };
    fetchPlaces();
  }, []);

  return <RecommendCards places={places} />;
};
