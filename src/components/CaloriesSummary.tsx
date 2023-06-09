import { FC } from "react";
import { StyleProp, TextStyle } from "react-native";
import { DataTable } from "react-native-paper";
import { TotalCalories } from "../ItemsList";

type CaloriesSummaryProps = {
  totalCalories: TotalCalories;
};

const CaloriesSummary: FC<CaloriesSummaryProps> = ({totalCalories}) => {
    const { calories, fats, proteins, carbs } = totalCalories;
    const cellTextStyle: StyleProp<TextStyle> = { fontWeight: "bold" };
  return ( <DataTable.Row>
      <DataTable.Cell textStyle={cellTextStyle} style={{ flex: 2 }}>
          Total calories:
      </DataTable.Cell>
      <DataTable.Cell textStyle={cellTextStyle} numeric>
          {calories}
      </DataTable.Cell>
      <DataTable.Cell textStyle={cellTextStyle} numeric>
          {fats}
      </DataTable.Cell>
      <DataTable.Cell textStyle={cellTextStyle} numeric>
          {proteins}
      </DataTable.Cell>
      <DataTable.Cell textStyle={cellTextStyle} numeric>
          {carbs}
      </DataTable.Cell>
  </DataTable.Row> );
}
 
export default CaloriesSummary;


 
