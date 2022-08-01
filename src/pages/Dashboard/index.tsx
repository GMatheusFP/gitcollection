import React from "react";

import * as styles from "./styles";
import logotype from "../../assets/imgs/logo.svg";

export default function Dashboard() {
  return (
    <>
      <img src={logotype} alt="GitCollection" />
      <styles.Title>Repositories List</styles.Title>

      <styles.Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Search</button>
      </styles.Form>
    </>
  );
}
