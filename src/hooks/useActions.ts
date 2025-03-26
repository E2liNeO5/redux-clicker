import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { hitActions } from "../store/hit.slice"
import { enemyActions } from "../store/enemy.slice"
import { playerActions } from "../store/player.slice"
import { useAppDispatch } from "./typedHooks"
import { levelActions } from "../store/level.slice"

const rootActions = {
  ...hitActions,
  ...enemyActions,
  ...playerActions,
  ...levelActions
}

const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch),[dispatch])
}

export default useActions