import {FunctionComponent} from "react";
import {View} from "react-native";
import {Dialog, List, Text, useTheme,} from "react-native-paper";
import {ListItemType} from "../store/ItemList.types";
import {Style} from "react-native-paper/lib/typescript/src/components/List/utils";
import {spacing} from "../utils/spacing";
import {calculateCaloriesFromMacros, setTitleText} from "../utils/helpers";

type ItemPreviewDialogProps = {
    visible: boolean;
    pressedItem: ListItemType;
    hideDialog: () => void;
};

const ItemPreviewDialog: FunctionComponent<ItemPreviewDialogProps> = ({
                                                                          visible,
                                                                          hideDialog,
                                                                          pressedItem,
                                                                      }) => {
    const {
        colors: {primary, onSecondary},
    } = useTheme();
    const {
        name,
        quantity,
        status,
        costPerItem,
        macrosPerPiece: {fats, carbs, proteins},
        diaryDate,
    } = pressedItem;
    const listLeftIcon = (props: { color: string; style: Style }) => (
        <List.Icon {...props} icon="chevron-right"/>
    );

    const caloriesInfo = () => (
        <>
            <List.Item
                title={`calories in one piece: ${calculateCaloriesFromMacros({fats, carbs, proteins})}`}
                left={listLeftIcon}
            />
            <View style={{marginStart: spacing.spacing16}}>
                <List.Item
                    title={`proteins: ${proteins}`}
                    left={listLeftIcon}
                />
                <List.Item
                    title={`fats: ${fats}`}
                    left={listLeftIcon}
                />
                <List.Item
                    title={`carbs: ${carbs}`}
                    left={listLeftIcon}
                />
            </View>
        </>
    );

    return (
        <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{backgroundColor: onSecondary}}
        >
            <Dialog.Content style={{padding: 0, marginBottom: spacing.spacing16}}>
                <List.Section>
                    <List.Accordion
                        title={
                            <View style={{flexDirection: "row", gap: spacing.spacing16}}>
                                <List.Icon color={primary} icon="food"/>
                                <Text variant="titleMedium">{`${name} in your ${setTitleText(
                                    status
                                )}`}</Text>
                            </View>
                        }
                        titleNumberOfLines={2}
                        right={() => null}
                        expanded={true}
                        style={{
                            backgroundColor: onSecondary,
                        }}
                        titleStyle={{textAlign: "center"}}
                    >
                        <List.Item title={`amount: ${quantity}`} left={listLeftIcon}/>
                        <List.Item
                            title={`cost per item: ${costPerItem} PLN`}
                            left={listLeftIcon}
                        />
                        {caloriesInfo()}
                        {diaryDate && (
                            <List.Item
                                title={`Added on: ${diaryDate.toLocaleDateString()}`}
                                left={listLeftIcon}
                            />
                        )}
                    </List.Accordion>
                </List.Section>
            </Dialog.Content>
        </Dialog>
    );
};

export default ItemPreviewDialog;
