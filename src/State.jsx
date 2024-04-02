import { useState } from "react";



export const useProfileVisibility = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  return { isProfileVisible, setIsProfileVisible };
};
