import HTTP from "./http";

export default function Addcomment(data) {
    console.log(data)
  return function (dispatch) {
    return HTTP.post("/lecturer/addcomment",data).then((res) => {
        console.log('添加',res);
    //   if (res.data.code === 0) {
    //   }
      return res.data;
    });
  };
}