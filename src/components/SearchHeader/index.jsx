import { DefaultPalette, flatten, FontSizes, Label, ProgressIndicator, SearchBox, Stack } from '@fluentui/react'
// import { Segment } from '@fluentui/react-northstar'
import React, { Component } from 'react'

const itemAlignmentsStackTokens = {
    childrenGap: 5,
    padding: 10,
}

export default class SearchHeader extends Component {
    render() {
        return (
            <Stack style={{
                // height: '30vh',
                background: DefaultPalette.themeLighter,
                margin: 0
            }}
                tokens={itemAlignmentsStackTokens}
            >
                <Stack.Item align="auto">
                    <ProgressIndicator progressHidden={false} />
                </Stack.Item>
                <Stack.Item align="center">
                    <Label style={{
                        fontSize: FontSizes.size42
                    }}>Github 用户搜索</Label>
                </Stack.Item>
                <Stack.Item align="center">
                    <SearchBox placeholder="要搜寻的Github用户" />
                </Stack.Item>
            </Stack>
        )
    }
}
