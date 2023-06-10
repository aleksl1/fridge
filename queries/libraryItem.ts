import "react-native-get-random-values";
import Parse from "parse/react-native";
import { ListItemType } from "../store/ItemList.types";
import { Alert } from "react-native";

type FetchLibraryItemType = ListItemType & { id: string }; //todo handle id across app?
const transformItems = (items: Parse.Object[]) => {
  return items.map((i) => {
    return {
      id: i.id,
      ...i.attributes,
    } as FetchLibraryItemType;
  });
};
export const fetchLibraryFoodItems = async (): Promise<
  FetchLibraryItemType[]
> => {
  const parseQuery = new Parse.Query("LibraryFoodItem");
  try {
    let items: Parse.Object[] = await parseQuery.find();
    return transformItems(items);
  } catch (error) {
    // @ts-ignore
    Alert.alert("Error!", error.message);
    return [];
  }
};
export const createLibraryFoodItem = async (
  item: ListItemType
): Promise<boolean> => {
  let LibraryFoodItem: Parse.Object = new Parse.Object("LibraryFoodItem");
  LibraryFoodItem.set("name", item.name);
  LibraryFoodItem.set("quantity", item.quantity);
  LibraryFoodItem.set("status", item.status);
  LibraryFoodItem.set("costPerItem", item.costPerItem);
  LibraryFoodItem.set("macrosPerPiece", item.macrosPerPiece);
  LibraryFoodItem.set("category", item.category);

  try {
    await LibraryFoodItem.save();
    return true;
  } catch (error) {
    // @ts-ignore
    Alert.alert("Error!", error.message);
    return false;
  }
};
