import { useState } from "react";

export const useHandleTodo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleToggleComplete = () => {
    setIsCompleted((prev) => !prev);
  };

  return { isEditing, isCompleted, handleToggleComplete, handleToggleEdit };
};
