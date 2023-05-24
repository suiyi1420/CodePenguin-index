import { useEffect, useState } from "react";
import "./index.css";

const Header = () => {
  const [tag, setTag] = useState("");
  const menu = {
    "/": "首页",
    "/course": "课程体系",
    "/teachingModel": "课程特色",
    "/about": "关于我们",
  };

  useEffect(() => {
    const url = window.location.href;
    const urlTags = url.split("/");
    setTag("/" + urlTags[urlTags.length - 1]);
    console.log("tag:/" + urlTags[urlTags.length - 1]);
  }, []);
  const renderMenu = (urlTag) => {
    let list = [];
    for (let item in menu) {
      console.log(item, urlTag);
      list.push(
        <a
          href={item}
          className={
            urlTag === item ? "nuxt-link-exact-active nuxt-link-active" : ""
          }
        >
          <li
            className={`ea-li ${urlTag === item ? "active" : ""}`}
            data-v-451e1bb8=""
          >
            {menu[item]}
          </li>
        </a>
      );
    }
    return list;
  };
  return (
    <>
      <div className="module-navbar" data-v-451e1bb8="">
        <div className="navbar-area" data-v-451e1bb8="">
          <a href="/" data-v-451e1bb8="">
            <div className="icon-img-cover" data-v-451e1bb8="">
              <img
                src="/logo.png"
                alt=""
                className="icon-img"
                style={{ marginTop: "5px", height: 75 }}
                data-v-451e1bb8=""
              />
            </div>
          </a>
          <ul className="navbar" data-v-451e1bb8="">
            {renderMenu(tag)}
            {/* <a
              href="/admin"
              target="_blank"
              className="stu_login"
              data-v-451e1bb8=""
            >
              学员登录
            </a> */}
          </ul>
          <div className="right-info" data-v-451e1bb8="">
            <a
              href="/admin"
              target="_blank"
              className="stu_login"
              data-v-451e1bb8=""
              style={{ marginTop: 0, lineHeight: "unset" }}
            >
              学员登录
            </a>
            {/* <i
              className="fa-phone"
              style="color:#ff0229;"
              data-v-451e1bb8=""
            ></i>
            <span className="bold" style="color:#212121;" data-v-451e1bb8="">
              400-6250-219
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
