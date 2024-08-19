import { useState } from "react";
import { getItems } from "../util/getItems";

export const useItems = () => {
  return useState(getItems(10));
};
