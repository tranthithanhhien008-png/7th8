import React from "react";
import { useState } from "react";
import Headers from "../containers/Headers";
import LuxuryBridalCard from "../component/LuxuryBridalCard";
import ProductListPage from "./ProductListPage";
import {Product} from "../type/Product";

  const products = [
    {
      id: 1,
      name: "Áo cưới Haute Couture",
      images: ["/damcuoi/vaycuoi1.jpg"], // ảnh nằm trong public/damcuoi
      price: 42000000,
      oldPrice: 52000000,
      rating: 4.8,
      shortDesc:
        "Vải organza cao cấp, thêu tay tinh xảo, vừa vặn hoàn hảo cho cô dâu sang trọng.",
      tags: ["Handmade", "Limited"]
    },
    {
    id: 2,
    name: "Áo cưới pha lê hoàng gia",
    images: ["/damcuoi/vaycuoi2.jpg"],
    price: 52000000,
    rating: 4.9,
    shortDesc:
      "Thiết kế dáng công chúa với phần ngực đính pha lê và ren bạc tinh xảo, tay voan mỏng nhẹ tạo vẻ kiêu sa và lộng lẫy.",
    tags: ["Luxury", "Royal", "Princess"]
  },
    {
      id: 3,
      name: "Áo cưới ren vintage",
      images: ["/damcuoi/vaycuoi3.jpg"],
      price: 35000000,
      rating: 4.7,
      shortDesc:
        "Áo cưới phong cách cổ điển với chất liệu ren cao cấp và đường may tinh tế.",
      tags: ["Vintage", "Elegant"]
    },
   
  {
    id: 4,
    name: "Áo cưới hoa 3D cao cấp",
    images: ["/damcuoi/vaycuoi4.jpg"],
    price: 49000000,
    rating: 4.8,
    shortDesc:
      "Váy cưới tông hồng pastel sang trọng, phủ họa tiết hoa 3D nổi mềm mại, mang lại vẻ ngọt ngào và quý phái.",
    tags: ["Luxury", "Floral", "Romantic"]
  },
  {
    id: 5,
    name: "Áo cưới satin trễ vai quý phái",
    images: ["/damcuoi/vaycuoi5.jpg"],
    price: 36000000,
    oldPrice:46000000,
    rating: 4.9,
    shortDesc:
      "Váy cưới satin trắng bóng trễ vai, điểm ren hoa nổi tinh tế ở tà, tôn lên dáng vẻ thanh lịch và đẳng cấp.",
    tags: ["Luxury", "Satin", "Elegant"]
  },
  {
    id: 6,
    name: "Áo cưới tầng kim tuyến lộng lẫy",
    images: ["/damcuoi/vaycuoi6.jpg"],
    price: 53000000,
    rating: 5.0,
    shortDesc:
      "Váy cưới xếp tầng voan kim tuyến lấp lánh, phần ngực đính pha lê và ren cao cấp tạo hiệu ứng nổi bật trên sân khấu.",
    tags: ["Luxury", "Sparkle", "Glamorous"]
  },
  {
    id: 7,
    name: "Áo cưới satin tối giản sang trọng",
    images: ["/damcuoi/vaycuoi7.jpg"],
    price: 44000000,
    rating: 4.7,
    shortDesc:
      "Thiết kế satin trắng trơn với dáng công chúa tối giản, tập trung vào form váy hoàn hảo và độ bóng mềm mại của chất liệu cao cấp.",
    tags: ["Luxury", "Minimalist", "Princess"]
  },
  {
    id: 8,
    name: "Áo cưới ren cổ điển hoàng gia",
    images: ["/damcuoi/vaycuoi8.jpg"],
    price: 51000000,
    rating: 4.9,
    shortDesc:
      "Váy cưới trắng ngà với phần ngực và eo được trang trí ren cổ điển, chân váy phồng mang phong cách hoàng gia quyền quý.",
    tags: ["Luxury", "Royal", "Lace"]
  },
   {
    id: 9,
    name: "Áo cưới voan bồng tay dài vintage",
    images: ["/damcuoi/vaycuoi9.jpg"],
    price: 38000000,
    rating: 4.7,
    shortDesc:
      "Váy cưới tay dài bằng voan mỏng, phối ren họa tiết cổ điển và tùng váy bồng nhẹ tạo cảm giác vừa thanh lịch vừa hoài cổ.",
    tags: ["Vintage", "Voan", "Thanh lịch"]
  },
  {
    id: 10,
    name: "Áo cưới đính hoa 3D trắng ngọc",
    images: ["/damcuoi/vaycuoi10.jpg"],
    price: 45000000,
    rating: 4.9,
    shortDesc:
      "Chiếc váy tinh tế với những bông hoa 3D trắng ngọc nổi bật trên nền voan trong suốt, mang lại vẻ đẹp nữ thần và sang trọng tuyệt đối.",
    tags: ["Hoa 3D", "Sang trọng", "Voan"]
  },
  {
    id: 11,
    name: "Áo cưới xếp tầng cổ yếm gợi cảm",
    images: ["/damcuoi/vaycuoi11.jpg"],
    price: 41000000,
    rating: 4.8,
    shortDesc:
      "Thiết kế cổ yếm khoe bờ vai, tùng váy xếp tầng mềm mại tạo hiệu ứng bay bổng và sang trọng trong từng bước di chuyển.",
    tags: ["Xếp tầng", "Cổ yếm", "Sang trọng"]
  },
  {
    id: 12,
    name: "Áo cưới satin trơn dáng A tối giản",
    images: ["/damcuoi/vaycuoi12.jpg"],
    price: 37000000,
    rating: 4.7,
    shortDesc:
      "Váy cưới satin trắng trơn, dáng A cổ điển với thiết kế tối giản nhưng vẫn toát lên vẻ thanh lịch và cao cấp.",
    tags: ["Satin", "Tối giản", "Thanh lịch"]
  },
  {
    id: 13,
    name: "Áo cưới đuôi dài ren thêu hoàng gia",
    images: ["/damcuoi/vaycuoi13.jpg"],
    price: 52000000,
    rating: 5.0,
    shortDesc:
      "Váy cưới đuôi dài lộng lẫy với ren thêu thủ công, chi tiết hoàng gia tinh xảo dành cho những nàng dâu muốn tỏa sáng.",
    tags: ["Hoàng gia", "Ren thêu", "Sang trọng"]
  },
  {
    id: 14,
    name: "Áo cưới voan ngọc trai bồng bềnh",
    images: ["/damcuoi/vaycuoi22.jpg"],
    price: 48000000,
    rating: 4.9,
    shortDesc:
      "Lớp voan mềm mại đính ngọc trai tinh tế, phần tùng váy bồng nhẹ và cổ trái tim mang lại vẻ đẹp ngọt ngào và đẳng cấp.",
    tags: ["Ngọc trai", "Voan", "Ngọt ngào"]
  },
   {
    id:15,
    name: "Áo cưới công chúa ren trắng tinh khôi",
    images: ["/damcuoi/vaycuoi15.jpg"],
    price: 42000000,
    rating: 4.9,
    shortDesc:
      "Thiết kế dáng công chúa bồng bềnh với chất liệu ren trắng cao cấp, cổ vuông thanh lịch và tay phồng nhẹ nhàng tạo nét kiêu sa.",
    tags: ["Sang trọng", "Công chúa", "Ren"]
  },
  {
    id: 16,
    name: "Áo cưới đuôi cá trễ vai quyến rũ",
    images: ["/damcuoi/vaycuoi16.jpg"],
    price: 46000000,
    rating: 4.8,
    shortDesc:
      "Form đuôi cá ôm sát tôn dáng, phần vai trễ hở nhẹ cùng chi tiết đính đá tinh xảo mang lại vẻ đẹp gợi cảm và quý phái.",
    tags: ["Sang trọng", "Đuôi cá", "Đính đá"]
  },
  ];

export default function DamCuoi() {
  return (
    <ProductListPage
      title="Bộ Sưu Tập Đầm Cưới Sang Trọng"
      products={products}
    />
  );
}