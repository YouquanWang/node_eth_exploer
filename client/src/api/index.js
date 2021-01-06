import http from "../utils/http";
export function getCurrentInfo() {
  return http.post("/api/index/getCurrentInfo");
}
