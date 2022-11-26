import { useState } from "react";
import Information from "./ProductPages/Infotmation/Infotmation";
import ProductImgs from "./ProductPages/ProductImages/Images";
import AtributPage from "./ProductPages/AtributPage/AtributPage";
import Line from "./../../BaseComponents/Line/Line";

export default function AddProduct() {
  const [info, setInfo] = useState(false);
  const [img, setImg] = useState(false);
  const [atr, setAtr] = useState(true);
  const [result, setResult] = useState(false);
  let formData = new FormData();
  const [formInfo, setFormInfo] = useState([]);
  if (result) {
    console.log(formInfo);
    formData.append("name_uz", "");
    formData.append("name_ru", "");
    formData.append("name_en", "");
    formData.append("discount_price");
    formData.append("price");
    formData.append("count");
    formData.append("about_uz", "");
    formData.append("about_ru", "");
    formData.append("about_en", "");
    formData.append("image", []);
    formData.append("category_id");
    formData.append("country_id");
    formData.append("country_id");
    formData.append("status_id");
    formData.append("manufacturer_id");
    formData.append("attribute_id");
  }

  return (
    <div className="py-6 overflow-scroll h-[100vh] px-headerPaddingX">
      <div className="mb-6">
        <h2 className="font-bold text-2xl leading-8">Добавить продукт</h2>
      </div>
      <div className="bg-white p-6 rounded-xl">
        <ul className="flex items-center list-none space-x-4 w-addProductListWidth border-b-2">
          <li
            className={` font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}
          >
            Информация
            {info ? <Line /> : ""}
          </li>
          <li
            className={`font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}
          >
            Изображение
            {img ? <Line /> : ""}
          </li>
          <li
            className={`font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}
          >
            Атрибуты
            {atr ? <Line /> : ""}
          </li>
        </ul>
        <div>
          {info ? (
            <Information
              setInfoForm={setFormInfo}
              submitProduct={setInfo}
              imagesPage={setImg}
              atributPage={setAtr}
            />
          ) : (
            ""
          )}
          {img ? (
            <ProductImgs
              imgInfo={formInfo}
              setImgInfo={setFormInfo}
              atrPage={setAtr}
              imagePage={setImg}
              productPage={setInfo}
            />
          ) : (
            ""
          )}
          {atr ? (
            <AtributPage
              resultSubmit={setResult}
              atributPage={setAtr}
              imaPage={setImg}
              productBasic={setInfo}
              atributInfo={formInfo}
              setAtributInfo={setFormInfo}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
