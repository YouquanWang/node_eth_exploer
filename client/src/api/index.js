import http from "../utils/http";
export function getGasPrice() {
  return http.post("/api/index/getGasPrice");
}
export function getHashrate() {
  return http.post("/api/index/getHashrate");
}
export function getBlockNumber() {
  return http.post("/api/index/getBlockNumber");
}
export function getBlockList() {
  return http.post("/api/index/getBlockList");
}
export function getTransactionList() {
  return http.post("/api/index/getTransactionList");
}
export function getBlockInfo(params) {
  return http.post("/api/block/blockInfo", params);
}
export function getBlockAllList(params) {
  return http.post("/api/block/blockList", params);
}
export function getTransactionAllList(params) {
  return http.post("/api/transaction/transactionList", params);
}
export function getTransactionInfo(params) {
  return http.post("/api/transaction/transactionInfo", params);
}
