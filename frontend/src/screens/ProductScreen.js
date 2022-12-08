import { React, useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";
import { Link } from "react-router-dom";

export default function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  return <>{slug}</>;
}
