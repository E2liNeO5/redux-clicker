import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { actions as hitActions } from "../store/hit.slice"
import { actions as enemyActions } from "../store/enemy.slice"
import { actions as playerActions } from "../store/player.slice"
import { useAppDispatch } from "./typedHooks"

const rootActions = {
  ...hitActions,
  ...enemyActions,
  ...playerActions
}

const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch),[dispatch])
}

export default useActions