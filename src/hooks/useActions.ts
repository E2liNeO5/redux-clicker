import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { actions as hitActions } from "../store/hit.slice"
import { useAppDispatch } from "./typedHooks"

const rootActions = {
  ...hitActions
}

const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch),[dispatch])
}

export default useActions