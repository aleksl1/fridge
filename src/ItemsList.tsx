import {FunctionComponent, useContext, useMemo, useState} from "react";
import {View} from "react-native";
import {DataTable, Divider, Portal, Text} from "react-native-paper";
import {ItemStatus, ListItemType} from "../store/ItemList.types";
import {ItemListCtx} from "../store/ItemListCtx";
import AddToNextListDialog from "./AddToNextListDialog";
import CustomListItem from "./CustomListItem";
import ItemPreviewDialog from "./ItemPreviewDialog";
import FoodDiaryListItem from "./FoodDiaryListItem";
import {spacing} from "../utils/spacing";

export type PressedItemType = ListItemType & { max: number };

type ItemListProps = {
    type: ItemStatus;
};

const initialTotalCalories = {calories: 0, fats: 0, proteins: 0, carbs: 0}

const ItemList: FunctionComponent<ItemListProps> = ({type}) => {
    const {items, increment, decrement, removeItem, total} =
        useContext(ItemListCtx);
    const [addToNextListVisible, setAddToNextListVisible] = useState(false);
    const [pressedPreview, setPressedPreview] = useState<ListItemType>();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [pressedItem, setPressedItem] = useState<PressedItemType>({
        name: "",
        quantity: 0,
        status: type,
        max: 0,
    })
    const [totalCalories, setTotalCalories] = useState(initialTotalCalories)
    const {calories, fats, proteins, carbs} = totalCalories;
    const showAddToNextListDialog = (item: PressedItemType) => {
        setPressedItem(item);
        setAddToNextListVisible(true);
    };

    const showPreview = (item: ListItemType) => {
        setPressedPreview(item);
        setPreviewVisible(true);
    };

    const hideAddToNextListDialog = () => setAddToNextListVisible(false);

    const hidePreview = () => setPreviewVisible(false);

    const incrementPressed = (item: PressedItemType) => {
        if (item.max === pressedItem?.quantity) return;
        setPressedItem((prevState) => {
            return {...prevState, quantity: prevState?.quantity + 1};
        });
    };

    const decrementPressed = () => {
        if (pressedItem?.quantity === 1) return;
        setPressedItem((prevState) => {
            return {...prevState, quantity: prevState?.quantity - 1};
        });
    };
    const itemList = useMemo(
        () =>
            items.map((item, index) => {
                const {status} = item;
                if (status !== type) return;
                if (status === "foodDiary") {
                    const date = item.diaryDate?.toLocaleDateString()
                    const prevItemDate = items[index - 1].diaryDate?.toLocaleDateString();
                    const showDate = date !== prevItemDate || index === 0;
                    return (
                        <View key={`${item.name}-${item.status}`}
                              style={{gap: spacing.spacing8, marginTop: spacing.spacing16}}>
                            {showDate && <Text variant="titleSmall"
                                               style={{fontWeight: "bold"}}>Your diary on {date}</Text>}
                            <FoodDiaryListItem
                                item={item}
                                onItemPress={() => showPreview(item)}
                                onMinusPress={() => decrement(item)}
                                onPlusPress={() => increment(item)}
                                onDeletePress={() => {
                                    removeItem(item);
                                }}
                                onAddToNextListPress={() =>
                                    showAddToNextListDialog({...item, max: item.quantity})
                                }
                            /></View>
                    )
                }
                return (
                    <CustomListItem
                        key={`${item.name}-${item.status}`}
                        item={item}
                        onItemPress={() => showPreview(item)}
                        onMinusPress={() => decrement(item)}
                        onPlusPress={() => increment(item)}
                        onDeletePress={() => removeItem(item)}
                        onAddToNextListPress={() =>
                            showAddToNextListDialog({...item, max: item.quantity})
                        }
                    />
                );
            }),
        [items, increment, decrement, removeItem, total]
    );
    return (
        <View style={{gap: spacing.spacing8}}>
            {itemList}
            {type === "foodDiary" && <>
                <Divider/>
                <DataTable.Row>
                    <DataTable.Cell style={{flex: 2}}>Total calories:</DataTable.Cell>
                    <DataTable.Cell numeric>{calories}</DataTable.Cell>
                    <DataTable.Cell numeric>{fats}</DataTable.Cell>
                    <DataTable.Cell numeric>{proteins}</DataTable.Cell>
                    <DataTable.Cell numeric>{carbs}</DataTable.Cell>
                </DataTable.Row></>}
            <Portal>
                {pressedItem && (
                    <AddToNextListDialog
                        hideDialog={hideAddToNextListDialog}
                        visible={addToNextListVisible}
                        incrementPressed={incrementPressed}
                        decrementPressed={decrementPressed}
                        type={type}
                        pressedItem={pressedItem}
                    />
                )}
                {pressedPreview && (
                    <ItemPreviewDialog
                        visible={previewVisible}
                        hideDialog={hidePreview}
                        pressedItem={pressedPreview}
                    />
                )}
            </Portal>
        </View>
    );
};

export default ItemList;
