import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import AddAccountButton from "./AddAccountButton";
import { AccountType, GlobalStateType } from "../Utils/types";
import AccountModal from "./AccountModal";

const AccountsDropDown: FC = () => {
  const blankAccount: AccountType = {
    label: "",
    saved: 0,
    goal: 0,
    date: Date.now(),
    id: ""
  };

  const listOfAccounts = useSelector(
    (state: GlobalStateType) => state.accounts.list
  );

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [account, setAccount] = useState<AccountType>(blankAccount);
  const [mode, setMode] = useState<string>("add");

  const [unselectedAccounts, setUnselectedAccounts] = useState<any>();

  const generateList = listOfAccounts.map((account, index, listOfAccounts) => (
    <TouchableOpacity
      key={account.id}
      style={styles.container}
      onPress={() => {
        const filteredArray: AccountType[] =
          listOfAccounts.filter((item, i) => i !== index) || [];
        setMode("edit");
        setAccount(account);
        setUnselectedAccounts(filteredArray);
        setIsVisible(true);
      }}
    >
      <Text style={styles.label}>{account.label}</Text>
      <Text style={styles.saved}>${account.saved.toLocaleString()}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.dropDownWrapper}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Income</Text>
       
      </View>
      <View style={styles.horizontalRule}></View>
      {generateList}
      <AccountModal
        account={account}
        unselectedAccounts={unselectedAccounts}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        mode={mode}
      />
      <AddAccountButton
        setAccount={setAccount}
        setIsVisible={setIsVisible}
        setMode={setMode}
        blankAccount={blankAccount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  label: {
    fontFamily: "Sarabun_300Light",
    width: 160,
    lineHeight: 24,
  },
  saved: {
    color: "#05C473",
    fontFamily: "Sarabun_600SemiBold",
    width: 80,
    textAlign: "right",
    lineHeight: 24,
  },
  dropDownWrapper: {
    alignSelf: "center",
    marginBottom: 10,
  },
  heading: {
    fontFamily: "Sarabun_700Bold",
    fontSize: 18,
    lineHeight: 28,
  },
  horizontalRule: {
    height: 1,
    width: 240,
    backgroundColor: "#212121",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AccountsDropDown;
