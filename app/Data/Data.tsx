import { useState } from "react";
export var  [Cart, setCart]  = useState<any>([])
interface cartInterFace  {
  itemName:String,
  itemImage:String,
  itemPrice:number,
  itemRating:number,
  itemQuantity:number
}
 export const  dataImageBanner = [
  {
    title:"a",
    id:1,
    image: "https://www.thumua-laptopcu.com/wp-content/uploads/2019/01/thu-mua-laptop-cu-2.jpg"
  },
  {
    title:"b",
    id:2,
    image: "https://didongviet.vn/tin-tuc/wp-content/uploads/2019/08/man-hinh-Galaxy-Note-10-1.jpg"
  },
  {
    title:"c",
    id:3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYta7k9sjK-g7wHAyrEbaTvWJS94IciEyOw&usqp=CAU"
  },
  {
    title:"d",
    id:4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5iwsrQBkL4d9KuZ7HUZwNvFNp9N5cctcvQ&usqp=CAU"
  }
]

export const DataButtonSize = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Vàng",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Bạc",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Đồng",
  }
];

//ảnh, tên, giá gốc, giá sale, rating
export   const DataProduct = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    ProductName: "Iphone 8",
    timeStamp: "12:47 PM",
    Price: 5000000,
    PriceSale :4000000,
    PriceSold:30,
    rating: 4.2,
    ProductImage:
      "https://clickbuy.com.vn/uploads/2019/03/thumbiP8-1.jpg"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    ProductName: "galaxy s10",
    timeStamp: "11:11 PM",
    Price: 14100000,
    PriceSale :14000000,
    rating: 4.1,
    PriceSold:40,
    ProductImage:
      "https://didongmango.com/images/products/2021/07/17/resized/s10-white-2_1626524518.png"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    ProductName: "Galaxy A03s",
    timeStamp: "6:22 PM",
    Price: 30000000,
    PriceSale :2000000,
    rating: 3.2,
    PriceSold: 50,
    ProductImage: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-Galaxy-A03s-1.jpg"
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    ProductName: "Galaxy S20 FE ",
    timeStamp: "8:56 PM",
    Price: 3690000,
    PriceSale : 3000000,
    rating: 3.8,
    PriceSold: 50,
    ProductImage:
      "http://hanoimoi.com.vn/Uploads/images/tuandiep/2021/05/19/HNMO_SS_N20_865_2.jpeg"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    ProductName: " Galaxy Z Fold2 5G ",
    timeStamp: "12:47 PM",
    Price: 44000.000,
    PriceSale :34000000,
    rating: 4.1,
    PriceSold: 60,
    ProductImage:
      "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/4/637348308903991850_ss-z-fold-2-den-4.png"
  }
]
export  const HeadPhone = [
  {
    id: "tn1-",
    ProductName: "Wangmin 9800",
    timeStamp: "12:48 PM",
    Price: 500.000,
    ProductImage:
      "https://salt.tikicdn.com/ts/product/8f/2b/d9/a01af1b3c374981cecdcdda8701aa21d.jpg"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    ProductName: "Tai nghe phong vũ",
    timeStamp: "11:11 PM",
    Price: 150.000,
    ProductImage:
      "https://lh3.googleusercontent.com/proxy/BlGt6XLt0mWxtLV4083Uk3Uum0vyaBrsADFiR1ds-2dfUj1xQovhWjMUolB_jdit0wj1aMrhrz27qchF-9omnlggFA3rnMRswVZ5-DD-1QzhV6-6qBrnEmNNJDpxxs_JDG4"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    ProductName: "Tai nghe G-net",
    timeStamp: "6:22 PM",
    Price: 250.000,
    ProductImage: "https://vn-live-05.slatic.net/p/8c82b18995e9d32faa9b3d0ae3fb7e0e.jpg_720x720q80.jpg_.webp"
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    ProductName: "Tai nghe HG8329 ",
    timeStamp: "8:56 PM",
    Price: 369.000,
    ProductImage:
      "https://cf.shopee.vn/file/a75d043da3a6f4c876091b5d920e9f97"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    ProductName: " Tai nghe hoàng hà ",
    timeStamp: "12:47 PM",
    Price: 400.000,
    ProductImage:
      "https://cf.shopee.vn/file/b6033ea52f73fa6866991fe9b0671146_tn"
  }
]

// const [images] = useState([
//   { src: require("../../assets/smartphone.png"), context: "Điện thoại", key: "1" },
//   { src: require("../../assets/headphones.png"), context: "Tai nghe", key: "2" },
//   { src: require("../../assets/monitor.png"), context: "Màn hình", key: "3" },
//   { src: require("../../assets/printer.png"), context: "Máy in", key: "4" }
// ]);
export const  dataItemCarouse = [
  {
    title:"a",
    id:1,
    image: "https://www.thumua-laptopcu.com/wp-content/uploads/2019/01/thu-mua-laptop-cu-2.jpg"
  },
  {
    title:"b",
    id:2,
    image: "https://didongviet.vn/tin-tuc/wp-content/uploads/2019/08/man-hinh-Galaxy-Note-10-1.jpg"
  },
  {
    title:"c",
    id:3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYta7k9sjK-g7wHAyrEbaTvWJS94IciEyOw&usqp=CAU"
  },
  {
    title:"d",
    id:4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5iwsrQBkL4d9KuZ7HUZwNvFNp9N5cctcvQ&usqp=CAU"
  }
]



//ảnh, tên, giá gốc, giá sale, rating
export   const dataProduct = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    ProductName: "Iphone 8",
    timeStamp: "12:47 PM",
    Price: 5000000,
    PriceSale :4000000,
    rating: 4.2,
    sold:20,
    ProductImage:
      "https://clickbuy.com.vn/uploads/2019/03/thumbiP8-1.jpg"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    ProductName: "galaxy s10",
    timeStamp: "11:11 PM",
    Price: 14100000,
    PriceSale :14000.000,
    rating: 4.1,
    sold:30,
    ProductImage:
      "https://didongmango.com/images/products/2021/07/17/resized/s10-white-2_1626524518.png"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    ProductName: "Galaxy A03s",
    timeStamp: "6:22 PM",
    Price: 30000000,
    PriceSale :2000000,
    rating: 3.2,
    sold:43,
    ProductImage: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-Galaxy-A03s-1.jpg"
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    ProductName: "Galaxy S20 FE ",
    timeStamp: "8:56 PM",
    Price: 3690000,
    PriceSale : 3000.000,
    rating: 3.8,
    sold:32,
    ProductImage:
      "http://hanoimoi.com.vn/Uploads/images/tuandiep/2021/05/19/HNMO_SS_N20_865_2.jpeg"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    ProductName: " Galaxy Z Fold2 5G ",
    timeStamp: "12:47 PM",
    Price: 44000.000,
    PriceSale :34000000,
    rating: 4.1,
    sold:50,
    ProductImage:
      "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/4/637348308903991850_ss-z-fold-2-den-4.png"
  }
]
export  const data2 = [
  {
    id: "tn1-",
    ProductName: "Wangmin 9800",
    timeStamp: "12:48 PM",
    Price: 500.000,
    ProductImage:
      "https://salt.tikicdn.com/ts/product/8f/2b/d9/a01af1b3c374981cecdcdda8701aa21d.jpg"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    ProductName: "Tai nghe phong vũ",
    timeStamp: "11:11 PM",
    Price: 150.000,
    ProductImage:
      "https://lh3.googleusercontent.com/proxy/BlGt6XLt0mWxtLV4083Uk3Uum0vyaBrsADFiR1ds-2dfUj1xQovhWjMUolB_jdit0wj1aMrhrz27qchF-9omnlggFA3rnMRswVZ5-DD-1QzhV6-6qBrnEmNNJDpxxs_JDG4"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    ProductName: "Tai nghe G-net",
    timeStamp: "6:22 PM",
    Price: 250.000,
    ProductImage: "https://vn-live-05.slatic.net/p/8c82b18995e9d32faa9b3d0ae3fb7e0e.jpg_720x720q80.jpg_.webp"
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    ProductName: "Tai nghe HG8329 ",
    timeStamp: "8:56 PM",
    Price: 369.000,
    ProductImage:
      "https://cf.shopee.vn/file/a75d043da3a6f4c876091b5d920e9f97"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    ProductName: " Tai nghe hoàng hà ",
    timeStamp: "12:47 PM",
    Price: 400.000,
    ProductImage:
      "https://cf.shopee.vn/file/b6033ea52f73fa6866991fe9b0671146_tn"
  }
]
export const background = require("../assets/images/backgroundaccount.jpg");
export const backgroundImage = require("../assets/images/backgroundaccount.jpg");
