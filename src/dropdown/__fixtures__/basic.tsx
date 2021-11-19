import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import { CellGroup, DropdownMenu, DropdownItem } from 'react-native-xiaoshu'

const itemOptions = [
  { label: '全部商品', value: null },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14].map(v => ({
    label: `商品分类${v}`,
    value: v,
  })),
]

const itemOptions2 = [
  { label: '全部商品', value: null },
  ...[1, 2, 3, 4].map(v => ({
    label: `商品分类${v}`,
    value: v,
  })),
]

const BasicDropdown: React.FC = () => {
  const [values, setValues] = useState({
    v1: itemOptions[0].value,
    v2: itemOptions[0].value,
    v3: itemOptions[0].value,
    v4: itemOptions[0].value,
  })

  return (
    <ScrollView scrollsToTop={false}>
      <CellGroup title="基础用法">
        <DropdownMenu>
          <DropdownItem
            options={itemOptions}
            value={values.v1}
            onChange={v => {
              setValues(s => ({
                ...s,
                v1: v as number,
              }))
            }}
          />
          <DropdownItem
            disabled
            options={itemOptions}
            defaultValue={values.v2}
          />
        </DropdownMenu>

        <View style={{ height: 200 }} />

        <DropdownMenu direction="up" activeColor="#f30">
          <DropdownItem
            options={itemOptions}
            value={values.v3}
            onChange={v => {
              setValues(s => ({
                ...s,
                v3: v as number,
              }))
            }}
          />
          <DropdownItem
            options={itemOptions2}
            value={values.v4}
            onChange={v => {
              setValues(s => ({
                ...s,
                v4: v as number,
              }))
            }}
          />
        </DropdownMenu>

        <View style={{ height: 500 }} />

        <DropdownMenu direction="up" activeColor="#f30">
          <DropdownItem
            options={itemOptions}
            value={values.v3}
            onChange={v => {
              setValues(s => ({
                ...s,
                v3: v as number,
              }))
            }}
          />
          <DropdownItem
            options={itemOptions2}
            value={values.v4}
            onChange={v => {
              setValues(s => ({
                ...s,
                v4: v as number,
              }))
            }}
          />
        </DropdownMenu>

        <View style={{ height: 300 }} />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicDropdown
