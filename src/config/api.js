// import _ from "lodash";
const localHost = "http://127.0.0.1:8000";

// path("upload/", views.upload),
// path("getlist/", views.getFileList),
// path("info/<int:id>/", views.getInfo),
// path("getfile/<str:type>/<int:id>/", views.getFile),
// path('delete/<str:name>/', views.delete),
// path('check/byname/<str:name>/', views.checkDoneByName),
// path("123", views.test);

const api = {
  upload: "/api/v1/files/upload/",
  getlist: "/api/v1/files/getlist/",
  info: "/api/v1/files/info/",
  getFileById: "/api/v1/files/getfile/byid/",
  getFileByName: "/api/v1/files/getfile/byname/",
  getFileByLrByName: "/api/v1/files/getfile/byname/lr/",
  getFileByHrByName: "/api/v1/files/getfile/byname/hr/",
  deleteFileByName: "/api/v1/files/delete/byname/",
  deleteFileById: "/api/v1/files/delete/byid/",
  checkDoneByName: "/api/v1/files/check/byname/",
  test: "/api/v1/files/123/",
};
for (const key in api) {
  api[key] = localHost + api[key];
}
export default api;
