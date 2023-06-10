import { StyleSheet } from "react-native";
import { spacing } from "./spacing";

import { theme } from "./theme";

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    margin: spacing.spacing16,
    gap: spacing.spacing16,
    paddingBottom: spacing.spacing16,
  },
  modal: {
    marginHorizontal: 16,
    marginVertical: 40,
    backgroundColor: theme.colors.onPrimary,
    borderRadius: 16,
  },
  modalViewContainer: {
    gap: spacing.spacing16,
    padding: spacing.spacing16,
  },
});
