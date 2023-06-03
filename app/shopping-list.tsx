import {FunctionComponent} from "react";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";
import {ScrollView} from "react-native";
import {useQuery} from "@tanstack/react-query";

const ShoppingList: FunctionComponent = () => {
    const {data, isLoading, isError} = useQuery(['products'], async () => {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log("data", data);
        return data;
    });

    console.log("data,isLoading,isErrorr", data, isLoading, isError);

    return (
        <ScrollView contentContainerStyle={globalStyles.listContainer}>
            <ItemList type="shoppingList"/>
        </ScrollView>
    );
};

export default ShoppingList;
