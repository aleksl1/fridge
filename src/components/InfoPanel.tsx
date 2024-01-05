import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { theme } from "../../utils/theme";

type InfoPanelProps = {
  text: string;
};

const InfoPanel: FC<InfoPanelProps> = ({ text }) => {
  const [showPanel, setShowPanel] = useState(true);
  if (!showPanel) return null;

  return (
    <View style={styles.infoPanel}>
      <Text variant="bodyMedium">{text}</Text>
      <View>
        <Button mode="contained-tonal" onPress={() => setShowPanel(false)}>
          OK
        </Button>
      </View>
    </View>
  );
};

export default InfoPanel;

const styles = StyleSheet.create({
  infoPanel: {
    backgroundColor: theme.colors.secondary,
    padding: 16,
    borderRadius: 20,
    gap: 16,
  },
});
