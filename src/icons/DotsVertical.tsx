import { Image, Pressable, PressableProps, View } from "react-native";
import { FC } from "react";

const DotsVertical: FC<PressableProps> = (props) => {
  return (
    <Pressable
      style={{
        width: 54,
        height: 54,
      }}
      {...props}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require(`../../assets/icons/icons8-menu-vertical-100.png`)}
          style={{ width: 20, height: 20 }}
        />
      </View>
    </Pressable>
  );
};

export default DotsVertical;
