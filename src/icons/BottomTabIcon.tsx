import { Image } from "react-native";
import { FC } from "react";

type Props = {
  iconType: "expenses" | "diary" | "fridge" | "list";
};
const BottomTabIcon: FC<Props> = ({ iconType }) => {
  switch (iconType) {
    case "fridge":
      return (
        <Image
          source={require(`../../assets/icons/fridgeIcon.png`)}
          style={{ width: 70, height: 60 }}
        />
      );

    case "expenses":
      return (
        <Image
          source={require(`../../assets/icons/expenseIcon.png`)}
          style={{ width: 50, height: 50 }}
        />
      );

    case "diary":
      return (
        <Image
          source={require(`../../assets/icons/foodDiaryIcon.png`)}
          style={{ width: 50, height: 50 }}
        />
      );

    case "list":
      return (
        <Image
          source={require(`../../assets/icons/shoppingListIcon.png`)}
          style={{ width: 50, height: 50 }}
        />
      );
  }
  return (
    <Image
      source={require(`../../assets/icons/shoppingListIcon.png`)}
      style={{ width: 50, height: 50 }}
    />
  );
};

export default BottomTabIcon;
