import React, { useMemo, memo } from 'react'
import { View } from 'react-native'

import DescriptionContext from './context'
import type { DescriptionGroupProps } from './interface'

const DescriptionGroup: React.FC<DescriptionGroupProps> = ({
  colon = true,
  contentStyle,
  contentTextStyle,
  labelStyle,
  labelTextStyle,
  labelWidth,
  layout = 'horizontal',
  size = 'm',
  numberOfLines,
  justify,
  align,

  ...restProps
}) => {
  const value = useMemo(
    () => ({
      colon,
      contentStyle,
      contentTextStyle,
      labelStyle,
      labelTextStyle,
      labelWidth,
      layout,
      size,
      numberOfLines,
      justify,
      align,
    }),
    [
      colon,
      contentStyle,
      contentTextStyle,
      labelStyle,
      labelTextStyle,
      labelWidth,
      layout,
      size,
      numberOfLines,
      justify,
      align,
    ],
  )

  return (
    <DescriptionContext.Provider value={value}>
      <View {...restProps} />
    </DescriptionContext.Provider>
  )
}

export default memo<typeof DescriptionGroup>(DescriptionGroup)
