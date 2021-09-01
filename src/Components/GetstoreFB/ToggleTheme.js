import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../useContext/ToggleTheme";
const ToggleTheme = () => {
  const { ToggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Switch
        uncheckedIcon={true}
        checkedIcon={true}
        onColor={"#eee"}
        onChange={ToggleTheme}
        checked={true}
      />
    </div>
  );
};

export default ToggleTheme;
