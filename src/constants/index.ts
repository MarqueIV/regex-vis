import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

const fullTailwindConfig = resolveConfig(tailwindConfig)

// graph
export const GRAPH_TEXT_FONT_SIZE = 16
export const GRAPH_NODE_PADDING_VERTICAL = 2
export const GRAPH_NODE_PADDING_HORIZONTAL = 10
export const GRAPH_NODE_BORDER_RADIUS = 5
export const GRAPH_NODE_MARGIN_VERTICAL = 15
export const GRAPH_NODE_MARGIN_HORIZONTAL = 25
export const GRAPH_GROUP_NODE_PADDING_VERTICAL = 15
export const GRAPH_CHOICE_PADDING_HORIZONTAL = 25
export const GRAPH_CHOICE_PADDING_VERTICAL = 10
export const GRAPH_ROOT_RADIUS = 5
export const GRAPH_NODE_MIN_WIDTH = 20
export const GRAPH_NODE_MIN_HEIGHT = 26
export const GRAPH_ICON_SIZE = 18
export const GRAPH_QUANTIFIER_MEASURE_HEIGHT = 16
export const GRAPH_NAME_MEASURE_HEIGHT = 16
export const GRAPH_QUANTIFIER_TEXT_FONTSIZE = 14
export const GRAPH_NAME_TEXT_FONTSIZE = 14
export const GRAPH_QUANTIFIER_HEIGHT = Math.max(
  GRAPH_QUANTIFIER_TEXT_FONTSIZE * 1.5,
  GRAPH_ICON_SIZE,
)
export const GRAPH_NAME_HEIGHT = Math.max(
  GRAPH_NAME_TEXT_FONTSIZE * 1.5,
  GRAPH_ICON_SIZE,
)
export const GRAPH_QUOTE_PADDING = 2

export const GRAPH_PADDING_VERTICAL = 50
export const GRAPH_PADDING_HORIZONTAL = 50
export const GRAPH_WITHOUT_ROOT_PADDING_VERTICAL = 5
export const GRAPH_WITHOUT_ROOT_PADDING_HORIZONTAL = 5

// storage key
export const STORAGE_TEST_CASES = 'test-cases'
export const STORAGE_GRAPH_TIP_VISIBLE = 'graph-tip-visible'

// url search param
export const SEARCH_PARAM_REGEX = 'r'
export const SEARCH_PARAM_TESTS = 't'

export const REGEX_FONT_FAMILY = fullTailwindConfig.theme.fontFamily.mono.join(', ')
