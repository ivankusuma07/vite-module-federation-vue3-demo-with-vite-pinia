import { createRouter, createWebHistory, RouterView } from "vue-router";
// import { useCaseStore, useUserStore } from "@/stores";
// import { h } from "vue";
// import PageTwo from "vite-side/Two";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Layout.vue"),
  },
  // {
  //   path: "/page-two",
  //   name: "page2",
  //   component: () => PageTwo,
  // },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
});

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore();

//   // temp data (chris)
//   userStore.user = {
//     id: 0,
//     email: "test@test.com",
//     usertype: "main",
//     firstname: "14314222",
//     lastname: "134",
//     country: "KR",
//     stateprovince: "43",
//     phone: "123",
//     profession: "doctor",
//     userimage: null,
//     bio: null,
//   };

//   userStore.company = {
//     id: 6,
//     userid: 51,
//     name: "Clinic_test_1",
//     address: {
//       id: 274,
//       city: "2452435",
//       name: "test12344",
//       userid: 51,
//       country: "BE",
//       addrtype: "delivery",
//       nickname: "123_copy",
//       stateprovince: "VLG",
//     },
//     deliveryaddress: {
//       id: 295,
//       city: "123",
//       name: "test255",
//       userid: 51,
//       country: "BB",
//       addrtype: "delivery",
//       nickname: "1234",
//       stateprovince: null,
//     },
//     bilingaddress: null,
//     website: "1",
//     bio: null,
//     logo: null,
//     lablist: [
//       {
//         id: 60,
//         name: "adfadf",
//         email: "chrissong2@dmf3d.com",
//         phone: "01027222222",
//         address: {
//           id: 288,
//           city: "seoul",
//           name: "356356",
//           userid: 60,
//           country: "KR",
//           addrtype: "company",
//           nickname: "3563456",
//           stateprovince: null,
//         },
//         website: "",
//         specialty: "",
//       },
//     ],
//     createdt: "2023-04-25T05:07:23.000Z",
//     updatedt: "2024-03-08T08:46:52.000Z",
//   };

//   next();
// });
export default router;
