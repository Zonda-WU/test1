<template>
    <div>
      <h1>Diamond Trace</h1>
  
      <div>
        <h3>Get Diamond Info</h3>
        <input v-model="diamondID" placeholder="Enter Diamond ID" />
        <button @click="fetchDiamondInfo">Get Info</button>
        <div v-if="diamondInfo">
          <p><strong>Origin:</strong> {{ diamondInfo.origin }}</p>
          <p><strong>Category:</strong> {{ diamondInfo.category }}</p>
          <p><strong>Cut Time:</strong> {{ diamondInfo.cutTime }}</p>
          <p><strong>Unique ID:</strong> {{ diamondInfo.uniqueID }}</p>
          <p><strong>Certificate:</strong> {{ diamondInfo.certificate }}</p>
          <p><strong>Transaction:</strong> {{ diamondInfo.transaction }}</p>
        </div>
      </div>
  
      <div>
        <h3>Record Mining</h3>
        <input v-model="miningID" placeholder="Diamond ID" />
        <input v-model="origin" placeholder="Origin" />
        <input v-model="category" placeholder="Category" />
        <button @click="recordMining">Record Mining</button>
      </div>
    </div>
  </template>
  
  <script>
  import { getDiamondInfo, recordMining } from "../utils/web3";
  
  export default {
    data() {
      return {
        diamondID: "",
        miningID: "",
        origin: "",
        category: "",
        diamondInfo: null,
      };
    },
    methods: {
      // 获取钻石信息
      async fetchDiamondInfo() {
        if (this.diamondID) {
          try {
            this.diamondInfo = await getDiamondInfo(this.diamondID);
          } catch (error) {
            console.error("Error fetching diamond info:", error);
          }
        }
      },
      // 记录矿山信息
      async recordMining() {
        if (this.miningID && this.origin && this.category) {
          try {
            await recordMining(this.miningID, this.origin, this.category);
            alert("Mining record added successfully!");
          } catch (error) {
            console.error("Error recording mining data:", error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 可以添加一些样式来美化页面 */
  </style>
  