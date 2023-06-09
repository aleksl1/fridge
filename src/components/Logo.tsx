import { FC } from "react";
import { Image, View } from "react-native";
import { spacing } from "../../utils/spacing";

const Logo: FC = () => {
  const logoSize = 40;
  return (
    <View style={{ marginHorizontal: spacing.spacing16 }}>
      <Image
        style={{ width: logoSize, height: logoSize }}
        source={require("../../assets/food_logo.png")}
      />
    </View>
  );
};

export default Logo;
