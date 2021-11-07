import React, { useReducer } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_RED":
      if (state.red + action.payload > 255 || state.red + action.payload < 0)
        return state;
      return { ...state, red: state.red + action.payload };

    case "CHANGE_GREEN":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      )
        return state;
      return { ...state, green: state.green + action.payload };

    case "CHANGE_BLUE":
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0)
        return state;
      return { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;
  const COLOR_INCREMENT = 5;

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ColorCounter
        color="Red"
        reduceColor={() =>
          dispatch({ type: "CHANGE_RED", payload: -COLOR_INCREMENT })
        }
        increaseColor={() =>
          dispatch({ type: "CHANGE_RED", payload: COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        reduceColor={() =>
          dispatch({ type: "CHANGE_GREEN", payload: -COLOR_INCREMENT })
        }
        increaseColor={() =>
          dispatch({ type: "CHANGE_GREEN", payload: COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        reduceColor={() =>
          dispatch({ type: "CHANGE_BLUE", payload: -COLOR_INCREMENT })
        }
        increaseColor={() =>
          dispatch({ type: "CHANGE_BLUE", payload: COLOR_INCREMENT })
        }
      />

      <View
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          height: 100,
          width: 100,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default SquareScreen;
