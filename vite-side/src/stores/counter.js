import { defineStore } from "pinia";
// import * as piniaModule from "pinia";

export const useStore = defineStore("store", {
  state: () => ({ count: 0, dataArray: [] }),
  getters: {
    getCount: () => {
      return this.count;
    },
  },
  actions: {
    increment() {
      // console.log("clicked", this.count++);
      this.count++;
    },
    addArray(data) {
      this.dataArray.push(data);
    },
  },
});

// declare global {
//   interface Window {
//     useStore: typeof useStore;
//   }
// }
// window.useStore = useStore;
// export { piniaModule };
