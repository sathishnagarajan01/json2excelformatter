export type FillPatterns =
	| 'none' | 'solid'
	| 'darkVertical' | 'darkHorizontal' | 'darkGrid' | 'darkTrellis' | 'darkDown' | 'darkUp'
	| 'lightVertical' | 'lightHorizontal' | 'lightGrid' | 'lightTrellis' | 'lightDown' | 'lightUp'
	| 'darkGray' | 'mediumGray' | 'lightGray' | 'gray125' | 'gray0625';
    
export interface argb {
    argb?: string
}

export interface fill {
    type: any,
    pattern: any,
    fgColor?: argb,
    bgColor?: argb
}

export interface font {
    color?: argb,
    size?: number,
    bold?: boolean,
    italic?: boolean,
    strike?: boolean,
    outline?: boolean,
    underline?: any
}

export interface style {
    fill: fill,
    font: font
}