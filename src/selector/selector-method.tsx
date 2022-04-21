import React, { useEffect, memo } from 'react'

import { usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'

import type {
  SelectorMethodProps,
  SelectorValue,
  SelectorOption,
} from './interface'
import Selector from './selector'

/**
 * Selector 函数使用时对应需要的组件
 */
const SelectorMethod: React.FC<SelectorMethodProps> = ({
  onChange,
  onClose,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false)
  const onChangePersistFn = usePersistFn(
    (v: SelectorValue | SelectorValue[], o: SelectorOption[]) => {
      onChange?.(v, o)
      setVisible(false)
    },
  )
  const onClosePersistFn = usePersistFn(() => {
    onClose?.()
    setVisible(false)
  })

  const onRequestClose = usePersistFn(() => {
    onClosePersistFn()
    return true
  })

  // 节点加载好后显示
  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <Selector
      {...restProps}
      visible={visible}
      onChange={onChangePersistFn}
      onClose={onClosePersistFn}
      onRequestClose={onRequestClose}
    />
  )
}

export default memo(SelectorMethod)
