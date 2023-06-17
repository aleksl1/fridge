import { FC } from "react";
import { Text } from "react-native-paper";
import { CURRENCY } from "../../utils/variables";

type ExpenseSummaryProps = {
  totalExpenses: number;
};

const ExpenseSummary: FC<ExpenseSummaryProps> = ({ totalExpenses }) => {
  return (
    <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
      Your total expenses: {totalExpenses} {CURRENCY}
    </Text>
  );
};

export default ExpenseSummary;
