import React, { FC, useState } from "react";
import AnimationComponent from "../animations/AnimationComponent";
import { useFocusEffect } from "expo-router";

const EmptyListInfo: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  useFocusEffect(() => {
    setIsFocused(true);
    return () => setIsFocused(false);
  });
  return isFocused ? <AnimationComponent /> : null;
};

export default EmptyListInfo;
