import {
  productOp,
  techOp,
} from "../../assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: 1,
    categoryName: "Product",
    description: "Test your Product Accumen",
    categoryImage: productOp,
  },
  {
    _id: 2,
    categoryName: "Tech",
    categoryDescription: "Test your Tech Accumen",
    categoryImage: techOp,
  },
];
